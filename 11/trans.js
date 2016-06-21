function reveal(){
  var reveal = document.getElementById("coolness");
   reveal.style.webkitClipPath = "circle(100% at center)";
   reveal.style.clipPath = "circle(100% at center)";
}

function disappear(URL){
  var disappear = document.getElementById("coolness");
   disappear.style.webkitClipPath = "circle(0% at center)";
   disappear.style.clipPath = "circle(0% at center)";

   disappear.addEventListener("transitionend", function(){
       window.location = URL;
     }, false);
}
