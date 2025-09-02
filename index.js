let memoryStorm = [];
let size = 1000;

function storm() {
    while (true) {
        size *= 2; 
        const monster = new Array(size).fill(Math.random().toString() + new Array(1000).join("💀"));
        memoryStorm.push(monster);
        console.log(`Размер массива: ${size.toLocaleString()} элементов`);
    }
}

storm(); 