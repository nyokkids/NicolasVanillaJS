// // Array----------------------------------------------------------------------------------------------------
// const daysOfTheWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// console.log(daysOfTheWeek);
// daysOfTheWeek.push("sun");
// console.log(daysOfTheWeek);
// const toBuy = ["potato", "tomato", "pizza"];
// console.log(toBuy[2]);

// // Objet--------------------------------------------------------------------------------------------------------
// const player = {
//   name: "Mihyeok",
//   points: 120,
//   color: "red",
//   fat: false,
// };
// console.log(player);
// console.log(player.name);
// console.log(player.points);
// player.points = player.points + 180;
// console.log(player.points);
// player.lastName = "Im";
// player.address = "군자동";
// player.fat = true;
// console.log(player.fat);
// console.log(player);

// functions part.1----------------------------------------------------------------------------------------------------
// function sayHello(nameOfPerson, age) {
//   console.log(
//     "Hello my name is" + nameOfPerson + "and I'm " + age + " years old "
//   );
// }
// sayHello("nico", 10);
// sayHello("Minhyeok", 30);
// sayHello("ChiChi", 28);
// function plus(a, b) {
//   console.log(a + b);
// }
// plus(13, 29);

// functions part.2----------------------------------------------------------------------------------------------------
// const player = {
//   name: "nico",
//   sayHello: function (otherPersonsName) {
//     console.log("Hello!" + otherPersonsName + "nice to meet you!");
//   },
// };
// player.sayHello("lynn");
// player.sayHello("nico");

// Recap
// const player = {
//   name: "Nico",
//   age: 28,
// };

// player.name;
// console.log((player.name = "nicolas"));

// function plus(a, b) {
//   console.log(a + b);
// }
// plus(5, 14);
// const calculator = {
//   add: function (a, b) {
//     console.log(a, b);
//   },
// };
// calculator.add(5, 1);

// Recap 숙제(05.06)----------------------------------------------------------------------------------------------------
// const calculator = {
//   add: function (a, b) {
//     console.log(a + b);
//   },
//   minus: function (a, b) {
//     console.log(a - b);
//   },
//   divide: function (a, b) {
//     console.log(a / b);
//   },
// };
// calculator.add(10, 90);
// calculator.minus(90, 190);
// calculator.divide(120398, 1893256);

// Return (05.06)----------------------------------------------------------------------------------------------------
// const age = 96;
// function calKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }

// const krage = calKrAge(age);
// console.log(krage);

// const calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   divide: function (a, b) {
//     return a / b;
//   },
//   times: function (a, b) {
//     return a * b;
//   },
// };

// const plusResult = calculator.add(190, 3);
// const minusResult = calculator.minus(plusResult, 10);
// const timesResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timesResult, plusResult);

// Condition (05.06)----------------------------------------------------------------------------------------------------
// const age = parseInt(prompt("How old are you?"));
// console.log(isNaN(age));

// if (isNaN(age) || age < 0) {
//   console.log("Please write a real positive number");
//   console.log(age);
// } else if (age < 18) {
//   console.log("You can't drink yet");
//   console.log(age);
// } else if (age >= 18 && age <= 50) {
//   console.log("You can drink");
// } else if (age > 50 && age <= 80) {
//   console.log("운동하세요");
//   console.log(age);
// }

// JAVASCRIPT ON THE BROWSER (05.07)----------------------------------------------------------------------------------------------------

// const title = document.getElementById("title");
// console.dir(title);
// title.innerText = "Got you!";

// JAVASCRIPT ON THE BROWSER[ - More Events] (05.09)----------------------------------------------------------------------------------------------------
// const title = document.querySelector(".hello h1");
// function handdleTitleClick() {
//   console.dir("title was clicked! ");
//   console.dir(title);
//   title.style.color = "blue";
// }
// function handdleTitleHover() {
//   title.style.color = "red";
// }
// function handdleCopy() {
//   alert("복사했어요!");
//   document.body.style.backgroundColor = "tomato";
// }
// function handdleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }
// function handdleWindowOffline() {
//   alert("SOS! No WI-FI");
// }
// function handdleWindowOnline() {
//   alert("All Good");
// }

// title.addEventListener("click", handdleTitleClick);
// title.addEventListener("pointerover", handdleTitleHover);
// // title.oncopy = handdleCopy;

// window.addEventListener("resize", handdleWindowResize);
// window.addEventListener("copy", handdleCopy);
// window.addEventListener("offline", handdleWindowOffline);
// window.addEventListener("online", handdleWindowOnline);

//  (05.10)----------------------------------------------------------------------------------------------------
// const title = document.querySelector(".hello h1");
// function handdleTitleClick() {
//   const currentColor = title.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   title.style.color = newColor;
// }
// function handdleMouseEnter() {
//   h1.innerText = "Mouse is here!";
// }

// title.addEventListener("click", handdleTitleClick);

//  (05.23)----------------------------------------------------------------------------------------------------
// const h1 = document.querySelector(".hello h1");
// function handdleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }
// h1.addEventListener("click", handdleTitleClick);

const h1 = document.querySelector(".hello h1");
function handdleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handdleTitleClick);
