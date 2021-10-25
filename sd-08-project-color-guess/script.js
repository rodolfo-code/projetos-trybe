const divBall = document.getElementsByClassName('ball');
const textColor = document.getElementById('rgb-color');
const answerText = document.getElementById('answer');
const colors = [];

function randomNumber(num) {
  const numberRandom = Math.floor(Math.random() * num);
  return numberRandom;
}

function randomColor() {
  const rgb = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
  return rgb;
}

function clickBall(event) {
  const colorSelected = event.target.style.backgroundColor;
  if (colorSelected == textColor.textContent) {
    answerText.textContent = "Acertou!";
  } else {
    answerText.textContent = "Errou! Tente novamente!";
  }
  console.log(event)
}

for (let ball = 0; ball < divBall.length; ball += 1) {
	const color = randomColor()
	divBall[ball].style.backgroundColor = color;
  colors[ball] = color;
  divBall[ball].addEventListener('click', clickBall);
}

function addRandomColor() {
	textColor.textContent = colors[Math.floor(randomNumber(6))];
}

addRandomColor();

