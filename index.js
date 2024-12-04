console.log("Hello from Conditions");
//------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 1
// <h3>Write a  which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>

// const givenNumber = Number(prompt("Enter a number:"));

// // Number("10") => 10
// // Number("Hello") => NaN (not a number)
// // example
// // giveNumber = 8
// // 8 % 3 = 2
// // 2 == 0 ???
// // givenNumber = 9
// // 9 % 3 = 0
// // 0 == 0 ??
// // 3-d huvaagjiinaa
// // isNan ===
// if (Number.isNaN(givenNumber)) {
//   console.log("Not a Number! Please Input Number");
// } else if (givenNumber % 3 == 0 && givenNumber % 5 == 0) {
//   console.log("Buzz and Fizz");
// } else if (givenNumber % 3 == 0) {
//   console.log("Fizz");
// } else if (givenNumber % 5 == 0) {
//   console.log("Buzz");
// } else {
//   console.log("given Input Number/Value");
// }
//------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 2
// Write a JavaScript conditional statement to find the largest of five numbers.
// check input numbers are the type of number, if not console.log('Invalid inputs
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

// const numberOne = Number(prompt("Enter a number"));
// const numberTwo = Number(prompt("Enter a number"));
// const numberThree = Number(prompt("Enter a number"));
// const numberFour = Number(prompt("Enter a number"));
// const numberFive = Number(prompt("Enter a number"));
// if (
//   Number.isNaN(numberOne) &&
//   Number.isNaN(numberTwo) &&
//   Number.isNaN(numberThree) &&
//   Number.isNaN(numberFour) &&
//   Number.isNaN(numberFive)
// ) {
//   console.log("Toon utga oruulna uu!");
// } else if (
//   numberOne > numberTwo &&
//   numberOne > numberThree &&
//   numberOne > numberFour &&
//   numberOne > numberFive
// ) {
//     console.log ("numberOne");
// }
// else if (
//     numberTwo > numberOne &&
//     numberTwo > numberThree &&
//     numberTwo > numberFour &&
//     numberTwo > numberFive
//   ) {
//       console.log ("numberTwo");
//   }
//   else if (
//     numberThree > numberOne &&
//     numberThree > numberTwo &&
//     numberThree > numberFour &&
//     numberThree > numberFive
//   ) {
//       console.log ("numberThree");
//   }
//   else if (
//     numberFour > numberOne &&
//     numberFour > numberTwo &&
//     numberFour > numberFour &&
//     numberFour > numberFive
//   ) {
//       console.log ("numberFour");
//   }
//   else if (
//     numberFive > numberOne &&
//     numberFive > numberTwo &&
//     numberFive > numberThree &&
//     numberFive > numberFour
//   ) {
//       console.log ("numberFive");
//   }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 3

// Write a JavaScript program that accept two integers and display the larger.

// check input numbers are the type of number, if not console.log('Invalid inputs)

// Sample numbers : 2,5
// Output : 5

// const integers1 = Number(prompt("Enter number 1:"));
// const integers2 = Number(prompt("Enter number 2:"));
// if (integers1 > integers2){
//     console.log(integers1);
// }

//  else if (integers2 > integers1){
//     console.log(integers2);
//  }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 4

// Write a JavaScript conditional statement to find the sign of product of three numbers.
// Display an console.log box with the specified sign.

// Sample numbers : 3, -7, 2
// Output : The sign is -

// const first = Number(prompt("Enter number:"));
// const second = Number(prompt("Enter number:"));
// const third = Number(prompt("Enter number:"));
// const product = first * second * third;

// if (product > 0) {
//   console.log("It's a plus");
//   console.log(product);
// } else {
//   console.log("It's a minus");
//   console.log(product);
// }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 5

// Choose the correct comparison operator to console.log true, when x is greater than y.
// Choose the correct comparison operator to console.log false, when x is equal to y.
// Choose the correct comparison operator to console.log not sure, when x is NOT equal to y.
// const x = Number(prompt("X too oruul:"));
// const y = Number(prompt("Y too oruul:"));
// if (x > y) {
//   console.log(x);
//   console.log("True");
// } else if (x === y) {
//   console.log(y);
//   console.log("False");
// } else if (x !== y) {
//   console.log("Not sure");
// }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 6

// The Grade Assigner
// - Write a if/else statement that:
//   - takes 1 variable, a number score.
//   - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that if/else statement for a few different scores and log the result to make sure it works.
// const score = Number(prompt("Score-oo oruulna uu:"));
// if (score <= 100 && score > 89) {
//   console.log("A");
// } else if (score > 79 && score < 90) {
//   console.log("B");
// } else if (score > 69 && score < 80) {
//   console.log("C");
// } else if (score > 59 && score < 70) {
//   console.log("D");
// } else if (score < 60) {
//   console.log("F");
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 10 j
// Write If statement that takes string
//     if string length is more than 10 print the string  has more than 10 characters
//      if string length is more than 5 return the string has more than 5 characters
//       if string length is less than 1 return the string has nothing
//       if string length is equal to 1 return the string has 1 character
// const utga = prompt("Text-ee bichne uu:");
// if (utga.length > 10) {
//   console.log("The string  has more than 10 characters", "Your character length is:",  utga.length);
// } else if (utga.length > 5) {
//   console.log("The string has more than 5 characters", "Your character length is:",  utga.length);
// } else if (utga.length < 1) {
//   console.log("The string has nothing", "Your character length is:",  utga.length);
// } else if (utga.length === 1) {
//   console.log("The string has 1 character", "Your character length is:",  utga.length);
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 7 j

//  3) Write conditional expressions to satisfy the following safety rules:

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
// const crewStatus = prompt("Medeelel oruulna uu:");
// const status = "True";
// if (crewStatus == "True") {
//   console.log("Crew Ready");
// } else if (crewStatus !== "True") {
//   console.log("Crew not Ready");
// }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
// // const computerStatusCode = prompt("Medeelel oruulna uu:");
// const computerStatusCode = "400";
// if (computerStatusCode == 200) {
//   console.log("Please stand by. Computer is rebooting.");
// } else if (computerStatusCode == 400){
//     console.log("Success!");
// }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!"
//      Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".

// const shuttleSpeed = Number(prompt("Toon utga oruulna uu:"));
// if (shuttleSpeed > 17500) {
//   console.log("ALERT: Escape velocity reached!");
// } else if (shuttleSpeed < 8000) {
//   console.log("ALERT: Cannot maintain orbit!");
// }  else {
//     console.log ("Stable speed");
// }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//     Write If statement that takes number checks if the number is odd or even

//     if odd return "the number is odd"
//     if even return "the number is even"
// const toonUtga = Number(prompt("Toon utga oruulna uu:"));
//  if (toonUtga % 2 === 0) {
//     console.log("THis is even");
//  }  else if ( toonUtga % 2 !== 0) {
//     console.log("THis is odd");
//  }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 8 j

// Write if statement that takes role and return each role with greeting

//     if role is 'Employee' return 'Hello'
//     if role is 'Director' return 'Greetings'
//     if role is '' return 'Please provide role'
//     else return 'Hi'

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 9 j

// 0. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг,
// бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу.
// Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.
