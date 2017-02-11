/**classes*/
///
function CoffeeMachine(power) {
    this.power = power;
    this.waterAmount = 0;
    this.WATER_HEAT_CAPACITY = 4200;
}

CoffeeMachine.prototype.getTimeToBoil = function () {
    return this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
};

CoffeeMachine.prototype.run = function () {
    setTimeout(function () {
        console.log('Кофе готов!');
    }, this.getTimeToBoil());
};
CoffeeMachine.prototype.setWaterAmount = function (amount) {
    this.waterAmount = amount;
};
///
function Hamster() {
    this.food = [];
}
Hamster.prototype.found = function (something) {
    this.food.push(something);
};

var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

console.log(speedy.food.length);
console.log(lazy.food.length);

/**class-inheritance*/
///
function Clock(options) {
    this.template = options.template;
}
Clock.prototype.render = function () {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = this.template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
};

Clock.prototype.stop = function () {
    clearInterval(this.timer);
};

Clock.prototype.start = function () {
    this.render();
    var self = this;
    this.timer = setInterval(function () {
        self.render()
    }, 1000);
};

var clock = new Clock({
    template: 'h:m:s'
});
///
function Clock_2(options, precision) {
    Clock.apply(this, arguments);
    this.precision = precision || 1000;
}
Clock_2.prototype = Object.create(Clock.prototype);
Clock_2.prototype.start = function () {
    this.render();
    var self = this;
    this.timer = setInterval(function () {
        self.render()
    }, this.precision);
};
var clock_2 = new Clock_2({
    template: 'h:m:s'
},300);
///

