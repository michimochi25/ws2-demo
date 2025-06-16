// 1. Change the header innerText to "Give me your password"
const header = document.getElementById("header");
header.innerText = "Give me your password";
header.style.color = "red";

// 2. Whenever the button is clicked, a new <p> element containing the
// password should be attached to the box

const buttons = document.getElementsByTagName("button");
const button = buttons[0];
const box = document.getElementById("box");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.getElementById("input");
  const newP = document.createElement("p");
  newP.innerText = input.value;
  box.appendChild(newP);
});
