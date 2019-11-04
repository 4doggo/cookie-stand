'use strict';
var timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// this is the object literal for Seattle
var seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    cookiesPerHour: [],
    randomcust: function () {
        return Math.random() * (this.max - this.min) + this.min;
    },

    productRandomcust: function () {
        return this.randomcust() * this.avg;
    },
};

var tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    cookiesPerHour: [],
    randomcust: function () {
        return Math.random() * (this.max - this.min) + this.min;
    },

    productRandomcust: function () {
        return this.randomcust() * this.avg;
    },
};

var dubai = {
    min: 11,
    max: 38,
    avg: 3.7,
    cookiesPerHour: [],
    randomcust: function () {
        return Math.random() * (this.max - this.min) + this.min;
    },

    productRandomcust: function () {
        return this.randomcust() * this.avg;
    },
};

var paris = {
    min: 20,
    max: 38,
    avg: 2.3,
    cookiesPerHour: [],
    randomcust: function () {
        return Math.random() * (this.max - this.min) + this.min;
    },

    productRandomcust: function () {
        return this.randomcust() * this.avg;
    },
};

var lima = {
    min: 2,
    max: 16,
    avg: 4.6,
    cookiesPerHour: [],
    randomcust: function () {
        return Math.random() * (this.max - this.min) + this.min;
    },

    productRandomcust: function () {
        return this.randomcust() * this.avg;
    },
};

for (var i = 0; i < timeArray.length; i++) {
    seattle.cookiesPerHour.push(seattle.productRandomcust());
    tokyo.cookiesPerHour.push(tokyo.productRandomcust());
    dubai.cookiesPerHour.push(dubai.productRandomcust());
    paris.cookiesPerHour.push(paris.productRandomcust());
    lima.cookiesPerHour.push(lima.productRandomcust());
}

console.log(seattle.cookiesPerHour);
console.log(tokyo.cookiesPerHour);
console.log(dubai.cookiesPerHour);
console.log(paris.cookiesPerHour);
console.log(lima.cookiesPerHour);






