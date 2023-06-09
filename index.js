document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel-container");
    const slidesContainer = carousel.querySelector(".carousel-slides");
    const slides = Array.from(slidesContainer.children);
    const prevBtn = carousel.querySelector(".prev-btn");
    const nextBtn = carousel.querySelector(".next-btn");
  
    let slideWidth = slides[0].getBoundingClientRect().width;
    let slideIndex = 0;
    let slideInterval = setInterval(nextSlide, 5000);
  
    slidesContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  
    function moveToSlide(index) {
      slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
      slideIndex = index;
      updateButtonStates();
    }
  
    function updateButtonStates() {
      prevBtn.disabled = slideIndex === 0;
      nextBtn.disabled = slideIndex === slides.length - 1;
    }
  
    function nextSlide() {
      if (slideIndex === slides.length - 1) {
        moveToSlide(0);
      } else {
        moveToSlide(slideIndex + 1);
      }
    }
  
    function prevSlide() {
      if (slideIndex === 0) {
        moveToSlide(slides.length - 1);
      } else {
        moveToSlide(slideIndex - 1);
      }
    }
  
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
  
    slides.forEach((slide, index) => {
      const button = document.createElement("button");
      button.textContent = index + 1;
      button.addEventListener("click", () => moveToSlide(index));
      carousel.querySelector(".carousel-buttons").appendChild(button);
    });
  
    updateButtonStates();
  });
  