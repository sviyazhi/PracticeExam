//Q1
let name = "Sheo";
let age = 25;
let isStudent = true;
let address;
let phoneNumber = null;
let person = {
    firstName: "Sherise",
    lastName: "viyazhi",
    age: 25
};

let scores = [90, 85, 78];
let id = Symbol("uniqueId");
let bigNumber = 12345678901n;

console.log("String:", name);
console.log("Number:", age);
console.log("Boolean:", isStudent);
console.log("Undefined:", address);
console.log("Null:", phoneNumber);
console.log("Object:", person);
console.log("Array:", scores);
console.log("Symbol:", id);
console.log("BigInt:", bigNumber);



//Q2


//Q3



//Q4

//Q5


//Q6
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    if (i === 8) {
        
        break;
    }
    console.log("Current number:", i);
}

//Q7
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
//Q8
function calculateHypotenuse(adjacent, opposite) {
    return Math.sqrt(adjacent * adjacent + opposite * opposite);
}


let hypotenuse = calculateHypotenuse(3, 4);
console.log("Hypotenuse:", hypotenuse);









