// MY FUNCTIONS FOR MORE EASY WORK

function el(id) {
  // Shortcut for selection
  return document.getElementById(id);
}
function arrFromInput(input) {
  // Split input string ang put to array
  var arr = new Array();
  arr = input.split(" ");
  var numArray = [];
  // loop through array and make values type number
  for (i = 0; i < arr.length; i++) {
    numArray.push(parseInt(arr[i]));
  }
  //console.log(numArray);
  return numArray;
}

// Working with time
function convertMS(milliseconds) {
  var day, hour, minute, seconds, zeros;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;

  milis = milliseconds % 1000;
  switch (milis.toString().length) {
    case 1:
      zeros = "00";
      break;
    case 2:
      zeros = "0";
      break;
    default:
      zeros = "";
      break;
  }

  return {
    day: day,
    hour: hour,
    minute: minute,
    seconds: seconds,
    mmm: zeros + milis
  };
}

// // // // // //
// Quest 1.7.1
// // // // // //

// INSERTION SORT
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var key = arr[i];
    var y = i - 1;
    while (y >= 0 && arr[y] > key) {
      arr[y + 1] = arr[y];
      y = y - 1;
    }
    arr[y + 1] = key;
  }
  return arr;
}

// SELECTION SORT
function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    let min = i; //  storing the index of minimum element

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j; // updating the index of minimum element
      }
    }

    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

// BUBBLE SORT functions
function bubbleSort(arr) {
  var swapp;
  var n = arr.length - 1;
  do {
    swapp = false;
    for (var i = 0; i < n; i++) {
      if (arr[i] < arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapp = true;
      }
    }
    n--;
  } while (swapp);
  return arr;
}
var items = [5, 3, 7, 6, 2, 9];
function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

// QUICK SORT functions
function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right);
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }
  }
  return items;
}

// data inserting functions
function insertion() {
  el("insertion-sorted").innerHTML = "";
  el("insertion-sorted").innerHTML = insertionSort(
    arrFromInput(el("insertion-input").value)
  );
}
function selection() {
  el("selection-sorted").innerHTML = "";
  el("selection-sorted").innerHTML = selectionSort(
    arrFromInput(el("selection-input").value)
  );
}
function bubble() {
  el("bubble-sorted").innerHTML = "";
  el("bubble-sorted").innerHTML = bubbleSort(
    arrFromInput(el("bubble-input").value)
  );
}
function quick() {
  el("quick-sorted").innerHTML = "";
  el("quick-sorted").innerHTML = quickSort(
    arrFromInput(el("quick-input").value),
    0,
    arrFromInput(el("quick-input").value, 0).length - 1
  );
}

// // // // // //
// Quest 1.7.2
// // // // // //

// Generating 100 random numbers
var randNums = [];
for (var wau = 0; wau < 100; wau++) {
  randNums.push(Math.floor(Math.random() * 1000));
}

var loopCount = [1, 10, 100, 1000, 10000, 100000, 1000000];

// Event listener for sorting
document.getElementById("iSort").addEventListener(
  "click",
  function() {
    iSort(loopCount, "i");
  },
  false
);
document.getElementById("sSort").addEventListener(
  "click",
  function() {
    sSort(loopCount, "s");
  },
  false
);
document.getElementById("bSort").addEventListener(
  "click",
  function() {
    bSort(loopCount, "b");
  },
  false
);
document.getElementById("qSort").addEventListener(
  "click",
  function() {
    qSort(loopCount, "q");
  },
  false
);
document.getElementById("dSort").addEventListener(
  "click",
  function() {
    dSort(loopCount, "d");
  },
  false
);

// Insertion sort
function iSort(loop, startPoint) {
  for (var index = 0; index < loopCount.length; index++) {
    var iBefore = Date.now();
    for (var x = 0; x < loopCount[index]; x++) {
      insertionSort(loop);
    }
    var iAfter = Date.now();

    var result = iAfter - iBefore;
    var time = convertMS(result);
    el(startPoint + "-" + loopCount[index]).innerHTML =
      time.seconds + "," + time.mmm + " s";
  }
}

// Selecting sort
function sSort(loop, startPoint) {
  for (var index = 0; index < loopCount.length; index++) {
    var iBefore = Date.now();
    for (var x = 0; x < loopCount[index]; x++) {
      selectionSort(loop);
    }
    var iAfter = Date.now();
    console.log(startPoint + "-" + loopCount[index], iBefore, iAfter);
    var result = iAfter - iBefore;
    var time = convertMS(result);
    el(startPoint + "-" + loopCount[index]).innerHTML =
      time.seconds + "," + time.mmm + " s";
  }
}

// Bubble sort
function bSort(loop, startPoint) {
  for (var index = 0; index < loopCount.length; index++) {
    var iBefore = Date.now();
    for (var x = 0; x < loopCount[index]; x++) {
      bubbleSort(loop);
    }
    var iAfter = Date.now();
    var result = iAfter - iBefore;
    var time = convertMS(result);
    el(startPoint + "-" + loopCount[index]).innerHTML =
      time.seconds + "," + time.mmm + " s";
  }
}

// Quick sort
function qSort(loop, startPoint) {
  for (var index = 0; index < loopCount.length; index++) {
    var iBefore = Date.now();
    for (var x = 0; x < loopCount[index]; x++) {
      quickSort(loop);
    }
    var iAfter = Date.now();
    var result = iAfter - iBefore;
    var time = convertMS(result);

    el(startPoint + "-" + loopCount[index]).innerHTML =
      time.seconds + "," + time.mmm + " s";
  }
}

function dSort(loop, startPoint) {
  for (var index = 0; index < loopCount.length; index++) {
    var iBefore = Date.now();
    for (var x = 0; x < loopCount[index]; x++) {
      loop.sort();
    }
    var iAfter = Date.now();
    var result = iAfter - iBefore;
    var time = convertMS(result);
    el(startPoint + "-" + loopCount[index]).innerHTML =
      time.seconds + "," + time.mmm + " s";
  }
}

// // // // // //
// Úloha 1.7.3
// // // // // //

// Percentile function
function quantile(array, percentile) {
  array.sort(sortNumber);
  index = (percentile / 100) * (array.length - 1);
  if (Math.floor(index) == index) {
    result = array[index];
  } else {
    i = Math.floor(index);
    fraction = index - i;
    result = array[i] + (array[i + 1] - array[i]) * fraction;
  }
  return result;
}

var rem = {};
var per = [];
for (var i = 0; i <= 100; i++) {
  per.push(i);
}

function logArrayElements(element, index, array) {
  const percentage = Math.floor(quantile(data, element));
  if (
    typeof rem["score" + percentage] !== "number" &&
    data.includes(percentage)
  )
    rem["score" + percentage] = element;
}

// Creating scores array
var scores = [];

// Data for percentile fn
var data;

// Generating score
function generateScore(students, maxScore) {
  for (var i = 0; i < students; i++) {
    scores.push(Math.floor(Math.random() * maxScore));
  }
  data = JSON.parse(JSON.stringify(scores));
  per.forEach(logArrayElements);
}

function sortNumber(a, b) {
  return a - b;
}

// Generating students array
var students = [];

// Displaying student table
function displayStudentsResult() {
  el("students").innerHTML = "";
  var studentsHTML = "";
  var studen = el("count-of-students").value;
  console.log(studen);
  var maxScore = el("maximum-score").value;
  var failed = 0;
  scores = [];
  generateScore(parseInt(studen), parseInt(maxScore));

  for (var i = 0; i < parseInt(studen); i++) {
    var percen = rem["score" + scores[i]];
    var rate = percen >= 60 ? "ANO" : "NE";
    failed = percen >= 60 ? failed + 1 : failed;
    var classa = percen >= 60 ? "table-success" : "table-danger";

    students.push({
      id: i + 1,
      score: scores[i],
      percentil: percen,
      rating: rate
    });
    studentsHTML += `
    <tr class="${classa}">
    <td>${i + 1}</td>
    <td>${scores[i]}</td>
    <td>${percen}</td>
    <td>${rate}</td>
  </tr>`;
  }

  el("students").innerHTML = studentsHTML;
  el("failed-s").innerHTML = failed;
  el("success-s").innerHTML = parseInt(studen) - failed;
}

// // // // // //
// Úloha 1.7.4
// // // // // //

// Countries array
var country_list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "United States Minor Outlying Islands",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

// Shuffle function
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Shuffle countries in array
var countries = shuffle(country_list);

// Event listeners for clicking a buttons for sorting countries
document.getElementById("CiSort").addEventListener(
  "click",
  function() {
    iSort(countries, "Ci");
  },
  false
);
document.getElementById("CsSort").addEventListener(
  "click",
  function() {
    sSort(countries, "Cs");
  },
  false
);
document.getElementById("CbSort").addEventListener(
  "click",
  function() {
    bSort(countries, "Cb");
  },
  false
);
document.getElementById("CqSort").addEventListener(
  "click",
  function() {
    qSort(countries, "Cq");
  },
  false
);
document.getElementById("CdSort").addEventListener(
  "click",
  function() {
    dSort(countries, "Cd");
  },
  false
);
