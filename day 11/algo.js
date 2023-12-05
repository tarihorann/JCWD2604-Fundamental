/** @format */

//palindrome
let palindrome = "race, car";
let arrAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
palindrome = palindrome
  .split("")
  .reverse()
  .filter((letter) => arrAlpha.includes(letter));

console.log(palindrome);

let result =
  palindrome.join("") === palindrome.reverse().join("") ? true : false;

console.log(result);

const palindromeChecker = (str = "", arrAlpha = []) =>
  str
    .split("")
    .filter((letter) => arrAlpha.includes(letter))
    .join("") ==
  str
    .split("")
    .filter((letter) => arrAlpha.includes(letter))
    .reverse()
    .join("")
    ? true
    : false;

console.log(palindromeChecker("kaku", arrAlpha));

//linear search

function search(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) return i;
  }
  return -1;
}

const arr = [1, 2, 3, 4];

console.log(
  arr.findIndex((val) => val == 3),
  "built in find index"
);

console.log(search(arr, 3), "linear search");

//binary search
const binarySearch = (arr, l, r, x) => {
  if (r >= l) {
    let mid = l + Math.floor((r - 2) / 2);

    if (arr[mid] == x) return mid;

    if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);
    return binarySearch(arr, mid + 1, r, x);
  }
  return -1;
};

console.log(binarySearch(arr, 0, arr.length - 1, 3), "ini binary search");

//sorting
//bubble sort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }

  return arr;
}

const arr2 = [3, 2, 5, 1, 10];

console.log(bubbleSort(arr2), "bubble sort");

console.log(
  [3, 2, 5, 1, 10].sort((a, b) => a - b),
  "built in sort"
);

//selection sort

function selectionSort(arr) {
  let min;

  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
const arr3 = [3, 2, 5, 1, 10];

console.log(selectionSort(arr3), "selection sort");
