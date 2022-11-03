import { writeFileSync } from "fs"

function generateGaussian(mean: number ,std: number){
  // https://discourse.psychopy.org/t/javascript-gaussian-function/17724/2
        var _2PI = Math.PI * 2;
  var u1 = Math.random();
  var u2 = Math.random();
  
  var z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(_2PI * u2);
  var z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(_2PI * u2);

  return z0 * std + mean;
}

let sum = 0
let numbers = ''

// Generate 10,000 Gaussian random numbers
for (var i = 0; i < 100; i++) {
  const normalNumber = generateGaussian(75, 10)
  sum = sum + normalNumber
  numbers = numbers + normalNumber + '\n'
  console.log(normalNumber)
}

console.log("\n")
console.log(sum / i)
console.log("\n")
console.log(numbers)
writeFileSync("NormalNumbers.txt", numbers)