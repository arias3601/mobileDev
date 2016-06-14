function runFunctions(){
  transform(); //add N1 - N4 for nasty paths
  animation();

}
//TRANSFORMATIONS
function transform(){
   document.getElementById("circleT").style.WebkitTransition = "all 5s";
}
//NASTY
//random text at the end - just makes it run like no transition was made
function transformN1(){
   document.getElementById("circleT").style.WebkitTransition = "hello world";
}
//null at the end - just makes it run like no transition was made
function transformN2(){
   document.getElementById("circleT").style.WebkitTransition = null;
}
//true at the end - just makes it run like no transition was made
function transformN3(){
   document.getElementById("circleT").style.WebkitTransition = true;
}
//make it a really small number - transition still "exists" however, it is unseeable and looks like it has no transtion.
function transformN4(){
   document.getElementById("circleT").style.WebkitTransition = ".01s";
}



//ANIMATION
function animation(){
  var animate = document.getElementById("theAnimation");
    var posLR = 0;
    var posUD = 0;
    var checkUD = 0;
    var checkLR = 0;
    var id = setInterval(frame, 5);
    function frame() {
     if (checkUD === 1) { //makes it go up
         posUD--;
         animate.style.top = posUD + 'px';
         if (posUD === 0) { //changes the direction to going down
           checkUD = 0;
         }

         if(checkLR === 0){ //makes it go left
         posLR++;
         animate.style.left = posLR + 'px';
         if (posLR === 450) { //changes the direction to going right
          checkLR = 1;
         }
       } else { //makes it go right
         posLR--;
         animate.style.left = posLR + 'px';
         if (posLR === 0) { //changes the direction to going Left
          checkLR = 0;
         }
       }
     } else { //makes it go down
       posUD++;
       animate.style.top = posUD + 'px';
       if (posUD == 350) { //changes the direction to going up
         checkUD = 1;
       }

       if(checkLR === 0){ //makes it go left
       posLR++;
       animate.style.left = posLR + 'px';
       if (posLR === 450) { //changes the direction to going right
        checkLR = 1;
       }
       } else { //makes it go right
       posLR--;
       animate.style.left = posLR + 'px';
       if (posLR === 0) { //changes the direction to going Left
        checkLR = 0;
       }
     }
   }
  }
}


//NASTY
//using % instead of px - works and in this case sends it 350% off the page
function animationN1(){
  var animate = document.getElementById("theAnimation");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
       pos++;
       animate.style.top = pos + '%';
       animate.style.left = pos + '%';
       if (pos == 350) {
          clearInterval(id);
       }
     }
  }

  //only set a frame in setInterval no # - seems to set a predefined value of approximitly 5
  function animationN2(){
    var animate = document.getElementById("theAnimation");
      var pos = 0;
      var id = setInterval(frame);
      function frame() {
         pos++;
         animate.style.top = pos + 'px';
         animate.style.left = pos + 'px';
         if (pos == 350) {
            clearInterval(id);
         }
       }
    }

    //only set a # in setInterval no frame - no animation
    function animationN3(){
      var animate = document.getElementById("theAnimation");
        var pos = 0;
        var id = setInterval(5);
        function frame() {
           pos++;
           animate.style.top = pos + 'px';
           animate.style.left = pos + 'px';
           if (pos == 350) {
              clearInterval(id);
           }
         }
      }

  //what if it goes left (off the screen) - It teleports to the right corner and begins moving to the bottom left, Wait what???
  function animationN4(){
    var animate = document.getElementById("theAnimation");
      var pos = 0;
      var id = setInterval(frame, 5);
      function frame() {
         pos++;
         animate.style.top = pos + 'px';
         animate.style.right = pos + 'px';
         if (pos == 350) {
            clearInterval(id);
         }
       }
    }
