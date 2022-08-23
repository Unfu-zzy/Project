

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && prevScrollpos > 0) {
    document.getElementById("nav").style.top = "0";
    document.getElementById("nav").style.background = "Black";
    document.getElementById("nav").style.color = "white";
    document.getElementById("bottom-nav").style.background = "Black";
    document.getElementById("bottom-nav").style.top = "80px";
    dumb()
  } else {
    document.getElementById("nav").style.top = "-80px";
    document.getElementById("nav").style.background = "none";
    document.getElementById("bottom-nav").style.top = "0px";
    document.getElementById("bottom-nav").style.background = "none";
    dumb()
  }
  prevScrollpos = currentScrollPos;
  if(currentScrollPos == 0){
    document.getElementById("nav").style.background = "none";
    document.getElementById("bottom-nav").style.background = "none";
    document.getElementById("bottom-nav").style.top = "80";
}
}

AOS.init();