let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const slideInterval = 2500;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

// Set the automatic slideshow interval
setInterval(nextSlide, slideInterval);

// Show the first slide initially
showSlide(currentSlideIndex);

//Final check for slider decoration