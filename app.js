// function sum(a,b){
//     return a+b;
// }

// console.log(sum(2,3));

// ==================================================
// const fs = require("fs");

// fs.copyFileSync("text.txt", "text2.txt");
// console.log("text.txt was copied to text2.txt");

//==================================================
// const superheroes = require('superheroes');
 
// const heroName = superheroes.random();
// console.log(heroName);

//===================================================
const op = require("./module");

const moduleTitle = op.title;
const moduleSum = op.sum(10,5);
const moduleTimes = op.times(10,5);

console.log(moduleTitle);
console.log(moduleSum);
console.log(moduleTimes);