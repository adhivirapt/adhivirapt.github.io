window.onload = function () {
    console.log("STARTME---" + new Date().getTime())
    var now = Date.now()
    while (Date.now()-now<60000) {
        sessionStorage.setItem(i, "");
    }
    console.log("STOPME---" + new Date().getTime())


}