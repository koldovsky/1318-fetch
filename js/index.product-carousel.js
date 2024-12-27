const slides = [
  '<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
  '<div><img src="img/banana.svg" alt="Banana"></div>',
  '<div><img src="img/girl.svg" alt="Girl"></div>',
  '<div><img src="img/viking.svg" alt="Viking"></div>',
];

let currentIndex = 0;

function renderCarousel(slides) {
  const slidesContainer = document.querySelector(".product-carousel__slides");
  slidesContainer.innerHTML = slides[currentIndex];
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIdx =
      currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;
    slidesContainer.innerHTML += slides[secondSlideIdx];
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const thirdSlideIdx =
        secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
      slidesContainer.innerHTML += slides[thirdSlideIdx];
    }
  }
}

function showNextSlide() {
  currentIndex = currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;
  renderCarousel(slides);
}

function showPrevSlide() {
  currentIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
  renderCarousel(slides);
}

const nextButton = document.querySelector(".product-carousel__btn-next");
const prevButton = document.querySelector(".product-carousel__btn-prev");

nextButton.addEventListener("click", showNextSlide);
prevButton.addEventListener("click", showPrevSlide);

// setInterval(showNextSlide, 3000);

renderCarousel(slides);

window.addEventListener("resize", () => renderCarousel(slides));
