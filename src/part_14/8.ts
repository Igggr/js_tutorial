// Отсортируйте массив с буквой ё

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator(['ru']);

animals.sort(collator.compare);

console.log(animals); // АИСТ,ёж,енот,ехидна,тигр,ЯК