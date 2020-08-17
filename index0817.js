const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  //toggle : CLICKED_CLASS가 classList에 존재하면 remove, 없으면 add하는 함수
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
