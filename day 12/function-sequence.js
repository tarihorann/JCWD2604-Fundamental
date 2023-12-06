/** @format */

let result;

const hello = () => greet("hello");
const greet = (str) => (result = str);

const arigatou = () => greet("arigatou!");
hello();

arigatou();
console.log(result);

//calculator

const calculator = (a, b) => a + b;
const calculator2 = (a, b) => a - b;

const displayer = (something) => console.log(something);
const displayer2 = (cb) => console.log(cb(8, 2));
result = calculator(10, 2);
displayer(result);
displayer(calculator(5, 2));
displayer2(calculator);

const calculator3 = (a, b) => {
  displayer(a + b);
};

calculator3(2, 5);

//callback

const calculator4 = (a, b, callback) => {
  callback(a + b);
};

calculator4(8, 5, console.log);
