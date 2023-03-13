// Исправьте функцию, теряющую "this"
{
    function askPassword(ok: Function, fail: Function) {
        let password = prompt("Password?", '');
        if (password == "rockstar") ok();
        else fail();
    }

    let user = {
        name: 'Вася',

        loginOk() {
            alert(`${this.name} logged in`);
        },

        loginFail() {
            alert(`${this.name} failed to log in`);
        },

    };

    // @ts-ignore
    askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
}

// Использование частично применённой функции для логина
{
    function askPassword(ok: Function, fail: Function) {
        let password = prompt("Password?", '');
        if (password == "rockstar") ok();
        else fail();
    }

    let user = {
        name: 'John',

        login(result: boolean) {
            alert(this.name + (result ? ' logged in' : ' failed to log in'));
        }
    };

    askPassword(user.login.bind(user, true), user.login.bind(user, false));
}