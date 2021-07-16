// let name = 'Barath';
// name = "Deepika";
// let yourName = prompt("What is your Name? " + name)
// let myName = ("Barath Elangovan")
//     // alert(myName);
// alert(yourName);


// input
// let message = 'Hello';
// let name = prompt('What is your Name?');
// output
// alert(message + " " + name + "." + " Welcome to My site" + " " + name);
// alert(name.length);
// alert(message.length);

// input
// var userName = "barath1921";
// var eMail = prompt("Enter your email to login:");
// var password = prompt("Enter your password: ");

// output

// alert("Congrats You have successfully logedin as " + userName + "." + "And. Length of your email is " + eMail.length + ".");

// input

// let userInput = prompt("Enter your tweet in 140 words");
// var slice = userInput.slice(0, 140);

// // output

// alert("You have tweeted " + slice.length + " words." + " still you left with " + (140 - slice.length) + ".");

// var name = prompt("Enter your Name;");
// var nameFirst = name.slice(0, 1);
// // var upperCaseNameFirst = nameFirst.toUpperCase();

// // 
// var nameFull = name.slice(1, );
// // var lowerCaseNameFull = nameFull.toLowerCase();

// alert("Hello " + nameFirst.toUpperCase() + nameFull.toLowerCase() + ".")

// alert(12 % 8);

// var dogAge = prompt("Enter Dog age:");
// var humanAge = (dogAge - 2) * 4 + 21;
// alert(humanAge);

// var x = 12;
// var y = 5;
// x /= 3;
// alert(x);


// var a = 16 % 4;
// alert(a);

// var x = 3;
// var y = x++;
// y += 1;
// alert(y);


// function getMilk(money) {
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     var noOfBottles = Math.floor(money / 1.5);
//     alert("buy " + noOfBottles + " of milk.")
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
// }

// getMilk(10);

// var totalAmount = prompt("Enter Amount:");
// var product = prompt("Enter Product cost");

// alert("You will get " + totalAmount / product);

// var age = prompt("enter ur age");
// var years = (90 - age);
// // alert(years);

// var input = prompt("Enter your name");

// function greet(name) {
//     console.log("Hello" + name);
// }

// greet(input);

// function addition(money){
//     console.log (sub(money / 1.5);
// }
// function sub (number1, number2{

// })

// function bmiCalculator(weight, height) {
//     var bmi = Math.floor(weight / Math.pow(height, 2));
//      return bmi;
// }
// var bmioutput = bmiCalculator(65, 3.5);
// console.log(bmioutput);



// var number1 = 5;
// var number2 = 4;

// function add(a, b) {
//     return a + b;
// }


// function multiply(a, b) {
//     return a * b;
// }


// var addition = add(number1, number2);
// var multi = multiply(addition, number1);

// console.log(multi);

// prompt("Enter your Name");
// prompt("Enter Target name");
// var n = Math.random();
// n = Math.floor(n * 100) + 1;

// if (n >= 70) {
//     alert(n + "%." + " You love each other.")
// }
// if (n <= 70 && n >= 30) {
//     alert(n + "%." + " You have a chance.")
// } else {
//     alert(n + "%.")
// }

// function leapYear(year) {
//     if (year / 4 === 0) {
//         if (year / 100 === 0) {
//             if (year / 400 === 0) {
//                 console.log("Leap year");
//             } else {
//                 console.log("Not a leap year");
//             }

//         } else {
//             console.log("not a leap year");
//         }
//     } else {
//         console.log("Not a leap Year");
//     }
// }
// leapYear(2020);

// if hours is 12am(0) to 12pm(12) its good morning
// else if hour is 12pm(12) to 6pm(18) its good evening
// else hours is 6pm(18) to 12am(24) its good nignt

var promptName = prompt("Enter Your Name:");
var firstWordSlice = promptName.slice(0, 1);
var firstName = firstWordSlice.toLocaleUpperCase();

var restNameSlice = promptName.slice(1, );
var lastName = restNameSlice.toLowerCase();

var userName = (firstName + lastName);


var hrs = new Date();
var hours = hrs.getHours();

if (hours >= 0 && hours <= 12) {
    alert(" Hello " + userName + ". Good Morning!");
} else if (hours >= 12 && hours <= 18) {
    alert("Hello " + userName + ". Good Afternoon!");
} else {
    alert("Hello " + userName + ". Good Evening!");
}