// // variables = a container that stores a value.

// // 1. declaration       let x;
// // 2. assignment        x = 100;

// let age = 25;
// let price = 34;
// let gpa = 9.4;

// // typeof is used to print the datatype of object
// console.log(typeof age);
// console.log(`you are ${age} years old`);
// console.log(typeof price);
// console.log(`the price is ${price}`);
// console.log(typeof gpa);
// console.log(`Your gpa is : ${gpa}`);

// // String
// // example "rohit",'rohit',`rohit`
// let firstname="Rohit";
// let lastname="Kumar";

// console.log(typeof firstname);
// console.log(`Your name is ${firstname+" "+lastname}`);

// let email="rohit@gmail.com";
// console.log(`your email is ${email}`);

// // BOOLEAN

// let online = false;
// let isstudent = true;
// let forsale = true;
// console.log("You are online:",online);
// console.log("enrolled :"+isstudent);
// console.log(`This car is for sale: ${forsale}`);

// document.getElementById("p1").textContent = `Your name is ${firstname+lastname}`;
// document.getElementById("p2").textContent =  `Your age is ${age}`;


// // OPERATORS

// // arithemetic operator = operand (value, variable , etc.)
//                         // operator(+ * - / %)
//                         // ex 11 = x + 5
// let students = 30;
// // students -= 5;
// // students += 5;
// // students *= 5;
// // students %= 5;
// // students /= 5;
// // students **=2;
// // students++;
// // students--;

// console.log(students);

// operator precedence
// 1. parenthesis()
// 2. exponents
// 3. multiply & division & modulo
// 4. addition & subtraction


// TYPE CONVERSION = change the datatype of a value to another

let year = window.prompt("How old are you? ");
year = Number(year)

console.log(year, typeof year);