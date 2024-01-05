//Testimonial Slides

  document.addEventListener('DOMContentLoaded', function () {
    const testimonialBox = document.querySelector('.testimonial-box');
    const testimonialsBg = document.querySelector('.testimonials-bg');
    const testimonialsContainer = document.querySelectorAll('.testimonials-container');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    

    let currentIndex = 0;

    function showSlide(index) {
      gsap.set(testimonialsContainer, { opacity: 0 });
      gsap.to(testimonialsContainer[index], { opacity: 1, duration: 0.5 });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % testimonialsContainer.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + testimonialsContainer.length) % testimonialsContainer.length;
      showSlide(currentIndex);
    }

    showSlide(currentIndex);

    // Event listeners for next and previous buttons
    rightArrow.addEventListener('click', nextSlide);
    leftArrow.addEventListener('click', prevSlide);
   });
