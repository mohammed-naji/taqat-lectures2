// OOP => Object Oriented Programming
// primitive data type => int, number, float, boolean, string, array
// none primitive => class type

// console.log("Mohammed");
// console.info("Mohammed");
// console.warn("Mohammed");
// console.error("Mohammed");
// console.table(["apples", "oranges", "bananas"]);

// selector . event = action

// document.addEventListener("click", function () {
//   alert(22222);
// });

// document.onclick = function () {
//   alert(55555);
// };

// console.log(window.innerWidth);
// window.onresize = function () {
//   console.log(window.innerWidth);
// };

document.getElementById("px").innerHTML = window.innerWidth + "px";
document.getElementById("em").innerHTML = window.innerWidth / 16 + "em";
window.onresize = function () {
  document.getElementById("px").innerHTML = window.innerWidth + "px";
  document.getElementById("em").innerHTML = window.innerWidth / 16 + "em";
};
