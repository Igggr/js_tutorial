// 2
const styles =  ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
const middleIndex =Math.floor((styles.length -1) / 2);
styles[middleIndex]= 'Классика';
console.log(styles.shift());

styles.unshift('Рэп', 'Регги');

// 3. Сумма введённых чисел
function sumInput(): number {
    const arr: number[] = []; // лучше бы суммировать сразу. но сказнао класть в массив.
    while (true) {
        const x = prompt('дай число');
        if (x === null || x === '' || isNaN(+x)) {
            return arr.reduce((acc, val) => acc + val, 0);
        }
        arr.push(+x);
    }
}


// 4
export function getMaxSubSum(arr: number[]) {
    let maxSum = 0;
    let sum = 0;
    for (const el of arr) {
        sum += el;
        if (sum < 0) {
            sum = 0;
        } else if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
}

