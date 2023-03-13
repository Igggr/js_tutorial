// 1. Вычислить сумму чисел до данного

let sumToN = function (n: number): number {
    let sum = 0
    for (let i = 0; i++; i <= n) {
        sum += i;
    }
    return sum;
}

sumToN = function sumToNReq(n: number): number {
    return n === 1 ? 1 : n + sumToNReq(n - 1);
}

sumToN = function (n: number): number {
    return n * (n + 1) / 2; 
}

// 2. факториал
function factorial(n: number): number {
    return n === 0 ? 1 : n * factorial(n - 1);
}

// 3. Числа Фибоначчи
function fib(n: number): number {
    let x = 1;
    let y = 1;
    for (let i = 3; i <= n; i++) {
        [x, y] = [y, x + y];
    }
    return y;
}

// 4. Вывод односвязного списка
type List<T> = { value: T, next: List<T> } | null;
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

let printList = function print<T>(list: List<T>): void {
    if (list === null) return;
    console.log(list.value);
    print(list.next);
}

printList = function<T>(list: List<T>): void {
    let tmp = list;

    while (tmp !== null) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}


// 5. Вывод односвязного списка в обратном порядке

let printListReverse = function printRev<T>(list: List<T>): void {
    if (list === null) return;
    printRev(list.next);
    console.log(list.value);
}

printListReverse = function <T>(list: List<T>): void {
    const arr: T[] = [];
    let tmp = list;
    while (tmp !== null) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    arr.reverse();
    arr.forEach((val) => console.log(val));
}