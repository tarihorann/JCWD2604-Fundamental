/** @format */

let obj = { name: "hello", age: 100 };
obj = { name: "juan", ...obj, name: "udin" };
console.log(obj);
const entries = Object.entries(obj);
console.log(entries); //[ [ 'name', 'hello' ], [ 'age', 100 ] ]

for (let [key, value] of entries) {
  console.log(key, "=", value);
}
entries.map(([key, value]) => console.log(key, value, "ini map"));
entries.map((val) => console.log(val, "ini map2"));

const myMap = new Map();
myMap.set("David", "001");
myMap.set("Buchanan", "002");

for (let [key, value] of myMap) {
  console.log(key, "=", value);
}
