/** @format */

// 1. buat function dengan rest param tipe data number. lalu sum seluruh paramnya (gunakan reduce)
// ex: myFunc(1,2,3,4) => 10

const sumRes = (...numbers) => numbers.reduce((sum, curr) => sum + curr);
const test = (...res) => console.log(res);
test(1, 2, 3, 4, 5);
console.log(sumRes(1, 2, 3, 4));

// 2. buat function dengan parameter array of Strings. return value string yg memiliki huruf "a"
// ex: ["udin","naruto","sakura"] => ["naruto","sakura"]

const includesA = (arr = []) =>
  arr.filter((val) => val.toLowerCase().includes("a"));
console.log(includesA(["udin", "NARUTO", "sakura"]));

// 3. buat function dengan parameter array of numbers. return arraynya dan tambahkan angka 5 disetiap elementnya
// ex: [2,3,4,5] => [7,8,9,10]

const plus5 = (numbers = [], plus) =>
  //   numbers.reduce((sum, curr) => sum + curr + 5, 0);
  numbers.map((val) => val + plus);
console.log(plus5([2, 3, 4, 5], 5));
console.log(plus5(["ani", "budi"], "man"));

const num = 1;
const num2 = 2;
const arrayyy = [1, 2];
const resp = (...res) => console.log(res, "ini rest param");
const bukanres = (arr = []) => console.log(arr, "ini bukan rest param");
resp(num, num2);
bukanres(arrayyy);

// 4. buat sebuah function dengan 2 parameter.
//     parameter pertama adalah sorting dengan value "ascending" atau "Descending".charAt
//     parameter kedua adalah array yang akan disorting
// ex: myFunc("ascending", [5,3,4,1,2]) => [1,2,3,4,5]
// ex: myFunc("descending", [5,3,4,1,2]) => [5,4,3,2,1]

const sortNumbers = (type, arr = []) =>
  arr.sort((a, b) => (type === "ascending" ? a - b : b - a));
console.log(sortNumbers("descending", [1, 2, 1, 3, 4]));

const sortNumbers2 = (type, arr) =>
  type === "ascending"
    ? arr.sort((a, b) => a - b)
    : type === "descending"
    ? arr.sorta((a, b) => b - a)
    : "silahkan pilih ascending/descending";

// 5. buat funciton untuk menambahkan sebuah element ke dalam arraynya.
//     tipe data dalam seluruh array harus sama, jika tidak sama tidak bisa ditambahkan
//     ada 2 parameter, parameter pertama array itu sendiri, parameter 2 kedua element yang ditambahkan

const array = (arr, newElement) =>
  typeof arr[0] == typeof newElement
    ? arr.concat(newElement)
    : // [...arr, newElement]
      //   arr.push(newElement)
      arr + "tipe data berbeda";

// const a = [1, 2, 3, 4];
// console.log(a.push(100)); //5
// console.log(a);

// ex: myFunc([1,2,3], "4") => "tipe data tidak sesuai"
// ex: myFunc([1,2,3], 6) => [1,2,3,6]
console.log(array([1, 2, 3, 4], "100"));

// 6. buat function dengan 2 parameter array of numbers. return hasil penjumlahan dari kedua array
// ex: myFunc([1,2],[3,4]) => 10

const sum2Arr = (arr1, arr2) =>
  //   arr1.concat(arr2).reduce((sum, curr) => sum + curr);
  [...arr1, ...arr2].reduce((sum, curr) => sum + curr);
console.log(sum2Arr([1, 2], [3, 4]));

// 7. terdapat sebuah variable array [1,2,3,[4,5,[6,7,8]]] gunakan looping untuk print seluruh elementnya
// ex :
// 1
// 2
// 3
// 4
// 5
// 6
// dst..

const arr = [1, 2, 3, [4, 5, [6, 7, 8]]];

arr.forEach((val) => {
  if (Array.isArray(val)) {
    val.forEach((val2) => {
      if (Array.isArray(val2))
        val2.forEach((val3) => {
          console.log(val3);
        });
      else console.log(val2);
    });
  } else console.log(val);
});
for (let i = 0; i < arr.length; i++) {
  if (!Array.isArray(arr[i])) console.log(arr[i]);
  for (let j = 0; j < arr[i].length; j++) {
    if (!Array.isArray(arr[i][j])) console.log(arr[i][j]);
    for (let k = 0; k < arr[i][j].length; k++) {
      if (!Array.isArray(arr[i][j][k])) console.log(arr[i][j][k]);
    }
  }
}

const arr3D = [[[1, 2, 3, 4]], [[5, 6, 7, 8]], [[9, 10, 11, 12, 13]]];

arr3D.forEach((arr2) => {
  arr2.forEach((arr1) => arr1.map((val) => console.log(val)));
});

const recursive = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) recursive(arr[i]);
    else console.log(arr[i], "ini apa");
  }
};

recursive(arr);

// arr.forEach((val) => {
//   if (val?.length)
//     val.forEach((val2) => {
//       if (val2?.length)
//         val2.forEach((val3) => {
//           console.log(val3);
//         });
//       else console.log(val2);
//     });
//   else console.log(val);
// });

// 8.  buat function untuk menjumlahkan seluruh ascii code pada karakter dalam string
//     parameter str merupakan sebuah string
//     gunakan method charCodeAt()
//     return hasil penjumlahannya ascii codenya

const sumAscii = (str = "") =>
  str.split("").reduce((sum, curr) => sum + curr.charCodeAt(0), 0);
console.log(sumAscii("aa")); //["a","a"]

// ex: myFunc("aa") => 194
//     karena ascii code dari a adalah 97
//     maka returnnya adalah 97+97 = 194

// 9. buat function untuk melakukan penjumlahan dari 1 hingga parameter n dengan recursive
// ex : myFunc(5) => 1+2+3+4+5 = 15
const penjumlahan = (n) => {
  if (n === 1) return 1;
  else return n + penjumlahan(n - 1);
  //   else return total;
};

//penjumlahan(5)
//penjumlahan(4,5)
//penjumlahan(3,9)
//penjumlahan(2,12)
//penjumlahan(1,14)
//penjumlahan(0,15)

console.log(penjumlahan(5));
// 10. buat function untuk mencari setiap index dari element yang dicari .
//     2 parameter
//     parameter 1 adalah array itu sendiri
//     parameter 2 adalah value yang dicari

// ex: myFunc([1,2,3,4,2,3,2],2) => [1,4,6]
//     dari array => [1,2,3,4,2,3,2]
//     angka 2 terdapat di index 1,4,6

const findIndexOf = (arr, search) => {
  const result = [];
  arr.map((val, i) => {
    if (val == search) result.push(i);
  });
  return result;
};

console.log(findIndexOf([1, 2, 3, 4, 2, 3, 2], 2));

// 11. buat function dengan rest param numbers.
//     return sebuah array yang menentukan angka tersebut odd/even
// ex: myFunc(1,2,3,4) => ["ganjil","genap","ganjil","genap"] wajib pakai map

const oddEven = (...arr) =>
  arr.map((val) => (val % 2 == 0 ? "genap" : "ganjil"));
console.log(oddEven(1, 2, 3, 4));

// 12. buat function untuk generate random array of numbers
//     1 parameter untuk menentukan panjang array yang akan dibuat
//     random number dari angka 1-100

const generateRandom = (n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    const random = Math.ceil(Math.random() * 99); //1-100
    result.push(random);
  }
  return result;
};

console.log(generateRandom(5));

// ex: myFunc(5) => [90,4,3,2,20]

// 13. buat function untuk menentukan kelulusan student
//     nilai kkm adalah 70
//     student dapat remedial apabila nilai < 70 dan nilai > 60
//     parameternya adalah sebuah nested array
//     console.log kumpulan student yg tidak lulus
//                 kumpulan student yg harus remedial
//                 kumpulan student yang lulus

// ex: myFunc([["naruto",50],["sasuke",100],["sakura",60],["joni",60],['ucok',50],["tsunade",100]])
//     lulus ["sasuke","tsunade"]
//     remedial ["joni","sakura"]
//     tidak lulus ["naruto","ucok"]

const nomor13 = (arr) => {
  const tidakLulus = [];
  const remedial = [];
  const lulus = [];
  arr.forEach((siswa) => {
    const nama = siswa[0];
    const nilai = siswa[1];
    if (nilai >= 70) lulus.push(nama);
    else if (nilai > 60 && nilai < 70) remedial.push(nama);
    else tidakLulus.push(nama);
  });
  console.log("tidak lulus", tidakLulus.join());
  console.log("remedial", remedial.join());
  console.log("lulus", lulus.join());
};

nomor13([
  ["naruto", 50],
  ["sasuke", 100],
  ["sakura", 61],
  ["joni", 61],
  ["ucok", 50],
  ["tsunade", 100],
]);
