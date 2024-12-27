const headerTitle = document.querySelector(".header__title");
// якщо хочемо знайти багато елементів
// const elements = document.querySelectorAll(".header__title");
// headerTitle.style.color = "red";
// додати клас
headerTitle.classList.add('selected');

const greetings = [
    "Привіт!",
    "Вітаю!",
    "Доброго дня!",
    "Слава Україні!",
    "Героям слава!",
    "Доброго ранку!",
    "Доброго вечора!",
    "Доброї ночі"
];

const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
headerTitle.innerText = randomGreeting;