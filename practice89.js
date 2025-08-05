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
let num2= 10;
console.log(typeof num2);
let  name3="34";
console.log(name3 instanceof String); 
delete num2; 

//Q3
let num22= 16;
let num23= 21;
let isPlaying = true;
let isActive = false;
console.log(num22* num23);
console.log (isPlaying && isActive);

let userAge = 18;
let canVote = userAge >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(canVote);



for (let i=1; i<=5; i--) {
    console.log(i);
    if (i === 0) {
        break;
    }
}


for (let i=0 ; i<=5; i++){
    console.log(i);
} 


//Q4
let sum = 0;
for (let i = 0; i <= 200; i += 10) {
    sum += i;
}
console.log("Sum of divisible numbers", sum);

//Q5

 let timeOfDay = ["morning", "afternoon", "evening"];
 let user= "Sheo";
  if (timeOfDay.includes("morning")) {
    console.log("Good morning!",user);
  }
 else  if(timeOfDay.includes("afternoon")) {
    console.log("Good afternoon!",user);
  }
  else {
    timeOfDay.includes("evening");
    console.log("Good evening!",user);
  }
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

//Q9
function vowelCount(sentence) {
    let matches = sentence.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(vowelCount("Hello World")); 

//Q10a

const post = {
  postId: "123456789",
  author: {
    userId: "ugyy7gh7",
    name: "John Doe",
    tags: ["Alice Wawukali", "James Wantali", "Peter Woyera"]
}
};

class Post {
  constructor(postId, author) {
    this.postId = postId;
    this.author = author;
  }
}

const post2 = new Post("123456789", { name: "John Doe" });

function PostConstructor(postId, author) {
  this.postId = postId;
  this.author = author;
}

const post3 = new PostConstructor("123456789", { name: "John Doe" });






//Q10c

const jsonString = JSON.stringify(post);
console.log(jsonString);

const jsObject = JSON.parse(jsonString);
console.log(jsObject);

//Q11
function countVowels(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (let char of sentence.toLowerCase()) {
        if (vowels.includes(char)) {
            result[char]++;
        }
    }
    return result;
}

console.log(countVowels("Beautiful day at the zoo"));



