'use strict';
var timeArray = [' ', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];


function Store(cityName, min, max, avg) {
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cityName = cityName;
  this.sumCookies = 0;
  this.cookiesPerHour = [];
  this.total = 0;
  this.randomcust = function () {
    return Math.random() * (this.max - this.min) + this.min;
  };
  this.productRandomcust = function () {
    return Math.round(this.randomcust() * this.avg);
  };
  this.totalCookies = function () {
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      this.total += this.cookiesPerHour[i];
    }
    // return this.total;
  };

  this.render = function () {

    var tableContent = document.getElementById('allStoreData');
    var tableRow = document.createElement('tr');
    var tableData = document.createElement('td');
    tableData.textContent = this.cityName;
    tableRow.append(tableData);

    for (var i = 0; i < timeArray.length - 2; i++) {
      tableData = document.createElement('td');
      tableData.textContent = this.productRandomcust();
      tableRow.append(tableData);
    }

    tableData = document.createElement('td');
    tableData.textContent = this.total;
    tableRow.append(tableData);
    tableContent.append(tableRow);
  };
}
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 14, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

var allStoresArray = [seattle, tokyo, dubai, paris, lima];

function hoursOfOperation() {
  var table = document.getElementById('allStoreData');

  var th = document.createElement('thead');

  table.appendChild(th);

  for (var i = 0; i < timeArray.length; i++) {
    th.appendChild(document.createElement('th')).
      appendChild(document.createTextNode(timeArray[i]));
  }
}

function totalOfTotal() {
  var table = document.getElementById('allStoreData');

  var td = document.createElement('tfoot');

  table.appendChild(td);

  for (var i = 0; i < timeArray.length; i++) {
    td.appendChild(document.createElement('td')).
      appendChild(document.createTextNode(timeArray[i]));
  }
}



totalOfTotal();
hoursOfOperation();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

function cleanScreenAndRenderAll() {

  var tableReference = document.getElementById('store-form');
  tableReference.innerHTML = '';

  for (var i = 0; i < allStoresArray.length; i++) {
    var currentStore = allStoresArray[i];

    currentStore.render(tableReference);
  }
}

//-------------------------------------------------------------------------------
// FORMS
//-------------------------------------------------------------------------------

var form = document.getElementById('store-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  var cityName = event.target.name.value;
  var min = event.target.minAmount.value;
  var max = event.target.maxAmount.value;
  var avg = event.target.avgAmount.value;

  var newStoreSubmission = new Store(cityName, min, max, avg);
  newStoreSubmission.render();
  allStoresArray.push(newStoreSubmission);

  cleanScreenAndRenderAll();
});
//-------------------------------------------------------------------------------

