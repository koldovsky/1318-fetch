function init() {
  import("./index.header-text.js");
  import("./index.header-clock.js");
  import("./index.product-carousel.js");
  import("./index.product-carousel-animated.js");
  import("./index.product-list.js");
  import("./index.accordion-faq.js");
  import("./index.footer-form.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
