// Добавить функциям метод "f.defer(ms)"

// @ts-ignore
Function.prototype.defer = function (ms: number) {
    // can't use arrow-function
    setTimeout(this, ms);
}

{
    function f() {
        console.log("Hello!");
    }

    // @ts-ignore
    f.defer(1000); // выведет "Hello!" через 1 секунду


}

// Добавьте функциям декорирующий метод "defer()"

// @ts-ignore
Function.prototype.defer = function (timeout: number) {
    // arrow-function daoesn't alter this
    return (...args: any[]) => {
        setTimeout(this, timeout, ...args);
    }
}

{


    function f(a: any, b: any) {
        console.log(a + b);
    }


    // @ts-ignore
    f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

}