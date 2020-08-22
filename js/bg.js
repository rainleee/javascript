const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.ceil(Math.random() * IMG_NUMBER);
  console.log(number);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
