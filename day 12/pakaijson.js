/** @format */

const obj = {
  name: "udin",
};
const str = `{"name":"udin"}`;
console.log(obj.toString());
console.log(JSON.stringify(obj)); //convert dari obj jadi string
console.log(JSON.parse(str)); //convert dari string jadi obj

const data = require("./data.json"); // import dari file data.json

console.log(data.variant);

const kumpulanfunction = require("./exportfunction");
const { penjumlahan } = kumpulanfunction;

console.log(penjumlahan(5, 5));
