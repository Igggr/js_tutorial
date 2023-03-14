// Ошибка создания экземпляра класса

import { Node } from "@babel/core";

class Animal {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    created: number;

    constructor(name: string) {
        super(name);
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
console.log(rabbit.name);



// Улучшенные часы

class Clock {
    private readonly template: string;
    timer: NodeJS.Timer | undefined;

    constructor({ template }: { template: string}) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours: number | string = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins: number | string = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs: number | string = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours.toString())
            .replace('m', mins.toString())
            .replace('s', secs.toString());

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock {
    private readonly precision: number;

    constructor({ template, precision = 1000}: { template: string, precision: number }) {
        super({ template });
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}