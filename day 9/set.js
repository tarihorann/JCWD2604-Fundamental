/** @format */

const fruits = ["banana", "apple", "jackfruit", "apple"];

const newFruits = new Set(fruits);

newFruits.forEach((val) => console.log(val));
console.log(newFruits.size);
newFruits.add("orange");
newFruits.delete("apple"); //delete apple
console.log(newFruits.has("apple")); // false karena applenya udah ga ada
const ent = newFruits.entries(); // [['banana', 'banana'],['jackfruit','jackfruit'],['orange','orange']]
console.log(Object.fromEntries(ent)); //jadi object key dan value sama
newFruits.clear(); //kosongin elements dalam newFruits
console.log(newFruits);
