window.onload = function () {
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    i = 0;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successTrivial, error, options);
        setTimeout(function () {
            console.log("STARTME---" + new Date().getTime())
            navigator.geolocation.getCurrentPosition(success, error, options);

        }, 15000);

    }

    function successTrivial() {}

    function success() {
        i++;
        if (i == 100) {
            console.log("STOPME---" + new Date().getTime())
        } else {
            navigator.geolocation.getCurrentPosition(success, error, options);
        }
    }

    function error(err) {
        i++;
        if (i == 100) {
            console.log("STOPME---" + new Date().getTime())
        } else {
            navigator.geolocation.getCurrentPosition(success, error, options);
        }
    }
}