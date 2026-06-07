// selector . event = action
// document.getElementById("minus").onclick = function () {
//   // document.getElementById("count").innerText = "<i> -1 </i>";
//   document.getElementById("count").innerHTML = "<i> -1 </i>";
//   // document.getElementById("count").textContent = "<i> -1 </i>";
// };

// document.getElementById("plus").onclick = function () {
//   document.getElementById("count").innerText = 10;
// };
// console.log(document.getElementById("minus"));

// var age = 10;
// var age = 20;

// let age = 15;
// age = 20;

// const age = 20;
// age = 10;
// console.log(age);

// const minus = document.getElementById("minus");
// const count = document.getElementById("count");
// const plus = document.getElementById("plus");

// minus.onclick = function () {
//   if (Number(count.innerHTML) > 0) {
//     count.innerHTML = count.innerHTML - 1;
//   }

//   if (Number(count.innerHTML) == 0) {
//     minus.disabled = true;
//   }
// };

// plus.onclick = function () {
//   count.innerHTML = Number(count.innerHTML) + 1;
//   minus.disabled = false;
// };

///////////////////////////
// Timing Methods
// setTimeout(function () {
//   console.log("setTimeout");
// }, 1000);

const timer = document.getElementById("timer");
const close = document.getElementById("close");
const adv = document.getElementById("adv");

setInterval(function () {
  timer.innerHTML = timer.innerHTML - 1;
  if (Number(timer.innerHTML) == 0) {
    timer.style.display = "none";
    close.style.display = "flex";
  }
}, 1000);

close.onclick = function () {
  adv.style.display = "none";
};

// Clock
setInterval(function () {
  const now = new Date();

  const usFormatter = new Intl.DateTimeFormat("en-US", {
    timeStyle: "medium",
  });
  document.getElementById("clock").innerHTML = usFormatter.format(now);
}, 1000);
