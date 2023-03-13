// Вывод каждую секунду

function printNumbers(from: number, to: number) {
    for (let current = from; current <= to; current++) {
        setTimeout(() => {
            console.log(current); 
        }, current - from);
    }
}

function printNumbers2(from: number, to: number) {
    let current = from;
    let timer = setInterval(() => {
        console.log(current);
        if (current === to) {
            clearInterval(timer);
        }
        current++;
    }, 1000)
}
