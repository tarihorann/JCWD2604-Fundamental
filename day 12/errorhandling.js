/** @format */

const f = (n) => {
  try {
    if (typeof n === "number") console.log(n);
    // else throw new Error("bukan number woi");
    else n.push("hello");
    console.log(n);
  } catch (err) {
    if (err.message === "n.push is not a function")
      console.log("silahkan hubungi admin");
  }
};

f(10);
f("hello");

console.log("20");
