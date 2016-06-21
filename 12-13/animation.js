function logoAnimate(URL){
    var logo = document.getElementById("logo");
    logo.style.animationName = "wiggle";
    logo.style.animationDuration = ".5s";
    logo.style.animationIterationCount = "1";

    logo.addEventListener("animationend", function(){
      logo.style.animationName = null;
      window.location = URL;
    }, false);
}
