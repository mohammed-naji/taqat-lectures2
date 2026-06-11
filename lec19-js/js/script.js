// select element from document
// 1. getElementById
// 2. getElementsByTagName
// const links = document.getElementsByTagName("a");
// console.log(links[1].innerHTML);
// 3. querySelector
// const links = document.querySelector(".link");
// 4. querySelectorAll
// const links = document.querySelectorAll(".link");
// console.log(links);

// const link = document.querySelector(".link");
// const sp = document.querySelector(".sp");

// // selector . event = action
// sp.onclick = () => {
//   // window.location.href = "https://google.com";
//   window.open("https://google.com");
// };

// link.onclick = (e) => {
//   // console.log(abc951/);
//   e.preventDefault();
// };
// if (sp) {
//   sp.addEventListener("click", showMessage);
// }

// function showMessage() {
//   alert(5555);
// }

const icon = document.querySelector(".copy-box i");
icon.onclick = () => {
  // console.log(icon.closest("div").querySelector("p").innerHTML);

  let text = icon.previousElementSibling.innerHTML;
  window.navigator.clipboard.writeText(text);

  icon.classList.replace("far", "fas");
  icon.classList.replace("fa-copy", "fa-check");
  setTimeout(() => {
    icon.classList.replace("fas", "far");
    icon.classList.replace("fa-check", "fa-copy");
  }, 2500);
};
