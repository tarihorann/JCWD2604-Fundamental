/** @format */

const number = 10;
console.log(number);

let number2;
console.log(number2);

const b = () => a();
const a = () => 1 + 2;

console.log(b());

const arr = [1, 2, 3, [4, [5, [6, [[[7]]]]]]];

console.log(arr.length, "ini length");
console.log(arr[3].length);
console.log(arr[3][1].length);
console.log(arr[3][1][1][1][0][0][0]);

console.log(arr.push(5));
console.log(arr);

const test = (a, b) => {
  for (let i = 0; i < b; i++) {
    a += b; // 5 + 2 = 7, 27 + 2 = 29
    a + b;
    while (a > 8) {
      a -= 100; //  - 71
    }

    if (a) a += 20; // 27 51
  }
  return a; // - 51
};
console.log(test(5, 2));
