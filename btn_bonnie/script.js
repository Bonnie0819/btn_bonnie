const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button2 = document.querySelector(".button2");

button2.addEventListener("click", updateName2);

function updateName2() {
  const name = prompt("Enter a new name");
  button2.textContent = `Player 2: ${name}`;
}

const temp = document.querySelector('p');

temp.addEventListener("click", updateP);

function updateP() {
    const name = prompt('Enter a new sentence');
    temp.textContent = `${name}`
}

