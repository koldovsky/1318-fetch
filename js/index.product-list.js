const products = [
  {
    id: "1",
    name: "Baby Yoda",
    price: 100,
    image: "img/baby-yoda.svg",
    description:
      "The Child, colloquially referred to as Baby Yoda by fans and the media, is a fictional character from the Star Wars Disney+ original television series The Mandalorian. Baby Yoda is a member of the same species as the iconic Star Wars character Yoda, but is much younger and cuter. The character has become a cultural phenomenon and is beloved by fans of all ages.",
  },
  {
    id: "2",
    name: "Banana",
    price: 80,
    image: "img/banana.svg",
    description:
      "The banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. Bananas are one of the most popular fruits worldwide, known for their sweet taste and nutritional benefits. They are rich in potassium, vitamins, and fiber, making them a healthy snack option. Bananas can be eaten on their own, added to smoothies, or used in baking.",
  },
  {
    id: "3",
    name: "Girl Sticker",
    price: 120,
    image: "img/girl.svg",
    description:
      "Sticker with a beautiful girl. This sticker features a stylish and artistic depiction of a girl, perfect for decorating laptops, notebooks, or any other surface. The high-quality design ensures that the sticker is both durable and visually appealing. It's a great way to add a personal touch to your belongings and express your unique style.",
  },
  {
    id: "4",
    name: "Viking",
    price: 150,
    image: "img/viking.svg",
    description:
      "Vikings were the seafaring Norse people from southern Scandinavia (in present-day Denmark, Norway and Sweden) who from the late 8th to late 11th centuries raided, pirated, traded and settled throughout parts of Europe. Known for their longships and warrior culture, Vikings have left a lasting legacy in history and popular culture. This product celebrates the adventurous spirit and rich heritage of the Viking age, making it a perfect gift for history enthusiasts and fans of Norse mythology.",
  },
];

function renderProducts(products) {
  let productsHTML = "";
  for (const product of products) {
    productsHTML += `
            <article class="products__item">
                            <img class="products__image" src="${product.image}" alt="${product.name}">
                            <h3 class="products__name">${product.name}</h3>
                            <p class="products__description">${product.description}</p>
                            <div class="products__actions">
                                <button class="products__button products__button--info button button-card">
                                    Info
                                </button>
                                <button class="products__button products__button--buy button button-card">
                                    Buy - ${product.price}
                                </button>
                            </div>
            </article>
        `;
  }
  const productsContainer = document.querySelector(".products__list");
  productsContainer.innerHTML = productsHTML;
}
renderProducts(products);
