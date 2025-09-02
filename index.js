let memoryStorm = [];
let size = 1000;

async function storm() {
    size *= 2;
    const monster = new Array(size).fill(Math.random().toString() + "💀".repeat(1000));
    memoryStorm.push(monster);
    console.log(`Размер массива: ${size.toLocaleString()} элементов (всего массивов: ${memoryStorm.length})`);

    // Рекурсивный вызов через setTimeout — освобождает поток
    setTimeout(storm, 0);
}

storm();