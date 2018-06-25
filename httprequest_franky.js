window.onload = function () {
    var counter1 = 1

    setTimeout(function () {
        console.log("STARTME---" + new Date().getTime())
        var xmlHttp = new XMLHttpRequest();
        var now = Date.now()
        getRequest(xmlHttp)
        xmlHttp.onreadystatechange = function () {
            if (Date.now()-now == 60000 && counter1 == 1) {
                console.log("STOPME---" + new Date().getTime())
                counter1++;
            } else if (xmlHttp.status == 200 && counter1 == 1) {
                getRequest(xmlHttp)
                counter--;
            }
        }
    }, 15000);

    function getRequest(xmlHttp) {
        xmlHttp.open("GET", "https://adhivirapt.github.io/blah/", true); // true for asynchronous 
        xmlHttp.send(null);
    }
}