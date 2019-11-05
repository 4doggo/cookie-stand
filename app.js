'use strict';
var timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// this is the object literal for Seattle
var seattle = {
  min: 23,
  max: 65,
  avg: 6.3,
  sumCookies: 0,
  cookiesPerHour: [],
  randomcust: function () {
    return Math.random() * (this.max - this.min) + this.min;
  },
  productRandomcust: function () {
    return Math.round(this.randomcust() * this.avg);
  },
  totalCookies: function () {
    var total = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      total = total + this.cookiesPerHour[i];
      console.log(total);
    }
    return total;
  }
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
    return Math.round(this.randomcust() * this.avg);
  },

  totalCookies: function () {
    var total = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      total = total + this.cookiesPerHour[i];
    }
    return total;
  }
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
    return Math.round(this.randomcust() * this.avg);
  },

  totalCookies: function () {
    var total = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      total = total + this.cookiesPerHour[i];
    }
    return total;
  }
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
    return Math.round(this.randomcust() * this.avg);
  },

  totalCookies: function () {
    var total = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      total = total + this.cookiesPerHour[i];
    }
    return total;
  }
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
    return Math.round(this.randomcust() * this.avg);
  },
  totalCookies: function () {
    var total = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      total = total + this.cookiesPerHour[i];
    }
    return total;
  }
};

// **************************************************************************

for (var i = 0; i < timeArray.length; i++) {
  seattle.cookiesPerHour.push(seattle.productRandomcust());
  tokyo.cookiesPerHour.push(tokyo.productRandomcust());
  dubai.cookiesPerHour.push(dubai.productRandomcust());
  paris.cookiesPerHour.push(paris.productRandomcust());
  lima.cookiesPerHour.push(lima.productRandomcust());
};

// printing the array in unordered lists 
var cookieListSeattle = document.getElementById('cookieSeattle');

for (var i = 0; i < timeArray.length; i++) {
  var seattleList = document.createElement('li');
  seattleList.textContent = `${timeArray[i]}: ${seattle.cookiesPerHour[i]} cookies`;
  cookieListSeattle.append(seattleList);
};
var seattleTotal = document.createElement('li');
seattleTotal.textContent = `Total: ${seattle.totalCookies()} cookies`;
cookieListSeattle.append(seattleTotal);

// -----------------------------------

var cookieListTokyo = document.getElementById('cookieTokyo');

for (var i = 0; i < timeArray.length; i++) {
  var tokyoList = document.createElement('li');
  tokyoList.textContent = `${timeArray[i]}: ${tokyo.cookiesPerHour[i]} cookies`;
  cookieListTokyo.append(tokyoList);
};
var tokyoTotal = document.createElement('li');
tokyoTotal.textContent = `Total: ${tokyo.totalCookies()} cookies`;
cookieListTokyo.append(tokyoTotal);

// -----------------------------------
var cookieListDubai = document.getElementById('cookieDubai');

for (var i = 0; i < timeArray.length; i++) {
  var dubaiList = document.createElement('li');
  dubaiList.textContent = `${timeArray[i]}: ${dubai.cookiesPerHour[i]} cookies`;
  cookieListDubai.append(dubaiList);
};
var dubaiTotal = document.createElement('li');
dubaiTotal.textContent = `Total: ${dubai.totalCookies()} cookies`;
cookieListDubai.append(dubaiTotal);

// -----------------------------------

var cookieListParis = document.getElementById('cookieParis');

for (var i = 0; i < timeArray.length; i++) {
  var parisList = document.createElement('li');
  parisList.textContent = `${timeArray[i]}: ${paris.cookiesPerHour[i]} cookies`;
  cookieListParis.append(parisList);
};
var parisTotal = document.createElement('li');
parisTotal.textContent = `Total: ${paris.totalCookies()} cookies`;
cookieListParis.append(parisTotal);

// -----------------------------------
var cookieListLima = document.getElementById('cookieLima');

for (var i = 0; i < timeArray.length; i++) {
  var limaList = document.createElement('li');
  limaList.textContent = `${timeArray[i]}: ${lima.cookiesPerHour[i]} cookies`;
  cookieListLima.append(limaList);
};

var limaTotal = document.createElement('li');
limaTotal.textContent = `Total: ${lima.totalCookies()} cookies`;
cookieListLima.append(limaTotal);







