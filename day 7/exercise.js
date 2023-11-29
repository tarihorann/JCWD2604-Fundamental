/** @format */

// Create a function to calculate array of student data
// The object has this following properties :
// Name → String
// Email → String
// Age → Date
// Score → Number
// Parameters : array of student
// Return values :
// Object with this following properties :
// Score
// Highest
// Lowest
// Average
// Age
// Highest
// Lowest
// Average

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
