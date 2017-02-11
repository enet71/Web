/**object-methods*/
///
var calculator = {
    read: function () {
        this.a = 5;//promt
        this.b = 3;//promt
    },
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    }
};
///
var ladder = {
    step: 0,
    up: function () { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function () { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function () { // вывести текущую ступеньку
        console.log(this.step);
        return this;
    }
};

/**constructor-new*/
///
var a = {};
function A() {
    return a
}
function B() {
    return a
}

var a = new A;
var b = new B;
///
function Calculator() {
    this.read = function () {
        this.a = 5;//promt
        this.b = 3;//promt
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    }
}
///
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        n = 4;//promt
        this.value += n;
    };

    this.toString = function () {
        return this.value;
    }
}
///
function Calculator_2() {
    var operationsArray = {};

    this.calculate = function (str) {
        str = str.split(" ");
        func = operationsArray[str[1]];
        return (func(+str[0], +str[2]));
    };

    this.addMethod = function (operation, func) {
        operationsArray[operation] = func;
    };

    this.addMethod("+", function (a, b) {
        return a + b;
    });

    this.addMethod("-", function (a, b) {
        return a - b;
    });
}

/**descriptors-getters-setters*/
///
function User(fullName) {
    this.fullName = fullName;
    var text = fullName.split(" ");

    Object.defineProperties(this, {
        firstName: {
            get: function () {
                return text[0];
            },
            set: function (name) {
                this.fullName = name + " " + this.lastName;
            }
        },
        lastName: {
            get: function () {
                return text[1];
            },
            set: function (name) {
                this.fullName = this.firstName + " " + name;
            }
        }
    })
}
/**static-properties-and-methods*/
///
function Article() {
    this.created = new Date();
    Article.count++;
    Article.lastCreated = this.created;
}

Article.count = 0;
Article.showStats = function () {
    console.log("Всего: " + this.count + " Последняя: " + Article.lastCreated);
};

/**call-apply*/
///
function sumArgs() {
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });
}
///
function sum() {
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });
}

function mul() {
    return [].reduce.call(arguments, function (a, b) {
        return a * b;
    });
}

function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}
