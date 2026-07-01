document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Toronto Skyline Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slider .slide");

function rotateSlides() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(rotateSlides, 5000); // 5 seconds per slide

// About Us Dropdown Toggle
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentElement.classList.toggle('open');
  });
});

// Contribute Button
document.getElementById("contributeButton").onclick = () => {
  document.getElementById("paymentForm").style.display = "block";
  document.getElementById("paymentForm").scrollIntoView({ behavior: "smooth" });
};
