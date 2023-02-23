import { ucFirst } from "./3";

// 1. Переведите текст вида border-left-width в borderLeftWidth
export function camelize(str: string): string {
    return str.split('-')
              .map((word, i) => i === 0 ? word : ucFirst(word))
              .join('')
}

// 2. Фильтрация по диапазону
export function filterRange(arr: number[], a: number, b: number): number[] {
    return arr.filter((el) => a <= el && el <= b)
}

// 3. Фильтрация по диапазону "на месте"
export function filterRangeInPlace(arr: number[], a: number, b: number): void {
    
   const outOfRangeIndexes = arr.map((el, index) => ({inRange: a <= el && el <= b, index }) )
       .filter(({inRange}) => !inRange)
       .map(({index}) => index); 

    outOfRangeIndexes.reverse();
    outOfRangeIndexes.forEach((value) => {
        arr.splice(value, 1);
    })
}

// 4 Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => a - b)
console.log(arr); // 8, 5, 2, 1, -10

// 5 Скопировать и отсортировать массив
function copySorted(arr: string[]): string[] {
    return [...arr].sort();
}

// 6 Создать расширяемый калькулятор

type OPERATION = (a: number, b: number) => number;

function Calculator() {
    // @ts-ignore
    this.methods = new Map<string, OPERATION>();
    // @ts-ignore
    this.addMethod("+", (a: number, b: number) => a + b)
    // @ts-ignore
    this.addMethod("-", (a: number, b: number) => a - b)
}

Calculator.prototype = {};

// @ts-ignore
Calculator.prototype.calculate = function(query: string) {
    const [a, op, b] = query.split(' ');

    if (this.methods.has(op)) {
        return this.methods.get(op)(+a, +b)
    }
    return NaN;

}

Calculator.prototype.addMethod = function(name: string, method: OPERATION): void {
    this.methods.set(name, method);
}

export { Calculator };

// 7. Трансформировать в массив имён
{
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [ vasya, petya, masha ];

    let names = users.map((user) => user.name)

    console.log( names ); // Вася, Петя, Маша
}

// 8. Трансформировать в объекты
{
    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [ vasya, petya, masha ];

    let usersMapped = users.map((user) => ({ fullName: user.name + user.surname, id: user.id}))

    /*
    usersMapped = [
    { fullName: "Вася Пупкин", id: 1 },
    { fullName: "Петя Иванов", id: 2 },
    { fullName: "Маша Петрова", id: 3 }
    ]
    */

    console.log( usersMapped[0].id ) // 1
    console.log( usersMapped[0].fullName ) // Вася Пупкин
}

// 9. Отсортировать пользователей по возрасту

type User = { age: number };

function sortAge(arr: User[]) {
    arr.sort((u1, u2) => u1.age - u2.age)
}

// 10. Перемешайте массив
function shuffleArray() {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}

// 11. Получить средний возраст
function getAverageAge(arr: User[]) {
    return arr.reduce((acc, user) => acc + user.age, 0) / arr.length;
}

// 12 Оставить уникальные элементы массива
function unique<T>(arr: T[]) {
    const visited = new Set<T>();
    return arr.filter((el) => {
        if (visited.has(el)) return false;
        visited.add(el);
        return true;
    })    
}
  
// 13. Создайте объект с ключами из 
{
    type User = {id: string, name: string, age: number};

    function groupById(arr: User[]): Record<string, User> {
        return Object.fromEntries(
            arr.map((user) => [user.id, user])
        );
    }  
}


