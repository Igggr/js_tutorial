// Класс расширяет объект?

class Rabbit extends Object {
    private readonly name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}

let rabbit = new Rabbit("Кроль");

console.log(rabbit.hasOwnProperty('name')); // Ошибка