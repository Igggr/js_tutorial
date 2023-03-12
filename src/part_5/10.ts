import { count } from "./9";

// 1
{
const user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// @ts-ignore
const {name, years: age, isAdmin = true} = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false
}

// 2 Максимальная зарплата
const salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(obj: typeof salaries): string | null{
    if (count(obj) === 0) { return null;} 
    const topSalary = Math.max(...Object.values(obj));
    const [employee, _] = Object.entries(obj)
                                .find(([_, val]) => val === topSalary) || [null, null];
    return employee;
}
