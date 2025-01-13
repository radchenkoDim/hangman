const alphabet = 'абвгґдежзийклмнопрстуфхцчшщьюя'.split('');

const words_list_ua = [
    'патрон', 'мова', 'вода', 'ліс', 'трава', 'зима', 'сонце', 'поле', 'день', 'час', 'сніг',
    'гора', 'птах', 'рука', 'знак', 'ріка', 'душа', 'ніч', 'вікно', 'дуб', 'життя',
    'хліб', 'мрія', 'звір', 'стіл', 'вік', 'чашка', 'місто', 'земля', 'село', 'груша',
    'любов', 'шлях', 'пісня', 'лист', 'зірка', 'зошит', 'кава', 'папір', 'вулиця', 'пісок',
    'карта', 'дощ', 'будинок', 'мама', 'тато', 'сестра', 'брат', 'друг', 'світ', 'поля',
    'книга', 'море', 'осінь', 'весна', 'літо', 'яблуко', 'глина', 'кішка', 'собака', 'тінь',
    'свято', 'день', 'радість', 'доброта', 'усмішка', 'зірка', 'школа', 'звук', 'бджола',
    'метелик', 'серце', 'краса', 'війна', 'мир', 'праця', 'любов', 'життя', 'дитина', 'місто',
    'дерево', 'квітка', 'чорний', 'білий', 'зелений', 'червоний', 'синій', 'жовтий', 'рожевий',
    'вогонь', 'хмара', 'камінь', 'повітря', 'вода', 'земля', 'вікно', 'вулиця', 'сонце',
    'ніч', 'зима', 'весна', 'осінь', 'літо', 'горіх', 'груша', 'виноград', 'черешня', 'горіх',
    'борщ', 'суп', 'каша', 'молоко', 'сир', 'хліб', 'масло', 'яйце', 'риба', 'м\'ясо',
    'сирник', 'суп', 'пиріг', 'булка', 'груша', 'виноград', 'борщ', 'вода', 'чай', 'кава',
    'яблуко', 'банан', 'апельсин', 'лимон', 'виноград', 'груша', 'морква', 'буряк', 'кабачок',
    'картопля', 'капуста', 'томати', 'огірки', 'зелень', 'цибуля', 'часник', 'гарбуз', 'горох',
    'квасоля', 'рис', 'гречка', 'макарони', 'хліб', 'масло', 'молоко', 'йогурт', 'сир',
    'м\'ясо', 'риба', 'яйце', 'борщ', 'суп', 'каша', 'вода', 'чай', 'кава', 'компот',
    'сік', 'лимонад', 'борщ', 'пиріг', 'сирник', 'суп', 'булка', 'паляниця', 'сметана',
    'цукор', 'мед', 'варення', 'шоколад', 'печиво', 'цукерки', 'горіхи', 'родзинки', 'чіпси',
    'морозиво', 'желе', 'пиріг', 'булка', 'хліб', 'борщ', 'каша', 'молоко', 'сир', 'масло',
    'риба', 'м\'ясо', 'яйце', 'вода', 'чай', 'кава', 'сік', 'лимонад', 'весна', 'осінь',
    'літо', 'зима', 'сонце', 'ніч', 'день', 'місяць', 'зірка', 'повітря', 'вогонь', 'земля',
    'вода', 'дерево', 'трава', 'квітка', 'камінь', 'груша', 'виноград', 'яблуко', 'черешня',
    'персик', 'слива', 'огірок', 'помідор', 'капуста', 'морква', 'буряк', 'гарбуз', 'цибуля',
    'часник', 'горох', 'квасоля', 'рис', 'гречка', 'макарони', 'хліб', 'масло', 'сир', 'м\'ясо',
    'риба', 'яйце', 'борщ', 'каша', 'вода', 'чай', 'кава', 'сік', 'лимонад', 'пиріг',
    'булка', 'сметана', 'цукор', 'мед', 'варення', 'шоколад', 'печиво', 'цукерки', 'горіхи',
    'родзинки', 'чіпси', 'морозиво', 'желе', 'пиріг', 'булка', 'хліб', 'борщ', 'каша',
    'сметана', 'цукор', 'чай', 'вода', 'лимонад', 'каша', 'борщ', 'яблуко', 'груша', 'вода'
]

let word = words_list_ua[Math.floor(Math.random() * words_list_ua.length)];
let attempts = 10;
let guessedLetters = [];
let correctLetters = [];

// DOM elements
const wordContainer = document.getElementById('word');
const alphabetContainer = document.getElementById('alphabet');
const attemptsContainer = document.getElementById('attempts');
const messageContainer = document.getElementById('message');
const resetButton = document.getElementById('resetButton');

// Word display
function updateWordDisplay() {
    const display = word
        .split('')
        .map(letter => (correctLetters.includes(letter) ? letter : '_'))
        .join(' ');
    wordContainer.textContent = display;
}

// Attempts display
function updateAttempts() {
    attemptsContainer.textContent = `Спроб: ${attempts}`;
}

// Check win or lose
function checkWinOrLose() {
    if (!wordContainer.textContent.includes('_')) {
        messageContainer.textContent = 'Перемога!';
        alphabetContainer.innerHTML = ''; // Disable further input
        alphabetContainer.style.display = 'none';
    } else if (attempts <= 0) {
        messageContainer.textContent = `Огида! Це було слово: "${word}".`;
        alphabetContainer.innerHTML = ''; // Disable further input
        alphabetContainer.style.display = 'none';
    }
    
}

// Handle letter click
function handleLetterClick(event) {
    const letter = event.target.textContent;
    if (guessedLetters.includes(letter)) return;

    guessedLetters.push(letter);

    if (word.includes(letter)) {
        correctLetters.push(letter);
        event.target.classList.add('correct');
    } else {
        attempts--;
        event.target.classList.add('wrong');
    }

    updateWordDisplay();
    updateAttempts();
    checkWinOrLose();
}

// Initialize game
function initializeGame() {
    const rows = [
        "йцукенгшщзхї".split(""),
        "фівапролджє".split(""),
        "ячсмитьбю".split("")
    ];

    rows.forEach(row => {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        row.forEach(letter => {
            const letterElement = document.createElement("span");
            letterElement.textContent = letter;
            letterElement.classList.add("letter");
            letterElement.addEventListener("click", handleLetterClick);
            rowDiv.appendChild(letterElement);
        });

        alphabetContainer.appendChild(rowDiv);
    });

    updateWordDisplay();
    updateAttempts();
}

// Reset game
function resetGame() {
    alphabetContainer.style.display = 'block';
    word = words_list_ua[Math.floor(Math.random() * words_list_ua.length)];
    attempts = 10;
    guessedLetters = [];
    correctLetters = [];

    messageContainer.textContent = '';
    alphabetContainer.innerHTML = '';
    initializeGame();
}

// Додаємо слухач події keydown
document.addEventListener('keydown', handleKeyboardInput);

// Обробка введення з клавіатури
function handleKeyboardInput(event) {
    const letter = event.key.toLowerCase();

    // Перевіряємо, чи літера є в алфавіті
    if (!alphabet.includes(letter) || guessedLetters.includes(letter)) {
        return;
    }

    guessedLetters.push(letter);

    // Знаходимо відповідний елемент кнопки на екрані
    const letterElement = Array.from(document.querySelectorAll('.letter')).find(el => el.textContent === letter);

    if (letterElement) {
        // Симулюємо натискання кнопки
        if (word.includes(letter)) {
            correctLetters.push(letter);
            letterElement.classList.add('correct');
        } else {
            attempts--;
            letterElement.classList.add('wrong');
        }

        // Оновлення стану гри
        updateWordDisplay();
        updateAttempts();
        checkWinOrLose();
    }
}

// Reset button
resetButton.addEventListener('click', resetGame);

// Start game
initializeGame();
