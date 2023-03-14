// 2 Алгоритм поиска 
// pockets → bed → table → head

let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};


Object.setPrototypeOf(pockets, bed);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(table, head);


// Почему наедаются оба хомяка?

let hamster = {
    // stomach: [],

    eat(food: any) {
        // @ts-ignore
        if (this.stomach === undefined) {
            // @ts-ignore
            this.stomach = [];
        }
        // @ts-ignore
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// Этот хомяк нашёл еду
// @ts-ignore
speedy.eat("apple");
// @ts-ignore
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
// @ts-ignore
console.log(lazy.stomach); // apple