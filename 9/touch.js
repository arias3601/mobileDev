function runFunctions(){
  touch();
}

function touch(){
  //Set up
  var canvas = document.getElementById('canvas'),
      startX, startY,
      threshold = 150, //required min distance traveled to be considered swipe
      allowedTime = 200, // maximum time allowed to travel that distance
      elapsedTime, startTime, response;

//Begins a touch
      canvas.addEventListener('touchstart', function(e){
          canvas.innerHTML = '';
          var touchobj = e.changedTouches[0];
          startX = touchobj.pageX;
          startY = touchobj.pageY;
          startTime = new Date().getTime(); // record time when finger first makes contact with surface
          e.preventDefault();
      }, false);

//tracks the touch
      canvas.addEventListener('touchmove', function(e){
          e.preventDefault(); // prevent scrolling when inside Canvas
      }, false);

//handles the end of a touch
      canvas.addEventListener('touchend', function(e){
          var touchobj = e.changedTouches[0];
          var xChange = touchobj.pageX - startX;
          var yChange = touchobj.pageY - startY;
          elapsedTime = new Date().getTime() - startTime; // get time elapsed
          // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
          //RIGHT
          if(xChange > 0){
          var swipeRightBol = (elapsedTime <= allowedTime && xChange >= threshold && Math.abs(touchobj.pageY - startY) <= 100);
          if (swipeRightBol)
            response = "R";
        } else if (xChange < 0){
          //LEFT
          var swipeLeftBol = (elapsedTime <= allowedTime && Math.abs(xChange) >= threshold && Math.abs(touchobj.pageY - startY) <= 100);
          if (swipeLeftBol)
            response = "L";
          }
          //UP
          if(yChange < 0){
          var swipeUpBol = (elapsedTime <= allowedTime && Math.abs(yChange) >= threshold && Math.abs(touchobj.pageX - startX) <= 100); //
          if (swipeUpBol)
            response = "U";
        } else if (yChange > 0) {
          //DOWN
          var swipeDownBol = (elapsedTime <= allowedTime && yChange >= threshold && Math.abs(touchobj.pageX - startX) <= 100);
          if (swipeDownBol)
            response = "D";
          }
          handleSwipe(response);

          //TAP
          var timeout;
          var currentTime = new Date().getTime();
          var tapLength = currentTime - elapsedTime;
          clearTimeout(timeout);
          if(Math.abs(xChange) <= 50 && Math.abs(yChange) <= 50) {
              timeout = setTimeout(function() {
                document.getElementById('log').innerHTML = "You just single taped!";
                  clearTimeout(timeout);
              }, 200);
          }

      }, false);

//Handles a swipe's response
      function handleSwipe(response){
        if (response == "R") {
          document.getElementById('log').innerHTML = "You\'ve made a right swipe!";
        } else if (response == "L") {
          document.getElementById('log').innerHTML = "You\'ve made a left swipe!";
        } else if (response == "U") {
          document.getElementById('log').innerHTML = "You\'ve made a up swipe!";
        } else if (response == "D") {
          document.getElementById('log').innerHTML = "You\'ve made a down swipe!";
        }
      }


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


}
