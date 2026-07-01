document.addEventListener("DOMContentLoaded", () => {
  /* YEAR IN FOOTER */
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* TORONTO SKYLINE SLIDER */
  const slides = document.querySelectorAll(".hero-slider .slide");
  let currentSlide = 0;

  if (slides.length > 0) {
    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 5000);
  }

  /* ABOUT US DROPDOWN */
  document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
    toggle.addEventListener("click", () => {
      toggle.parentElement.classList.toggle("open");
    });
  });

  /* CONTRIBUTE BUTTON (only runs if paymentForm exists) */
  const contributeBtn = document.getElementById("contributeButton");
  const paymentForm = document.getElementById("paymentForm");

  if (contributeBtn && paymentForm) {
    contributeBtn.addEventListener("click", () => {
      paymentForm.style.display = "block";
      paymentForm.scrollIntoView({ behavior: "smooth" });
    });
  }
});
