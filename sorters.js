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

function convertMS(milliseconds) {
  var day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  return {
    day: day,
    hour: hour,
    minute: minute,
    seconds: seconds,
    mmm: milliseconds
  };
}

function timer(elem, before, after) {
  var result = after - before;
  var time = convertMS(result);
  el(elem).innerHTML = time.seconds + ":" + time.mmm;
}

// // // // // //
// Úloha 1.7.1
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

// BUBBLE SORT
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
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}
// QUICK SORT
function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot num
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot num
      quickSort(items, index, right);
    }
  }
  return items;
}

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
// Úloha 1.7.2
// // // // // //

// Generating 100 random numbers
var randNums = [];
for (var wau = 0; wau < 100; wau++) {
  randNums.push(Math.floor(Math.random() * 1000));
}

var loop = [1, 10, 100, 1000, 10000, 100000, 1000000];

// Insertion sort
function iSort() {
  for (var index = 0; index < loop.length; index++) {
    var iBefore = Date.now();
    for (var x = 0; x < loop[index]; x++) {
      insertionSort(randNums);
    }
    var iAfter = Date.now();
    timer("i-" + loop[index], iBefore, iAfter);
  }
}

// Selecting sort
function sSort() {
  for (var index = 0; index < loop.length; index++) {
    var iBefore = Date.now();
    for (var x = 0; x < loop[index]; x++) {
      selectionSort(randNums);
    }
    var iAfter = Date.now();
    timer("s-" + loop[index], iBefore, iAfter);
  }
}

// Bubble sort
function bSort() {
  for (var index = 0; index < loop.length; index++) {
    var iBefore = Date.now();
    for (var x = 0; x < loop[index]; x++) {
      bubbleSort(randNums);
    }
    var iAfter = Date.now();
    timer("b-" + loop[index], iBefore, iAfter);
  }
}

// Quick sort
function qSort() {
  for (var index = 0; index < loop.length; index++) {
    var iBefore = Date.now();
    for (var x = 0; x < loop[index]; x++) {
      quickSort(randNums);
    }
    var iAfter = Date.now();
    timer("q-" + loop[index], iBefore, iAfter);
  }
}

// // // // // //
// Úloha 1.7.3
// // // // // //

// Generating 1250 scores
var scores = [];
for (var i = 1; i <= 1250; i++) {
  scores.push(Math.floor(Math.random() * 100));
}
// Percentile function
function percentile(numberArray, p) {
  var sortedNumberArray = numberArray.sort(function(a, b) {
    return a - b;
  });
  var itemIndex = Math.ceil((p / 100) * numberArray.length) - 1;
  return sortedNumberArray[Math.max(0, itemIndex)];
}

function percentileWithValueMap(arr, p, valueMapFunction) {
  return percentile($.map(arr, p, valueMapFunction));
}

var studentsHTML = "";
// Generating 1250 students
var students = [];
for (var i = 1; i <= 1250; i++) {
  var percen = percentile(scores, 60);
  var rate = percen >= 60 ? "ANO" : "NE";

  students.push({
    id: i,
    score: scores[i],
    percentil: percen,
    rating: rate
  });
  studentsHTML += `
  <tr>
  <td>${i}</td>
  <td>${scores[i]}</td>
  <td>${percen}</td>
  <td>${rate}</td>
</tr>`;
}

// Displaying list of students
el("students").innerHTML = studentsHTML;
