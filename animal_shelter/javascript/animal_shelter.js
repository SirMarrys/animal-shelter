// Sticky header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Event slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.event-slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.event-slider').style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-advance slides every 5 seconds
setInterval(nextSlide, 5000);

// Initialize the first slide
showSlide(0);

// Add event listeners for side navigation
document.addEventListener('DOMContentLoaded', function() {
    const sidenavToggle = document.getElementById("sidenavToggle");
    if (sidenavToggle) {
        sidenavToggle.addEventListener("click", openNav);
    }

    const closeBtn = document.querySelector(".sidenav .closebtn");
    if (closeBtn) {
        closeBtn.addEventListener("click", closeNav);
    }
});