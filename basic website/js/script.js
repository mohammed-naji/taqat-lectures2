const qyt = document.getElementById("qyt");
const mins = document.getElementById("mins");
const plus = document.getElementById("plus");
const total_price = document.querySelector(".total-price");
const new_qyt = document.querySelector("#new-qyt");
const total = document.querySelector("#total");
const price = document.querySelector("#price");

mins.onclick = function () {
  if (qyt.value == 1) return;
  qyt.value = qyt.value - 1;

  new_qyt.innerHTML = qyt.value;
  total.innerHTML = qyt.value * price.innerHTML;
  if (qyt.value == 1) total_price.style.display = "none";
};

plus.onclick = function () {
  qyt.value = parseInt(qyt.value) + 1;

  total_price.style.display = "block";
  new_qyt.innerHTML = qyt.value;
  total.innerHTML = qyt.value * price.innerHTML;
};
