// Псевдослучайный генератор
function* pseudoRandom(seed: number) {
    let previous = seed;
    let next: number;
    while (true) {
        next = previous * 16807 % 2147483647;
        yield next;
        previous = next;
    }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); //