var car = {
    move: function () {
        console.log("Car moves");
    },
    stop: function () {
        console.log("Car stop");
    }
};

var Car = function (width, height) {
    this.width = width;
    this.height = height;
};

var Tipper = function (width, height, maxWeight) {
    Car.apply(this, arguments);
    this.maxWeight = maxWeight;
};


Car.prototype = car;
Tipper.prototype = Object.create(Car.prototype);

Tipper.prototype.upBody = function () {
    console.log("The body is raised.");
};

Tipper.prototype.dropBody = function () {
    console.log("The body is dropped.");
};



var tipper = new Tipper(300, 400, 500);
tipper.move();
tipper.stop();
tipper.upBody();
tipper.dropBody();
console.log(tipper.width);
console.log(tipper.maxWeight);

class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

let user = new Person("Dmitry");

///////////////////////
var test = {
    _a: 20,
    get a() {
        return this._a;
    },
    set a(n) {
        this._a = n;
    }
};


