window.onload = function () {
    var options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
    };
    i = 0;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, options);
        setTimeout(function () {
            console.log("STARTME---" + new Date().getTime())
            navigator.geolocation.getCurrentPosition(success, error, options);

        }, 15000);

    }

    function success() {
        i++;
        console.log(i)
        if (i == 50000) {
            console.log("STOPME---" + new Date().getTime())
        } else {
            navigator.geolocation.getCurrentPosition(success, error, options);
        }
    }

    function error(err) {
        i++;
        console.log(i)
        if (i == 50000) {
            console.log("STOPME---" + new Date().getTime())
        } else {
            navigator.geolocation.getCurrentPosition(success, error, options);
        } i++;
    }
}