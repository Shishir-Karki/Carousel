let indexes= 0;
const slides= document.querySelectorAll(".cards");
const totalSlides= slides.length;
let autoSlideInterval;

function showSlide(index) {
    if (index>= totalSlides) indexes= 0;
    else if (index < 0) indexes = totalSlides - 1;
    else  indexes= index;
  
  const offset= -indexes*100;
  document.querySelector(".items").style.transform= `translateX(${offset}%)`;
}
function nextSlide() {
  showSlide(indexes+ 1);
}


function prevSlide() {
  showSlide(indexes- 1);
}


function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 2000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}



startAutoSlide();


document.querySelector(".carousel").addEventListener("mouseenter", stopAutoSlide);
document.querySelector(".carousel").addEventListener("mouseleave", startAutoSlide);
