/** @format */

// Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02  03
// 04  05  06
// 07  08  09  10

// Parameters : height → triangle height

const triangle = (h) => {
  let count = 0; //untuk ngitung angkanya
  for (let i = 1; i <= h; i++) {
    let tmp = "";
    for (let j = 1; j <= i; j++) {
      count++; // 3
      tmp += count > 9 ? count + " " : `0${count} `;
      //tmp = "02 " + "03 "
    }
    console.log(tmp); // 02 03
  }
};

triangle(4);

// Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters : n → total looping
// Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

const fizzBuzz = (n) => {
  const tmp = []; // [1,2,"fizz",4,"buzz"]
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) tmp.push("FizzBuzz");
    else if (i % 3 == 0) tmp.push("Fizz");
    else if (i % 5 == 0) tmp.push("Buzz");
    else tmp.push(i);
  }
  return tmp.join(" ");
};

console.log(fizzBuzz(15));

// Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”
const bmi = (weight, height) => {
  const bmi = weight / height ** 2;
  if (bmi < 18.5) return "less weight";
  else if (bmi >= 18.5 && bmi <= 24.9) return "ideal";
  else if (bmi >= 25 && bmi <= 29.9) return "over weight";
  else if (bmi >= 30 && bmi <= 39.9) return "very over weight";
  else return "obesity";
};

console.log(bmi(75, 1.74));

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

const removeOdd = (arr = []) =>
  arr.filter((val) => (val % 2 == 0 ? true : false));

console.log(removeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const arr = [1, 2, 3, 4, 5];

console.log(
  arr.filter((val, index) => {
    // return true or false
    console.log(val, index);
    if (val % 2 != 0) return "hello";
  }),
  "ini filter"
);

console.log(
  arr.map(
    //arg
    (val) => {
      if (val % 3 == 0 && val % 5 == 0) return "fizzbuzz";
      else if (val % 3 == 0) return "fizz";
      else if (val % 5 == 0) return "buzz";
      else return val;
    }
  )
);

// console.log(arr.map());
const cb = (val, index) => {
  return val + " ini index ke " + index;
};
const map = () => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i));
  }
  return result;
};

arr.map((val, i) => val + "ini index ke " + i);
console.log(map());
console.log(arr.reverse());

// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]
const split = (str) => str.split(" ");
console.log(split("hello world"));
