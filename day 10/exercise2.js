/** @format */

// Create a function to convert Excel sheet column title to its corresponding column number.
// Example :
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// …
// Example :
// Input : AB
// Output : 28

// const alphabets = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
// console.log(alphabets);

const convertSheetCol = (col = "") => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""); //[A,B,C,D,E,F,...Z]
  //col = "AA" => ["A","Z"] => [1,26]

  //col = "A" => ["A"] => [1]
  const array = col
    .toUpperCase()
    .split("")
    .map((char) => alphabets.indexOf(char) + 1);
  //
  let result = 0;
  // 3 kemungkinan
  //A-Z single
  //AA-ZZ double
  //AAA-XFD triple
  if (array.length == 1) {
    result = array[0];
  } else if (array.length == 2) {
    result = 26 * array[0] + array[1]; //
  } else if (array.length == 3) {
    result = 26 ** 2 * array[0] + 26 * array[1] + array[2];
  } else return console.log("parameter tidak sesuai");

  if (result > 16384) return console.log(`tidak boleh melebihi column XFD`);
  return console.log(`Column ${col} adalah ${result}`);
};

convertSheetCol("XFD");
// 26 * 26 + 26 = 702

//digit 3
// (26*26 * digit 1 ) + (26 * digit 2 ) + digit 3

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1

//[4,1,2,1,2] => [1,1,2,2,4] => 4
const unique = (nums) =>
  nums
    .sort((a, b) => a - b)
    .filter((num, idx) => num != nums[idx - 1] && num != nums[idx + 1]);

// console.log(unique([4, 1, 2, 1, 2, 4, 5, 1, 1, 2, 3, 4, 5, 6]));
console.log(unique([4, 1, 2, 1, 2]));

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const anagramChecker = (t = "", s = "") => {
  return t.toUpperCase().split("").sort().join("") ===
    s.toUpperCase().split("").sort().join("")
    ? true
    : false;
};

//anagram =>[a,n,a,g,r,a,m] => [a,a,r,g,m,n] => aargmn
//nagaram => [m,a,g,a,r,a,m] =>[a,a,r,g,m,n] =>aargmn

//rat => [r,a,t] => [a,r,t] = art
//car => [c,a,r] => [a,c,r] = acr
console.log(anagramChecker("rac", "car"));

// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

const climbing = (n = 0) => {
  // menggunakan fibonnaci untuk mencari cara yang berbeda untuk menaiki anak tangga
  // 0 1 1 2 3 5 8
  let tempArr = [0, 1];
  for (let i = 2; i < n + 2; i++) {
    tempArr.push(tempArr[i - 2] + tempArr[i - 1]);
  }
  return tempArr[tempArr.length - 1];
};

console.log(climbing(5));
// 1 => 1 step
// 2 => 1 step 1 step, 2 step
// 3 => 111 , 12, 21
// 4 => 1111 , 112 , 211 , 22 , 121
// 5 => 11111, 1112 , 2111 , 1211, 1121 , 221 , 122 , 212
