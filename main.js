// Navigation Slidder 
$(document).ready(function(){
    $('.menu-toggle').click(function(){
      $('nav').toggleClass('active');
    })
  })
  
  //Image Slidder 
  /*
  let i = 0;
  let images = [];
  let time = 3000;
  
  //Images
  
  images[0] = '../images/slide1.jpg'
  images[1] = '../images/slide2.jpg'
  images[1] = '../images/slide3.jpg'
  
  //Chnage Images
  
  function changeImages(){
    document.slide.src = images[i];
    if(i < images.length - 1){
      i++;
  
    }else{
  i = 0;
    }
    setTimeout("changeImages()", time);
  }
  
  window.onload = changeImages;
  */
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }