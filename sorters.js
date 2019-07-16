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
  console.log(arr);
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
  console.log(arr);
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
  console.log(arr);
}
function quickSort(arr) {}

insertionSort([5, 2, 4, 1, 3]);
selectionSort([5, 2, 4, 1, 3]);
bubbleSort([5, 2, 4, 1, 3]);
