//Print 1 to 5
for(let i = 1; i <= 5; i++) {
    console.log("i = ", i); // 5 execute
}
// console.log(i);
console.log(" Print 1 to 5 loop has ended");


// Calculate sum of 1 to n
console.log("Now start 2nd loop Calculate i of 1 to 10 value");
let sum = 0;
let n = 10;
for(let i=1; i<=n; i++) {
    sum = sum + i; // sum = 15
    console.log("i = ", i);
    console.log("sum = ", sum);
}
console.log("last sum value = ", sum);

console.log("loop has ended");

// INFINITE loop : A loop that never ends 
                                 //Never run this loop beacuse it's never end 
// for(let i = 1; i >= 0; i++) {
// console.log("i = ", i);  
// }

// while loop
let i = 1;
while(i<=10) {
    console.log("Work Hard");
    i++;
}

//do-while loop
let d = 20;
do {
    console.log("Work Hard");
    d++;
} while (i <= 10);

let o = 1;
do {
    console.log("o =",o);
    o++;
} while (o <= 10);


// for-of loop

let str = "workhard";
let size = 0;
for(let val of str) { //iterator -> characters
    console.log("val = ",val);
    size++;
}

console.log("String size = ",size );

//for in loop

let student = {
    name: "Rahul Kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true
};

for(let key  in student) {
    console.log("key = ",key, "value = ", student[key]);
}

//Practice Qs1
console.log("Practice Qs1")
console.log("Even Numbers in 0 to 100")
let s = 100;
let count = 0;
for(let m = 0; s >= m; m++) {
    // console.log("m = ",m)
    
    if(m%2 === 0) { //even number        if(m%2 !== 0) { //odd number
        
        console.log("Numbers = ",m);
        count++;
    }
};
console.log("Tottal even numbers = ", count);

//Qs2.
//Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let gameNum = 25;

let userNum = prompt("Guess the game number 22 25 51 : ");
console.log(userNum);

while(userNum != gameNum) { //game
    userNum = prompt("You entered wrong number. Guess again : ");
}
console.log("congratulations, you entered the right number");