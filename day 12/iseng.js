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

let string = "1";
let nbr = 5;

if (string < nbr) console.log("true");
else console.log(false);

// if (5 || 1) console.log("a");

console.log(5 || 1); //5
console.log(undefined || 1); //1
console.log(false || 1); //1
console.log(undefined || false); // false
console.log(false || undefined); // undefined

console.log(5 && 3); // 3
console.log(5 && false); // null
console.log(undefined && 11); // undefined
console.log(undefined && false); // undefined

// kiri true diambil kanan
// kanan true diambil kiri
// kiri dan kanan false diambil yang kiri
// kiri dan kanan true ambil yang kanan

console.log((undefined && false) || true); // true
console.log((undefined && false) || true || 50); // undefined
console.log(undefined && false && 50 && 30); // undefined

console.log(20 && false && 50 && 30); // undefined

console.log();

function getHasil(num) {
  //2
  if (num <= 1) return num;
  return getHasil(num - 1) + getHasil(num - 2) + num;
}

console.log(getHasil(3));
// n =3

// getHasil(2) + getHasil(1) + 3
// getHasil(2) + 1 + 3
// 3 + 1 + 3 = 7

//   getHasil(2 )=>   getHasil(2-1) + getHasil(2-2) + 2
//                      1 + 0 + 2 = 3

const test_a = [3, 2, 3].forEach((val) => true);

console.log(test_a);

const jumlah = (arr = []) => {
  let result = 0;
  arr.forEach((val) => {
    result += val;
  });
  return result;
};

console.log(jumlah([1, 2, 3, 4]));

for (let number in [1, 2, 3, 4]) {
  console.log(number, "index");
}
for (let number of [1, 2, 3, 4]) {
  console.log(number, "value");
}

const customer = {
  name: "udin",
  address: "konoha",
};
for (let key in customer) {
  console.log(key, "ini key");
}
const entriesCustomer = Object.entries(customer);

entriesCustomer.map(([key, value]) => {
  console.log(key, value);
});

for (let array of entriesCustomer) {
  console.log(array);
}

for (let [key, value] of entriesCustomer) {
  console.log(key, "ini key");
  console.log(value, "ini value");
}

const array2D = [
  1,
  2,
  3,
  4,
  [
    5,
    6,
    [7, 8, [9, [10, 11, 12, ["tiga belas", 14, "lima belas", ["enam belas"]]]]],
  ],
];
console.log(array2D[4][2][2][1][3][2]);

const origin = [1, 2, 3];
const deepCopy = origin; //pointer
const shallowCopy = [...origin]; //clone

deepCopy[2] = 10;
console.log(deepCopy);
console.log(origin);

const obj = { name: "porter" };
const deepObj = obj; //pointer
const shallowObj = { ...obj }; //clone

deepObj.kelas = "JCWD";
console.log(deepObj);
console.log(obj);
console.log(shallowObj);

const arr2obj = { ...origin }; //index jadi key, element jadi value
// const obj2arr = [...obj]; //error
console.log(arr2obj);

const fruits = ["mangga", "semangka", "melon", "anggur", "cherry", "tomat"];

const alpha = "abcdefgijklmnopqrstuvwxyz".split("");
console.log(alpha);

console.log(fruits.push("jeruk"), "length setelah");

console.log(fruits);
//  ms => s 1000
//  s => menit => 60
//  menit => jam => 60
//  jam => hari => 24
//  hari => bulan => 30
//  bulan => tahun => 12
//  tahun => decade => 10
//  decade => abad

// tipe data = number,string,array,object,boolean
// operator
// built in method/prop setiap tipe data
// if else
// switch
// for,while,do while
// big o notation
// const,let,var
// function
// callback function
// recursive
// prefix postfix

const f1 = () => {
  let x = 3 * 2; //constant
  return x; //constant
};
// O(1)

const loop = (n) => {
  for (let i = 0; i < n; i++) {
    console.log("hehe");
  }
};
// O(n);

const nestedLoop = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log("hello");
    }
  }
};
// O(n^2)

const nestedLoop2 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        for (let l = 0; l < n; l++) {
          console.log("hello");
        }
      }
    }
  }
};
// O(n^4)

let angka = 1;
console.log(angka++); //postfix  = 1
console.log(++angka); //prefix = 3

console.log(arr.unshift(10));
