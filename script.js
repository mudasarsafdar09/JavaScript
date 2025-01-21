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
// let gameNum = 25;

// let userNum = prompt("Guess the game number 22 25 51 : ");
// console.log(userNum);

// while(userNum != gameNum) { //game
//     userNum = prompt("You entered wrong number. Guess again : ");
// }
// console.log("congratulations, you entered the right number");

// Strings in JS
// String is a sequence of characters used to represent text
let stri = "Hard work";
let str2 = 'Hard work';
console.log(stri[5]); // W


// Template Literals
let specialString = `Go Riht way`;
console.log(specialString);



let obj = {
    item : "pen",
    price : 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// console.log("the cost of", obj.item, " is ", obj.price, "rupees");

let sps = `This is a tamlate literal ${1 + 2 + 3}`;
console.log(sps);

//escape cracters
// \n for next line in strings
console.log("Hard\nWork\tand world be your's");

//String Methods in JS
//These are built-in functions to manipulate a string
//str.toUpperCase()
let up = "Hard Work";
to = up.toUpperCase(); //or let upstr = str.toUpperCase();
console.log(up);

//str.toLowerCase()
let lo = "Hard Work";
lo = lo.toLowerCase(); //or let toup = str.toUpperCase();
console.log(lo);

//str.trim( ) remove whitespaces
let md = "      work hard                  ";
console.log(md.trim());

//str.slice(start, end?) returns part of string
let slice = "Hallo";
console.log(slice.slice(0, 3));

//str1.concat(str2) joins str2 with str1
let str1 = "hard work ";
let str22 = "result --> success" 
//  let res = "I  am learning coding from apna college. " + str1 + str22;
//  console.log(res);
// let mds = "hallo" + 123;
// console.log(mds);
console.log(str1.concat(str22));

//str.replace(searchVal, newVal)
let replae = "Hard Work";
let rep = "Hard sssss Hard Hard Hard";

console.log(replae.replaceAll("Hard", "Work"));
console.log(rep.replaceAll("Hard", "Work"));

//str.charAt(idX)
let ch = "iloveJS";
// ch[0] = "S"; not possible. creat new string or use replace methode
ch = ch.replace("i", "S")
console.log(ch);
console.log(ch.charAt(0));

// let's Practice Qs1. prompt the user to enter thir full name. generate a username for them based on the input. start username with @, followed by their full name and ending with the fullname length

//eg:user name = "shradhakhapra" , username should be "@shradhakhapra13"

let fullName = prompt("Enter your full name: ");
let cleanedName = fullName.replace(/\s+/g, '');
let nameLength = cleanedName.length;
let userName = "@" + cleanedName + nameLength;

console.log("Genrated Username : ", userName);


    //    Complet leacture CH-3