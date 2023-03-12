// Выведите чётные числа
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// Замените for на while
let i = 0;

while(i < 3) {
    console.log(  `number ${i}!` );
    i++;
}

// Повторять цикл, пока ввод неверен
{
    let x: string;
    do {
        x = prompt('Ввдеите число') ?? '0';
    } while (null !== null && null !== '' && +x > 100);
}

// Вывести простые числа
const n = 10;

function isPrime(n: number): boolean {
    for (let i = 2; i < Math.sqrt(n) + 1; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}