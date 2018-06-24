window.onload = function () {
    var counter = 200
    var counter1 = 1

    setTimeout(function () {
        console.log("STARTME---" + new Date().getTime())
        var xmlHttp = new XMLHttpRequest();
        getRequest(xmlHttp)
        xmlHttp.onreadystatechange = function () {
            if (counter == 0 && counter1 == 1) {
                console.log("STOPME---" + new Date().getTime())
                counter1++;
            } else if (xmlHttp.readyState == 4 && xmlHttp.status == 200 && counter1 == 1) {
                getRequest(xmlHttp)
                counter--;
            }
        }
    }, 15000);

    function getRequest(xmlHttp) {
        xmlHttp.open("GET", "http://localhost:8081/api/simpleExample", true); // true for asynchronous 
        xmlHttp.send(null);
    }
}