
window.onload = function () {
    if (navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia({ audio: true })
        setTimeout(function () {
            navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
                // store streaming data chunks in array
                var counter = 0;
                // create media recorder instance to initialize recording
                const recorder = new MediaRecorder(stream);
                // function to be called when data is received
                recorder.ondataavailable = e => {
                    if (counter == 100) {
                        recorder.stop();
                        console.log("STOPME---" + new Date().getTime())
                    }
                    // add stream data to chunks
                    counter ++;
        
                };
                // start recording with 1 second time between receiving 'ondataavailable' events
                console.log("STARTME---" + new Date().getTime())
                recorder.start(200)
                // setTimeout to stop recording after 4 seconds
        
            }).catch(console.error);
        }, 20000);

    }

}