/** @format */

// Create a function to calculate array of student data
// The object has this following properties :
// Name → String
// Email → String
// Age → Number
// Score → Number
// Parameters : array of student
// Return values :
// Object with this following properties :
// Score
//  Highest
//  Lowest
//  Average
// Age
//  Highest
//  Lowest
//  Average

class Student {
  constructor(name, email, age, score) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}
class LHA {
  constructor(students = [], key) {
    const numbers = students.map((val) => val[key]);
    //if key  =score [70,100,80]
    //key age => age [19,17,20]
    this.highest = Math.max(...numbers);
    this.lowest = Math.min(...numbers);
    this.average = (
      numbers.reduce((sum, curr) => sum + curr) / numbers.length
    ).toFixed(2);
  }
}
const calculate = (students = []) => {
  return {
    Score: new LHA(students, "score"),
    Age: new LHA(students, "age"),
  };
};

const students = [
  new Student("naruto", "n@mail.com", 19, 70),
  new Student("sasuke", "s@mail.com", 17, 100),
  new Student("sakura", "saku@mail.com", 20, 80),
];

console.log(calculate(students));

const calculate2 = (students = []) => {
  const score = students.map((student) => student.score); //[70,100,80]
  const age = students.map((student) => student.age); // [19,17,20]

  const lowestScore = Math.min(...score);
  const highestScore = Math.max(...score);
  const averageScore = score.reduce((sum, curr) => sum + curr) / score.length;

  const lowestAge = Math.min(...age);
  const highestAge = Math.max(...age);
  const averageAge = age.reduce((sum, curr) => sum + curr) / age.length;

  return {
    Score: {
      lowest: lowestScore,
      highest: highestScore,
      average: averageScore,
    },
    Age: {
      lowest: lowestAge,
      highest: highestAge,
      average: averageAge,
    },
  };
};

// Create a program to create transaction
// Product Class
// Properties
// Name
// Price
// Transaction Class
// Properties
// Total
// Product
// All product data
// Qty
// Add to cart method → Add product to transaction
// Show total method → Show total current transaction
// Checkout method → Finalize transaction, return transaction data

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  #products = [];
  #total = 0;

  get cart() {
    return this.#products;
  }

  addtoCart(product, qty) {
    if (product instanceof Product == false)
      return console.log("produk tidak sesuai");
    this.#products.push({ ...product, qty });
    this.#total += product.price * qty;
  }

  showTotal() {
    return this.#convertToMoney(this.#total);
  }

  #convertToMoney(number) {
    return `Rp.${number.toLocaleString("id-ID")},00`;
  }
  checkout(pay = 0) {
    if (typeof pay !== "number") return console.log("input tidak sesuai");
    const change = pay - this.#total;
    if (change < 0)
      return console.log("uang anda kurang", this.#convertToMoney(change * -1));
    else {
      this.#total = 0;
      this.#products.splice(0, this.#products.length);
      return console.log(
        "terimakasih sudah berbelanja, kembalian anda",
        this.#convertToMoney(change)
      );
    }
  }
}

const trx = new Transaction();
trx.addtoCart(new Product("baju", 5000), 3);
trx.addtoCart(new Product("celana", 10000), 2);
trx.addtoCart(new Product("sepatu", 20000), 1);

console.log(trx.cart);
console.log(trx.showTotal());
trx.checkout(60000);
console.log(trx.cart);
