// Перепишите класс

class Clock {

    private readonly template: string;
    // @ts-ignore
    private timer: NodeJS.Timer;

    constructor({ template }: { template: string}) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours: string | number = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins: string | number = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs: string | number = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours.toString())
            .replace('m', mins.toString())
            .replace('s', secs.toString());

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    };

    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    };

}

let clock = new Clock({ template: 'h:m:s' });
clock.start();
