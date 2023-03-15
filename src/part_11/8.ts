// Перепишите, используя async / await
async function loadJson(url: string) {
    const response = await fetch(url)
    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error(response.status.toString());
    }
}

loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404


// Перепишите, используя async/await

class HttpError extends Error {
    response: Response;

    constructor(response: Response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

type User = { name: string };

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser(): Promise<User> {
    let name = prompt("Введите логин?", "iliakan");

    let user: User | null = null;
    
    while (user === null) {
        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            console.log(`Полное имя: ${(user as User).name}.`);
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
        }
    }
    return user;
}


// Вызовите async–функцию из "обычной"

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

{
    function f() {
        // ...что здесь написать?
        // чтобы вызвать wait() и дождаться результата "10" от async–функции
        // не забывайте, здесь нельзя использовать "await"

        wait().then((res) => console.log(res));

        (async function () {
            const res = await wait();
            console.log(res)
        })();
    }
}