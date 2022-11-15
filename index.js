// 1. Ways To print In JavaScript.
//   console.log("Hello World");
// alert("me");
//   document.write("this is document write");

// 2. Javascript Console API.
//   console.log("Hello World");
//   console.warn("This Is A Warning");
//  console.error("This Is An Error");

// 3. JavaScript Variables.
// What Are Variables :- Containers To Store Data Values.

/*
multi
line 
comment */

// var num1 = 50;
// var num2 = 99;
// console.log(num1 + num2);

// 4. Data Types In JavaScript.
// Numbers
// var num1 = 33;
// var num2 = 47.9;

// // String
// var str1 = "This Is A String";
// var str2 = "This Is Also A String";

// Objects
// var marks = {
//   ravi: 60,
//   shubham: 40,
//   ataf: 98.99,
// };
// console.log(marks);

// Booleans
// var a = true;
// var b = false;
// console.log(a,b);

// var und = undefined;
// console.log(undefined);

// var n = null;
// console.log(n);

/*

At A Very High Level There Are Two Types Of DataTypes In JavaScript
1. Primitive Data Types :- undefined, null, number, string, boolean, symbol
2. Reference Data Types :- Arrays, Object

*/

// var arr = [1, 2, "bablu", 4, 5];
// console.log(arr);

// Operators In JavaScript
//Aritmetic Operators
// var a = 100;
// var b = 10;
// console.log("the value of a + b is ", a + b);
// console.log("the value of a - b is ", a - b);
// console.log("the value of a * b is ", a * b);
// console.log("the value of a / b is ", a / b);

// Assignment Operators
// var c = b;
// c += 2;
// c -= 2; c = c-2
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
// var x = 56;
// var y = 34;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

// logical and
// console.log(true && false);
// console.log(false && false);
// console.log(true && true);
// console.log(false && true);

// logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// logical not
// console.log(!true);
// console.log(!false);

// Functions In JavaScript
// function avg(a, b) {
//   return (a + b) / 2;
// }
// // DRY = Do Not Repeat Yourself
// c1 = avg(4, 6);
// c2 = avg(14, 16);
// // console.log(c1, c2);

/*
// Conditionals In JavaScript
// Single if Statement
// var age = 110;
// if(age > 18){
//   console.log("You Can Drink");
// }

// if - else Statement
// var age = 11;
// if(age > 18){
//   console.log("You Can Drink");
// }
// else{
//   console.log("You Cannot Drink");
// }


age = 31;
// if-else ladder
if(age > 32){
  console.log("You Are Not A Kid");
}

else if(age > 26){
  console.log("Bache Nhi Rhe");
}

else if(age > 22){
  console.log("Yes Bache Nhi Rhe");
}

else if(age > 18){
  console.log("18 Bache Nhi Rhe");
}

else{
  console.log("Bache Rahe");
}
console.log("End Of Ladder");
*/

// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0;i<arr.length;i++){
//   if(i == 2){
//     break
//   }
//   console.log(arr[i]);
// }

// arr.forEach(function(element){
// console.log(element);
// })

// const ac = 0;
// ac++;
// // ac = ac + 1;

// let j = 10;
// while (j < arr.length){
//   console.log(arr.length[j]);
//   j ++;
// }

// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

// let myArr = ["Fan", "Camera", "34", "null", "true"];
// Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("Ataf");
// myArr.shift();
// myArr.unshift("Harry");
// console.log(myArr);

// String Methods In JavaScript
// let myLovelyString = "Ataf Is A Good Boy Good Good Good";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("Good"));
// console.log(myLovelyString.lastIndexOf("Good"));

// console.log(myLovelyString.slice(0,3));
// d = myLovelyString.replace("Ataf", "Kutta");
// d = d.replace("Good", "Bad");
// console.log(d, myLovelyString);

// Dates In JavaScript
// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());

// DOM Manipulation In JavaScript
// let element = document.getElementById("click");
// console.log(element);

// let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";

// tn = document.getElementsByTagName("div");
// console.log(tn);

// Quaries In JavaScript
// sel = document.querySelector(".container");
// console.log(sel);

// sel = document.querySelectorAll(".container");
// console.log(sel);

// Events In JavaScript

// firstContainer.addEventListener("click", function () {
//   document.querySelectorAll(".container")[1].innerHTML = (
//     "<b>"we Have Clicked On Container</b>
//   );
//   console.log("click hua");
// });

// firstContainer.addEventListener("mouseover", function () {
//   console.log("Mouse Aaya");
// });

// firstContainer.addEventListener("mouseout", function () {
//   console.log("Mouse Out Of Container");
// });

// firstContainer.addEventListener("mouseup", function () {
//   console.log("Mouse Over Up The Container");
// });
// firstContainer.addEventListener("mousedown", function () {
//   console.log("Mouse Down On The Container");
// });

// Arrow Functions
// function summ(a, b) {
//   return a + b;
// }

// sum = (a, b) => {
//   return a + b;
// };

// logkaro = () => {
//   console.log("I Am Your Log");
// };

// Set Timeout And SetIntervals

// setTimeout(logkaro, 2000);
// setInterval(logkaro, 2000);

// Tempelates Literals In Backticks
// a = 35;
// console.log(`This Is My ${a}`);
