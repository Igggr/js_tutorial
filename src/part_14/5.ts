function isInteger(x: number): boolean {
    return (~~x) === x;
}

console.log(isInteger(1)); // true
console.log(isInteger(1.5)); // false
console.log(isInteger(-0.5)); // false