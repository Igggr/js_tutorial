let dictionary = Object.create(null);

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
}

Object.setPrototypeOf(dictionary, {
    toString() {
        return Object.keys(this).join(', ');
    }
});

// ваш метод toString в действии
console.log(dictionary.toString()); // "apple,__proto__"