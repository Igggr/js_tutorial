// 1
{
    const user: {name?: string, surname?: string} = {};
    user.name ='John';
    user.surname = 'Smith';
    user.name = 'Pete';
    delete user.name;

}

// 2 Проверка на пустоту
function isEmpty(obj: object): boolean {
    return Object.keys(obj).length === 0;
}

// 4
{
    const salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    };
    const sum = Object.values(salaries).reduce((acc, salary) => acc + salary, 0);
}

// Умножаем все числовые свойства на 2
function multiplyNumeric(obj: Record<string, unknown>) {
    for (const [key, val] of Object.entries(obj)) {
        if (typeof val === 'number') {
            obj[key] = val * 2;
        }
    }
}