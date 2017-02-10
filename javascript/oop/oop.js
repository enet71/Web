/**internal-external-interface*/
///
function CoffeeMachine(power) {
    this.waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    var self = this;

    var timerId;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        console.log('Кофе готово!');
    }

    this.run = function () {
        timerId = setTimeout(onReady, getBoilTime());
    };

    this.stop = function () {
        clearTimeout(timerId);
    }

}
/**getters-setters*/
///
function User() {
    var firstName;
    var surName;

    this.setFirstName = function (name) {
        firstName = name;
    };

    this.setSurname = function (name) {
        surName = name;
    };

    this.getFullName = function () {
        return firstName + " " + surName;
    }
}
///
function CoffeeMachine_2(power, capacity) {
    //...
    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function () {
        return waterAmount;
    };

    this.getPower = function () {
        return power;
    }
}
///
function CoffeeMachine_3(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.addWater = function (amount) {
        this.setWaterAmount(waterAmount + amount);
    };

    function onReady() {
        console.log('Кофе готов!');
    }

    this.run = function () {
        setTimeout(onReady, getTimeToBoil());
    };

}
///
function CoffeeMachine_4(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function (amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };

    this.getWaterAmount = function (amount) {
        return waterAmount;
    };

    this.setOnReady = function (func) {
        onReady = func;
    };

    function onReady() {
        console.log('Кофе готов!');
    }

    this.run = function () {
        setTimeout(function () {
            onReady();
        }, getTimeToBoil());
    };

}
///
function CoffeeMachine_5(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    var timer;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function (amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };

    this.getWaterAmount = function (amount) {
        return waterAmount;
    };

    this.setOnReady = function (func) {
        onReady = func;
    };

    function onReady() {
        console.log('Кофе готов!');
    }

    this.run = function () {
        timer = setTimeout(function () {
            onReady();
        }, getTimeToBoil());
    };

    this.isRunning = function () {
        return !!timer;
    }
}
/**functional-inheritance*/
function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

var Fridge = function (power) {
    Machine.apply(this,arguments);
    var food = [];
    this.addFood = function (add) {
        if(!this._enabled){
            throw new console.log("Off");
        }

        if(food.length + arguments.length > power/100){
            throw new console.log("Max");
        }

        for (var i = 0; i < arguments.length; i++) {
            food.push(arguments[i]);
        }
    };

    this.getFood = function () {
        return food.slice();
    };

    this.filterFood = function (func) {

    };

    this.removeFood = function (item) {

    }
};
