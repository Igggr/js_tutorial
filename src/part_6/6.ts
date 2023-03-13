// Установка и уменьшение значения счётчика

function makeCounter() {
    let count = 0;

    const cnt = function () {
        return count++;
    }

    cnt.decrease = () => count = count = count - 1;
    cnt.set = (val: number) => { 
        count = val;
    }

    return cnt;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 11)


// Сумма с произвольным количеством скобок
{
    function sum(a: number) {

        let acc = a;

        function f(b: number) {
            acc += b;
            return f;
        }

        f.toString = function () {
            return acc;
        };

        return f;
    }

    // @ts-ignore
    console.log(sum(1)(2) == 3); // 1 + 2
    // @ts-ignore
    console.log(sum(1)(2)(3) == 6); // 1 + 2 + 3
    // @ts-ignore
    console.log(sum(5)(-1)(2) == 6);
    // @ts-ignore
    console.log(sum(6)(-1)(-2)(-3) == 0);
    // @ts-ignore
    console.log(sum(0)(1)(2)(3)(4)(5) == 15);

}