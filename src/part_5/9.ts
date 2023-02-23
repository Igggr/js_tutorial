// 1. Сумма свойств объекта

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function sumSalaries(obj: typeof salaries): number {
    return Object.values(obj).reduce((acc, salary) => acc + salary, 0);
}
  
console.log( sumSalaries(salaries) ); // 650

// 2 Подсчёт количества свойств объекта
export function count(obj: object): number {
    return Object.keys(obj).length
}