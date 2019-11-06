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


console.log(seattle.totalCookies());
console.log(seattle.total);
hoursOfOperation();
totalOfTotal();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


// tr.append(tdName);

//     for (var barkIndex = 0; barkIndex < this.barksPerWeek.length; barkIndex++) {
//       var td = document.createElement('td');

//       td.textContent = this.barksPerWeek[barkIndex];
//       tr.append(td);
//     }

//     td = document.createElement('td');

//     td.textContent = 'total';
//     tr.append(td);

//     domReference.append(tr);
//   }
// }



// // **************************************************************************

// for (var i = 0; i < timeArray.length; i++) {
//   seattle.cookiesPerHour.push(seattle.productRandomcust());
//   tokyo.cookiesPerHour.push(tokyo.productRandomcust());
//   dubai.cookiesPerHour.push(dubai.productRandomcust());
//   paris.cookiesPerHour.push(paris.productRandomcust());
//   lima.cookiesPerHour.push(lima.productRandomcust());
// }

// var cookieListSeattle = document.getElementById('cookieSeattle');

// for (var i = 0; i < timeArray.length; i++) {
//   var seattleList = document.createElement('li');
//   seattleList.textContent = `${timeArray[i]}: ${seattle.cookiesPerHour[i]} cookies`;
//   cookieListSeattle.append(seattleList);
// }
// var seattleTotal = document.createElement('li');
// seattleTotal.textContent = `Total: ${seattle.totalCookies()} cookies`;
// cookieListSeattle.append(seattleTotal);

// // -----------------------------------

// var cookieListTokyo = document.getElementById('cookieTokyo');

// for (var i = 0; i < timeArray.length; i++) {
//   var tokyoList = document.createElement('li');
//   tokyoList.textContent = `${timeArray[i]}: ${tokyo.cookiesPerHour[i]} cookies`;
//   cookieListTokyo.append(tokyoList);
// };
// var tokyoTotal = document.createElement('li');
// tokyoTotal.textContent = `Total: ${tokyo.totalCookies()} cookies`;
// cookieListTokyo.append(tokyoTotal);

// // -----------------------------------
// var cookieListDubai = document.getElementById('cookieDubai');

// for (var i = 0; i < timeArray.length; i++) {
//   var dubaiList = document.createElement('li');
//   dubaiList.textContent = `${timeArray[i]}: ${dubai.cookiesPerHour[i]} cookies`;
//   cookieListDubai.append(dubaiList);
// };
// var dubaiTotal = document.createElement('li');
// dubaiTotal.textContent = `Total: ${dubai.totalCookies()} cookies`;
// cookieListDubai.append(dubaiTotal);

// // -----------------------------------

// var cookieListParis = document.getElementById('cookieParis');

// for (var i = 0; i < timeArray.length; i++) {
//   var parisList = document.createElement('li');
//   parisList.textContent = `${timeArray[i]}: ${paris.cookiesPerHour[i]} cookies`;
//   cookieListParis.append(parisList);
// };
// var parisTotal = document.createElement('li');
// parisTotal.textContent = `Total: ${paris.totalCookies()} cookies`;
// cookieListParis.append(parisTotal);

// // -----------------------------------
// var cookieListLima = document.getElementById('cookieLima');

// for (var i = 0; i < timeArray.length; i++) {
//   var limaList = document.createElement('li');
//   limaList.textContent = `${timeArray[i]}: ${lima.cookiesPerHour[i]} cookies`;
//   cookieListLima.append(limaList);
// };

// var limaTotal = document.createElement('li');
// limaTotal.textContent = `Total: ${lima.totalCookies()} cookies`;
// cookieListLima.append(limaTotal);







