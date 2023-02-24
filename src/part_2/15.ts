// Перепишите функцию, используя оператор '?' или '||'

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}


function checkAge2(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

// Функция min(a, b)
function min(a: number, b: number): number {
    return a < b ? a : b;
}

// Функция pow(x,n)
function pow(x: number, n: number) {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= x;
    }
    return res;
}