function runFunctions(){
  swipeL();
}


function swipeL(){

      var canvas = document.getElementById('canvas'),
          startX,
          startY,
          dist,
          threshold = 150, //required min distance traveled to be considered swipe
          allowedTime = 200, // maximum time allowed to travel that distance
          elapsedTime,
          startTime,
          para = document.createElement("p");

      function handleswipeR(isRightSwipe){
          if (isRightSwipe){
              console.log("You\'ve made a right swipe!");
              document.getElementById('log').innerHTML = "You\'ve made a right swipe!";
              document.getElementById('log').innerHTML = "You\'ve made a right swipe!";
            }
            else {
            }
      }

      function handleswipeL(isLeftSwipe){
          if (isLeftSwipe) {
              console.log("You\'ve made a left swipe!");
              document.getElementById('log').innerHTML = "You\'ve made a left swipe!";
          }
      }
      function handleswipeU(isUpSwipe){
          if (isUpSwipe){
              console.log("You\'ve made a up swipe!");
              document.getElementById('log').innerHTML = "You\'ve made a up swipe!";
          }
      }
      function handleswipeD(isDownSwipe){
          if (isDownSwipe) {
              console.log("You\'ve made a down swipe!");
              document.getElementById('log').innerHTML = "You\'ve made a down swipe!";
          }
      }

      canvas.addEventListener('touchstart', function(e){
          canvas.innerHTML = '';
          var touchobj = e.changedTouches[0];
          dist = 0;
          startX = touchobj.pageX;
          startY = touchobj.pageY;
          startTime = new Date().getTime(); // record time when finger first makes contact with surface
          e.preventDefault();
      }, false);

      canvas.addEventListener('touchmove', function(e){
          e.preventDefault(); // prevent scrolling when inside DIV
      }, false);

      canvas.addEventListener('touchend', function(e){
          var touchobj = e.changedTouches[0];
          // get total dist traveled by finger while in contact with surface
          dist = touchobj.pageX - startX + touchobj.pageY - startY;
          distForRight = touchobj.pageX - startX; //For right
          distForLeft = -touchobj.pageX + startX; //For left
          distForUp = -touchobj.pageY + startY; //For up
          distForDown = touchobj.pageY - startY; //For down
          elapsedTime = new Date().getTime() - startTime; // get time elapsed
          // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
          //RIGHT
          var swipeRightBol = (elapsedTime <= allowedTime && distForRight >= threshold && Math.abs(touchobj.pageY - startY) <= 100); //
          handleswipeR(swipeRightBol);
          //LEFT
          var swipeLeftBol = (elapsedTime <= allowedTime && distForLeft >= threshold && Math.abs(touchobj.pageY - startY) <= 100);
          handleswipeL(swipeLeftBol);
          //UP
          var swipeUpBol = (elapsedTime <= allowedTime && distForUp >= threshold && Math.abs(touchobj.pageX - startX) <= 100); //
          handleswipeU(swipeUpBol);
          //DOWN
          var swipeDownBol = (elapsedTime <= allowedTime && distForDown >= threshold && Math.abs(touchobj.pageX - startX) <= 100);
          handleswipeD(swipeDownBol);
          e.preventDefault();

      }, false);




      //Pinch and expand
      canvas.addEventListener('gestureend', function(e) {
    if (e.scale < 1.0) {
        console.log("You\'ve made a pinch!");
        document.getElementById('log').innerHTML = "You\'ve made a pinch!";
    } else if (e.scale > 1.0) {
        console.log("You\'ve made a anti-pinch!");
        document.getElementById('log').innerHTML = "You\'ve made a anti-pinch!";
    }
}, false);


//TAP
var timeout;
var lastTap = 0;
canvas.addEventListener('touchend', function(e) {
    var currentTime = new Date().getTime();
    var tapLength = currentTime - lastTap;
    clearTimeout(timeout);
    if(dist <= 50 && dist >= -50) {
        timeout = setTimeout(function() {
          console.log("You just single taped!");
          document.getElementById('log').innerHTML = "You just single taped!";
            clearTimeout(timeout);
        }, 200);
    }
    lastTap = currentTime;});

}
