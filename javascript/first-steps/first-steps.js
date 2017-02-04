"use strict";

// Task_1
function task_1() {
    alert("Hello World");
}
// defer сохраняет относительную последовательность скриптов, defer всегда ждёт, пока весь HTML-документ будет готов. async

// Task_2
function task_2() {
    var admin;
    var name;
    name = "Василий";
    admin = name;
    alert(admin);
}
// Task_3
function task_3() {
    var outPlanet = "Земля";
    var visitorName = "Петя";
}
// Task_4

// Task_5
function task_5() {
    var name = prompt("Введите ваше имя");
    confirm("Ваше имя " + name + "?") ? alert("Это хорошо") : alert("Это плохо");
}

// Task_6
function task_6_1() {
    (prompt("Каково «официальное» название JavaScript?") == "ECMAScript") ? alert("Верно!") : alert("Не знаете? «ECMAScript»!");
}

function task_6_2() {
    var number = prompt("Введите число");
    if (number < 0) {
        alert("Больше 0");
    } else if (number > 0) {
        alert("Меньше 0");
    } else {
        alert("Равно 0");
    }
}

function task_6_3() {
    var login = prompt("Введите логин");
    if (login == "Админ") {
        if (prompt("Введите пароль") == "Чёрный Властелин") {
            alert("Добро пожаловать")
        } else if (login == null) {
            alert("Вход отменен");
        } else {
            alert("Пароль неверен");
        }
    } else if (login == null) {
        alert("Вход отменен");
    } else {
        alert("Я вас не знаю");
    }

}

function task_6_4() {
    var a = 2, b = 2;
    var result;
    (a + b < 4) ? result = "Мало" : result = "Много";
}

function task_6_5() {
    var message;
    var login = prompt("Введите логин");
    (login == 'Вася') ? message = 'Привет' :
        (login == 'Директор') ? message = 'Здравствуйте' :
            (login == '') ? message = 'Нет логина' : message = '';
    alert(message);
}

// Task_7
function task_7_1() {
    var age;
    if (age >= 14 && age <= 90) {
    }
}

function task_7_2() {
    var age = 12;
    if (!(age >= 14 && age <= 90)) {
    }

    if (age <= 14 && age >= 90) {
    }
}

//Task_8
function task_8_1() {
    for (var i = 2; i <= 10; i++) {
        console.log(i);
    }
}

function task_8_2() {
    var i = 2;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}

function task_8_3() {
    while (true) {
        if (prompt("Введите число") > 100) {
            break;
        }
    }
}

function task_8_4(n) {
    next:
        for (var i = 2; i < n; i++) {
            for (var j = 2; j < i; j++) {
                if (i % j == 0) {
                    continue next;
                }
            }
            console.log(i);
        }
}

//Task_9
function task_9_1(browser) {
    if (browser == "IE") {
        console.log("О, да у вас IE!");
    } else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
        console.log("Да, и эти браузеры мы поддерживаем");
    } else {
        console.log("Мы надеемся, что и в вашем браузере все оk!");
    }
}

function task_9_2() {
    var a = +prompt('a?');

    switch (a) {
        case 0:
            console.log(0);
            break;
        case 1:
            console.log(1);
            break;
        case 2:
        case 3:
            console.log("2,3");
            break;
    }
}

//Task_10
function task_10_1(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function task_10_2(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

function task_10_min(a, b) {
    return (a < b) ? a : b;
}

function task_10_pow(x, n) {
    if (n > 1) {
        var result = 1;
        for (var i = 0; i < n; i++) {
            result *= x;
        }
        return result;
    }
}

//Task_11
function task_11_sum_for(n) {
    var result = 0;
    for (var i = 0; i < n; i++) {
        result += i + 1;
        console.log(i);
    }
    return result;
}

function task_11_sum_rec(n) {
    if (n > 1) {
        return n + task_11_1(--n);
    } else {
        return 1;
    }
}

function task_11_sum_func(n) {
    return n * (n + 1) / 2;
}

function task_11_fact(n) {
    if (n > 1) {
        return n * task_11_fact(--n);
    } else {
        return 1;
    }
}

function task_11_fib_slow(n) {
    if (n <= 1) {
        return 1;
    } else {
        return task_11_fib(n - 1) + task_11_fib(n - 2);
    }
}

function task_11_fib_fast(n) {
    var result = 1;
    var n1 = 1;
    var n2 = 1;

    for (var i = 2; i < n; i++) {
        result = n1 + n2;
        n1 = n2;
        n2 = result;
    }
    return result;
}
console.log(task_11_fib_fast(77));

//Task_12