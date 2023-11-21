/** @format */

console.log("hello".substring(2, 3));
console.log("hello".substr(2, 3));
console.log("hello".concat(" ", "purwadhika", " ", "jakarta"));

console.log(" hello guys".trim(), "ini trim");
console.log("hello".charCodeAt(0));
console.log("hello".lastIndexOf("l"));
console.log("hello".search("o"), "ini search");

console.log((20.323).toPrecision(21));

console.log(" hello guys".padStart(2, "hei"), "ini pad start");

let now = new Date("2023-12-21");
console.log(now);
now = new Date();
let date2 = Date.now(24 * 60 * 60 * 1000);

console.log(date2);

console.log(5 ** 2);
