/** @format */

// Create a function to check if two objects are equal
// Example
// Input :  { a: 2 } & { a: 1 }
// Output: false
// Example
// Input :  { a: “Hello” } & { a: 1 }
// Output: false
// Example
// Input :  { a: 1 } & { a: 1 }
// Output: true

const check = (obj1, obj2) => {
  const obj1Entries = Object.entries(obj1);
  const obj2Entries = Object.entries(obj2);
  if (obj1Entries.length != obj2Entries.length) return false;
  let i = 0;
  for (let [key, value] of obj1Entries) {
    if (key != obj2Entries[i][0] || value != obj2Entries[i][1]) return false;
    i++;
  }
  return true;
};

console.log(check({ a: 1, b: 2 }, { a: 1, b: 2 }));
// Create a function to get the intersection of two objects
// Example
// Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// Output: { a: 1 }

const intersec = (obj1 = {}, obj2 = {}) =>
  Object.entries(obj1).filter(([key, val]) =>
    obj2[key] == val ? true : false
  );

console.log(intersec({ a: 1, b: 2 }, { a: 1, b: 3, c: 3 }));

// Create a function to merge two array of student data and remove duplicate data
// Student data : name & email
// Example :
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  },
// { name: ‘Student 2’, email : ‘student2@mail.com’  }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  },
// { name: ‘Student 3’, email : ‘student3@mail.com’  }
// ]
// Result :
// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  },
// { name: ‘Student 2’, email : ‘student2@mail.com’  },
// { name: ‘Student 3’, email : ‘student3@mail.com’  }
// ]

// Create a function that can accept input as an array of objects and switch all values into property and property into value
// Example :
// Input : [{ name: ‘David’, age: 20 }]
// Output : [{ David: ‘name’, 20: ‘age’}]

const switchObject = (arrObj = []) =>
  arrObj.map((obj) =>
    Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]))
  );

console.log(
  switchObject([
    { name: "David", age: 20 },
    { name: "David", age: 20 },
  ])
);

// Create a function to find a factorial number using recursion
// Example
// Input :  5
// Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

const factorial = (n) => (n == 1 ? 1 : n * factorial(n - 1));
console.log(factorial(5));
