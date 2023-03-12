// 6 Проверка значения из диапазона
const age = 30;
if (age >= 14 && age <= 90) {
    //
}

// 7 Проверка значения вне диапазона
if (age < 14 || age > 90) {
    //
}

// 9 Проверка логина
{
    const login = prompt('Ввведите логин');
    if (login === null || login === '') {
        console.log('Отменено');
    } else if (login === 'Админ') {
        const password = prompt('Ввведите пароль');
        if (password === null || password === '') {
            console.log('Отмененj');
        } else if (password === 'Я главный') {
            console.log('«Здравствуйте');
        } else {
            console.log('Неверный пароль');
        }
    } else {
        console.log('Я вас не знаю');
    }
}