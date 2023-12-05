/** @format */

// /** @format */

// Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const majority = (arr) =>
  [...new Set(arr)]
    .map((val) => {
      return { value: val, length: arr.filter((val2) => val2 == val).length }; // [{value : 2, length : 4},{value : 1, length : 3}]
    })
    .sort((a, b) => b.length - a.length)[0].value;

console.log(majority([2, 2, 1, 1, 1, 2, 2, 1, 1]));
// [2,1] => loop map

// Create a function to convert roman numeral to integer.
// Example 1:
// Input: s = "III”
// Output: 3
// Explanation: III = 3.
// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const romanConverter = (roman = "") => {
  let arr = new Array();
  //single digit
  arr[1000] = "M";
  arr[50] = "L";
  arr[1] = "I";
  arr[5] = "V";
  arr[10] = "X";
  arr[100] = "C";
  arr[500] = "D";

  //double digit
  //   arr[9] = "IX";
  //   arr[900] = "CM";
  //   arr[90] = "XC";
  //   arr[4] = "IV";
  //   arr[400] = "CD";

  let tempRoman = roman.toUpperCase().split(""); // [v,i]
  let sum = 0;
  for (let i = 0; i < tempRoman.length; i++) {
    let current = arr.indexOf(tempRoman[i]); //5
    let next = arr.indexOf(tempRoman[i + 1]); //1

    //vi = [v,i] = [5,1] = 6
    //iv = [i,v] = [1,5] = 4
    if (current < next) {
      //   sum += arr.indexOf(tempRoman[i] + tempRoman[i + 1]);
      //   i++;
      sum += arr.indexOf(tempRoman[i + 1]) - arr.indexOf(tempRoman[i]); // 4
      i++;
    } else {
      sum += arr.indexOf(tempRoman[i]);
    }
  }

  return sum;
};
console.log("ROMAN", romanConverter("iv"));

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown →
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
// Input: numRows = 1
// Output: [[1]]

const pascal = (numRows) => {
  const output = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    let tmp = [1, 1]; // [1,2,1]

    for (let j = 0; j < output[i - 2].length; j++) {
      const newElement = output[i - 1][j] + output[i - 1][j + 1]; // output[1][0] + output[1][1] = 1 + 1 => 2
      tmp.splice(1, 0, newElement);
    }
    output.push(tmp);
  }
  output.length = numRows;
  return output;
};

console.log(pascal(5));

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

const maxProfit = (prices = []) => {
  let max = -Infinity;
  let min = Infinity;
  prices.forEach((price) => {
    if (price < min) {
      min = price; // 7 1 1 1
      max = price; // 7 1 5 6
    }
    if (price > max) max = price; // 5 6
  });
  return max - min;
};

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));

console.log(true + true * 3 + "2");
