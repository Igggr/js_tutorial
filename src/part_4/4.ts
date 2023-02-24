// 2 Создайте калькулятор
{
    const calculator = {
        read() {
            // @ts-ignore
            this.x = +(prompt('дай число') ?? 0);
            // @ts-ignore
            this.y = +(prompt('дай число') ?? 0);
        },
        sum(): number {
            // @ts-ignore
            return this.x + this.y
        },
        mul(): number {
            // @ts-ignore
            return this.x * this.y;
        }
    };
}

// 3 Цепь вызовов
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };
