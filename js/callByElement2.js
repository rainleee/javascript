const title = document.querySelector("#title");
const getByEleTitle = document.querySelector("#title");
//console.log(`ttile의 내용은 :  ${title.innerHTML}`);
// console.log(`ttile의 내용은 :  ${title}`);
// console.log(title);
// console.log(title.innerHTML);
// console.log(getByEleTitle.innerHTML);

const BASE_COLOR = "brown";
const OTHER_COLOR = "#2980b9";

function handleResize() {
  console.log("I have been resized");
}

//함수를 즉시 호출하려면 ()를 붙이고 바로 호출하지 않으려면 ()를 없앨것.
//console을 보면 handleResize의 ()을 빼니 호출되지않았다.
//function을 변수이름처럼 넣어야지 ㄱesize가 될떄마다 이벤트를 호출한다.
window.addEventListener("resize", handleResize);

//()를 넣어 method로 바로 인식하여 console창에 바로 호출된 것을 알 수 있다.
// 아래와 같이 ()로 즉시 methodf를 호출하면 resize이벤트가 딱한번만 실행되고 실행 X
//window.addEventListener("resize", handleResize());

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
    // console.log(currentColor);
  } else {
    title.style.color = BASE_COLOR;
    // console.log(currentColor);
  }
  //let currentText = title.textContent;
}

function init() {
  title.style.color = BASE_COLOR;
  //event에 관련된 내용은 MDN을 보면 자세히 나와있음.
  title.addEventListener("click", handleClick);
  //title.addEventListener("mouseenter", handleClick);
  //title.addEventListener("dblclick", handleClick);
}

//fn을 사용하기위해선 꼭 fn을 실행시켜줘야함
init();

function handleOffline() {
  let currentText = document.getElementById("title");
  //   let currentText = title.innerHTML;
  console.log(currentText);
  //tag요소는 가지고 오지않음.
  console.log(`currentText.innerHTML : ${currentText.innerHTML}`);
  //tag요소까지 가져옴.
  console.log(`currentText.outerHTML : ${currentText.outerHTML}`);
  console.log(`currentText.textContent : ${currentText.textContent}`);
  let after = "WIFI가 꺼진거임 ㅋㅋ";
  //   currentText.innerHTML = after;
  currentText.textContent = after;
  //   console.log(currentText.innerHTML);
  console.log(currentText.textContent);
}

//인터넷이 끊겻을때 page navi나 화면을 다르게 보여주게 사용이 가능할것같음.
window.addEventListener("offline", handleOffline);
