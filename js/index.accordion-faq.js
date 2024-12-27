const accordionHeaders = document.querySelectorAll(".faq-accordion__header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    header.classList.toggle("faq-accordion__header--active");
    content.classList.toggle("faq-accordion__content--open");
  });
});
