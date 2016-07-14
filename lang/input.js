var audio = null;
var audioStream = null;
var recNumber = 0;

function run() {
  var audio = document.getElementById("audio");
  //Make sure the browser supports it
  window.navigator = window.navigator || {};
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || null;

  if (navigator.getUserMedia === null) {
    document.getElementById('unsupported').classList.remove('hidden');
    document.getElementById('recordBTN').setAttribute('disabled', 'disabled');
    document.getElementById('stopBTN').setAttribute('disabled', 'disabled');
  }
  else {
    var createSRC = window.URL ? window.URL.createObjectURL : function(stream) {return stream;};
var on = false;
var firstTime = true;
var timeStart = 0;
var timePoint = 0;
var pausedTime = 0;
document.getElementById('record').addEventListener('click', function() {

  if (on) {
    timePoint =  ((Date.now() - timeStart) / 1000) + pausedTime;
    audio.pause();
    on = false;

  } else if (!on && !firstTime) {
    pausedTime = timePoint;
    timeStart = Date.now();
    audio.currentTime = timePoint;
    on = true;
  }else {
  timeStart = Date.now();
  //captures audio and not video
  navigator.getUserMedia({
    video: false,
    audio: true
  },
  function(stream) {
    audioStream = stream;
    //Stream the data
    audio.src = createSRC(stream);
    audio.play();
  },
  function(error) {
    console.log("Audio error:", error.code);
  });
  on = true;
  firstTime = false;
}
});
  }

}

function saveAudio() {
    audio.exportWAV( doneEncoding );
}

function doneEncoding( blob ) {
    Recorder.setupDownload( blob, "myRecording" + recNumber + ".wav" );
    recNumber++;
}
