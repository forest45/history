// Создание анимированных учебников
const booksContainer = document.getElementById('booksContainer');
const bookCount = 15;

function createBook() {
    const book = document.createElement('div');
    book.classList.add('book');
    book.textContent = '📚';

    // Случайные параметры для анимации
    const startY = Math.random() * window.innerHeight;
    const duration = 15 + Math.random() * 20; // 15-35 секунд
    const delay = Math.random() * 5; // 0-5 секунд задержка
    const size = 50 + Math.random() * 30; // 50-80px

    book.style.left = '-100px';
    book.style.top = `${startY}px`;
    book.style.width = `${size}px`;
    book.style.height = `${size * 1.3}px`;
    book.style.animation = `fly ${duration}s linear ${delay}s infinite`;

    booksContainer.appendChild(book);

    // Удаляем книгу после завершения цикла, чтобы избежать накопления
    setTimeout(() => {
        if (book.parentNode) {
            book.parentNode.removeChild(book);
        }
    }, (duration + delay) * 1000);
}

// Создаём книги
for (let i = 0; i < bookCount; i++) {
    setTimeout(() => {
        createBook();
    }, i * 1000); // Создаём каждую книгу с интервалом
}

// Постоянно создаём новые книги
setInterval(() => {
    createBook();
}, 3000);