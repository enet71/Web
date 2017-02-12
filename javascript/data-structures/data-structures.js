/*Округление
 Math.floor(3.1) );  // 3
 Math.ceil(3.1) );   // 4
 Math.round(3.1) );  // 3
 num.toFixed(precision)*/

//Task_1
function getDecimal(num) {
    return num % 1;
}

function getDecimalString(num) {
    var result = "" + num;
    return result.indexOf(".") !== -1 ? "0." + result.split(".")[1] : "0.0";
}

function fibBinet(n) {
    var phi = (1 + Math.sqrt(5)) / 2;
    return Math.pow(phi, n) / Math.sqrt(5);
}

function getRandom(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

//Task_2
function ucFirst(str) {
    try {
        return str.charAt(0).toUpperCase() + str.slice(1);
    } catch (e) {
        return "This is not a string!";
    }
}

function checkSpam(str) {
    if (str.toUpperCase().indexOf("XXX") > -1 || str.toUpperCase().indexOf("VIAGRA") > -1) {
        return true;
    }
    return false;
}

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str = str.slice(0, maxlength) + "...";
    }
    return str;
}

function extractCurrencyValue(str) {
    return str.slice(1);
}

//Task_3
var user = {};
user.name = "Вася";
user.surname = "Петров";
user.name = "Сергей";
delete user.name;

//Task_4
var schedule = {};

function isEmpty(obj) {
    for (var element in schedule) {
        return false
    }
    return true;
}

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

function sum(obj) {
    var result = 0;
    for (var element in obj) {
        result += obj[element];
    }
    return result;
}

function max(obj) {
    var max = 0;
    var result;

    for (var element in obj) {
        if(obj[element] > max){
            max = obj[element];
            result = element;
        }
    }
    return result;
}

menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (var element in obj) {
        obj[element] *= 2;
    }
}

/**Task_5_Array*/
///
function lastElement(array) {
    return array[array.length - 1];
}
///
function addToArray(array, value) {
    array.push(value);
}
///
var styles = ["Джаз","Блюз"];
styles.push("Рок-н-Ролл");
styles[styles.length - 2] = "Классика";
console.log(styles.shift());
styles.unshift("Рэп","Регги");
console.log(styles);
