// 2 Название JavaScript

const guess = prompt('Какое «официальное» название JavaScript?');
if (guess === 'ECMAScript') {
    console.log('«Верно!');
} else {
    console.log('Не знаете? ECMAScript!');
}

// 3 Покажите знак 
{
    const x = +(prompt('enter number') ?? 0);
    if (x > 0) {
        console.log(1);
    } else if (x < 0) {
        console.log(-1);
    } else {
        console.log(0);
    }
}

// 4 Перепишите 'if' в '?'

const result = (a + b < 4) ?  'Мало' : 'Много';

// 5 Перепишите 'if..else' в '?'
let login = '';
login = '?';
const message = (login ===  'Сотрудник')
              ? 'Привет'
              : (login === 'Директор')
                ?  'Здравствуйте'
                : (login === '') ? 'Нет логина' : '';
