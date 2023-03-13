// 1. Две функции - один объект
const c = {};
function A() { return c; }
function B() { return c; }

const a = new (A as any)();
const b = new (B as any)();
console.log( a == b ); // true

// Создайте калькулятор при помощи конструктора, new Calculator
function Calculator() {}

Calculator.prototype.read = function() {
    this.a = +(prompt('give me number') ?? 0);
    this.b = +(prompt('give me number') ?? 0);
}; 

Calculator.prototype.sum = function() {
    return this.a + this.b;
};

Calculator.prototype.mul = function() {
    return this.a * this.b;
};


// 3 Создайте new Accumulator
function Accumulator(startingValue: number) {
    // @ts-ignore
    as.value = startingValue;
}

Accumulator.prototype.read = function() {
    this.value += +(prompt('give number') ?? 0);
};
