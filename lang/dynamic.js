var on = false;
var started = true;
var goNihongo = {};
function record(){
  if (started) {
  var disappear = document.querySelector("#record");
  disappear.style.borderTopColor = "transparent";
  disappear.style.borderBottomColor = "transparent";
  var rotate = document.getElementById("record");
  rotate.style.animationName = "rotate";
  rotate.style.animationDuration = "4s";
  rotate.style.animationIterationCount = "infinite";
  started = false;
  on = true;
} else if (on) {
  var pause = document.querySelector("#record");
  pause.style.animationPlayState = "paused";
  on = false;
} else {
  var resume = document.querySelector("#record");
  resume.style.animationPlayState = "running";
  on = true;
}
}

var currentPossiton;
goNihongo.prompts = ["今日はどうですか？　なにをしましたか？", "どな食べ物が好きですか？どな味がありますか？", "どな食べ物が好きですか？どな味がありますか？", "一番好きな動物はなんですか？なぜ？その動物について説明してください。", "家族と一番好きなメモリはなんですか？", "この世で一番好きな所はどこですか？なぜ？そこでなにをしますか？", "今の気持ちを説明してください。なぜそれを感じますか？", "一番好きな映画はなんですか？なぜその映画が好きですか？", "将来の夢はなんですか？なぜそれがほしいですか？どうしてそれをやりますか？", "一番好きな英語ことばはなんですか？なぜ？日本語で意味を説明してください。", "もしなんでもを受けることがでけたらなにがほしいですか？なぜそれがほしい？"];

function prompt(){
var pastPrompts;
var promptNum;
while (true) {
  promptNum = Math.floor(Math.random() * 10);
  if (promptNum != currentPossiton) {
    break;
  }
}

  currentPossiton = promptNum;
  var promptLoc = document.getElementById('prompt');
  var text = document.createTextNode(goNihongo.prompts[promptNum]);
  promptLoc.appendChild(text);

}

function next(){
  var touchArea = document.getElementById('nextArrow'),
  startX, startY,
  threshold = 150,
  allowedTime = 200,
  elapsedTime, startTime, response;

  touchArea.addEventListener('touchstart', function(e){
    var touchData = e.changedTouches[0];
    startX = touchData.pageX;
    startY = touchData.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  }, false);

  touchArea.addEventListener('touchmove', function(e){
    e.preventDefault(); // prevents scrolling
  }, false);

  touchArea.addEventListener('touchend', function(e){
    var touchData = e.changedTouches[0];
    var xChange = touchData.pageX - startX;
    var yChange = touchData.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if (Math.abs(xChange) <= 50 && Math.abs(yChange) <= 50 && threshold >= elapsedTime) {

  var moveArrow = document.getElementById("nextArrow");
  nextArrow.style.animationName = "wiggle";
  nextArrow.style.animationDuration = ".5s";
  nextArrow.style.animationIterationCount = "1";

  nextArrow.addEventListener("animationend", function(){
    nextArrow.style.animationName = null;
    var promptLoc = document.getElementById('prompt');
    promptLoc.innerHTML = '';
    prompt();

  }, false);
}
});
}

function runFunctions(){
  prompt(); next();
}
window.onload=runFunctions;
