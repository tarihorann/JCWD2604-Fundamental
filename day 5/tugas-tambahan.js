/** @format */

// *
// **
// ***
// ****

let number = 5;

for (let i = 0; i < number; i++) {
  star = "";
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

//  ****
//   ***
//    **
//     *

//

console.log();
// *****
//  ****
//   ***
//    **
//     *

// *****

// *****
//  ****
//   ***
//    **
//     *

for (let i = 0; i < number; i++) {
  star = "";
  for (let j = 0; j < number; j++) {
    if (j < i) star += " ";
    else star += "*";
  }

  console.log(star);
}

//     *
//    **
//   ***
//  ****

console.log();

for (let i = 0; i < number; i++) {
  star = "";
  for (let j = 0; j <= number; j++) {
    if (j < number - i) star += " ";
    else star += "*";
  }

  console.log(star);
}

//  ****
//  ***
//  **
//  *

console.log();

for (let i = 0; i < number; i++) {
  star = "";
  for (let j = 0; j < number - i; j++) {
    star += "*";
  }

  console.log(star);
}

//      *
//     * *
//    * * *
//   * * * *

//

for (let i = 0; i < number; i++) {
  star = "";
  for (let j = 0; j < number; j++) {
    if (number - i > j) star += " ";
    else star += "* ";
  }

  console.log(star);
}
