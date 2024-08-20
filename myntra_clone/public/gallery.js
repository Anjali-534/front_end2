document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slides");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  // Initial slide
  showSlide(currentIndex);

  // Automatic slideshow
  setInterval(nextSlide, 3000); // Change image every 3 seconds
});
function enlargeImage(imgElement) {
  var enlargedImg = document.getElementById("enlarged-image");
  enlargedImg.src = imgElement.src; // Set the source of the enlarged image to the clicked thumbnail
}
