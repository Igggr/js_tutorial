// Сумма с помощью замыканий
function sum(x: number) {
    return function (y: number) {
        return x + y;
    }
}

// Фильтрация с помощью функции
function inBetween(a: number, b: number) {
    return function (x: number) {
        return a <= x && x <= b;
    }
}

function inArray<T>(arr: T[]) {
    return function (x: T) {
        return arr.includes(x);
    }
}

// Сортировать по полю
function byField(key: string) {
    return function (x: Record<string, any>, y: Record<string, any>) {
        return x[key] > y[key] ? 1 : -1
    }
}

// Армия функций

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let shooter = ((i) => function () { // функция shooter
            alert(i); // должна выводить порядковый номер
        })(i);
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...