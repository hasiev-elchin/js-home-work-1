;(function () {
    var login = prompt('Кто пришел?');

    if(login == null) {
        alert('Вход отменен!');
    }
    else if(login == 'Админ') {
        var password = prompt('Пароль?');

        if(password == null) {
            alert('Вход отменен!');
        }
        else if(password == 'Черный Властелин') {
            alert('Добро пожаловать!');
        }
        else {
            alert('Пароль неверен');
        }
    }
    else {
        alert('Я Вас не знаю');
    }
})();