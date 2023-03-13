// 1. Декоратор - шпион

let work = function(a: any, b: any) {
    console.log(a + b); // произвольная функция или метод
}

function spy(f: Function) {
    function inner(...args: any[]) {
        // @ts-ignore
        inner.calls.push(args);
        // @ts-ignore
        return f.apply(this, args)
    }
    // @ts-ignore
    inner.calls = [];
    return inner;

}
work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of (work as any).calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}


// 2. Задерживающий декоратор
function delay(f: Function, timeout: number) {
    return function (...args: any[]) {
        setTimeout(() => {
            // @ts-ignore
            f.apply(this, args)
        }, timeout);
    }
}

function f(x: any) {
    console.log(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс


// 3. Декоратор debounce
{
    function debounce(f: Function, timeout: number) {
        let whenCalled: number = -Infinity;
        let lastResult: any;
        return function (...args: any[]) {
            if (Date.now() > whenCalled + timeout) {
                // @ts-ignore
                let lastResult = f.apply(this, args);
                whenCalled = Date.now();
                return lastResult;
            } else {
                return lastResult;
            }
        
        }
    }

    let f = debounce(console.log, 1000);

    f(1); // выполняется немедленно
    f(2); // проигнорирован

    setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
    setTimeout(() => f(4), 1100); // выполняется
    setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
}

// 4. Тормозящий (throttling) декоратор
{
    function f(a: any) {
        console.log(a)
    }

    function throttle(f: Function, timeout: number) {
        let whenCalled: number = -Infinity;
        let timerId: any;
        return function (...args: any[]) {
            if (Date.now() > whenCalled + timeout) {
                // @ts-ignore
                f.apply(this, args);
                whenCalled = Date.now();
            } else {
                if (timerId) {
                    clearTimeout(timerId);
                }
                timerId = setTimeout(
                    () => {
                        // @ts-ignore
                        f.apply(this, args);
                        whenCalled = Date.now();
                    },
                    whenCalled + timeout - Date.now());
            }
        }
    }

    // f1000 передаёт вызовы f максимум раз в 1000 мс
    let f1000 = throttle(f, 1000);

    f1000(1); // показывает 1
    f1000(2); // (ограничение, 1000 мс ещё нет)
    f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
}