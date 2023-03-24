// Ошибка при чтении несуществующего свойства
{
    let user = {
        name: "John"
    };

    function wrap(target: any) {
        return new Proxy(target, {
            get(target, prop, reciver) {
                if (prop in target) {
                    return Reflect.get(target, prop, reciver);
                }
                throw new Error(`Нет свойства '${prop.toString()}'`);
            }
        });
    }

    user = wrap(user);

    console.log(user.name); // John
    // console.log((user as any).age); // Ошибка: такого свойства не существует
}

// Получение элемента массива с отрицательной позиции

let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop, reciever) {
        let index = +prop.toString();
        if (index < 0) {
            index = target.length + index;
            return Reflect.get(target, index.toString(), reciever);
        }
        return Reflect.get(target, prop, reciever);
    }
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2

// Observable
{
    function makeObservable(target: object) {
        const observers: Function[] = [];
        let proxy = new Proxy(target, {
            set(target, prop, value, reciever) {
                observers.forEach((callback) => callback(prop, value));
                return Reflect.set(target, prop, value, reciever);
            }
        });
        
        // @ts-ignore
        proxy.observe = function (f: (key, val) => void) {
            observers.push(f);
        }
        return proxy;
    }

    let user: object = {};
    user = makeObservable(user);

    // @ts-ignore
    user.observe((key, value) => {
        console.log(`SET ${key}=${value}`);
    });

    // @ts-ignore
    user.name = "John"; // выводит: SET name=John

}