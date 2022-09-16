//Get the button
upbutton = document.getElementById("upBtn"); 
//when scrolling down more than 20px
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    upbutton.style.display = "block";
  }
  else{
    upbutton.style.display = "none";
  }
}
//clicking on the button
function topFunction(){
  document.body.scrollTop = 0; //for safari
  document.documentElement.scrollTop = 0; //for chrome
}