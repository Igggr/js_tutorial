// 1. Сумма пользовательских чисел
const x = +(prompt("дай число") ?? 0);
const y = +(prompt("дай число") ?? 0);

console.log(x+y);

// 2. 6.35 -> 6.3
console.log(Math.round(6.35 * 10) / 10);

// 3. Ввод числового значения
function readNumber(): number | null {
    while (true) {
        const x = prompt("дай число");
        if (x === null || x === '') {
            return null;
        } else if (isNaN(+x)) {  // isNaN don't accept string in TS
            continue;
        } else {
            return +x;
        }
    }

}

// 5. Случайное число от min до max
function  random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

// 6. Случайное целое число от min до max
function randomInteger(min: number, max: number): number {
    const random = Math.random() * (max - min + 1) + min - 0.5;
    return Math.round(random);
}