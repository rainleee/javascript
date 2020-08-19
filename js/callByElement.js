//id를 가져와서 console로 확인해보면 html tag를 볼 수 있다.
const title = document.getElementById("title");
//innerHTML이기 때문에 html tag도 사용가능하다. 기존에있던 내용을 바꿀 수 있다.
title.innerHTML = "Hi change h1 title. <br> rainlee best programmer!!";
//title->style에서 색깔을 red로 변경
title.style.color = "red";
//개발자가 객체의 속성을 쉽게 얻을 수 있도록
//콘솔에서 지정된 JavaScript 객체의 모든 속성을 보는 방법입니다. MDN참조
console.dir(title);
console.dir(document);
let a = document.all;
console.log(a);
console.log(a[5]);
a = a[5].innerHTML = "Hello";
console.log(a);
let tagName = document.getElementsByTagName(title); //h1 h2 body ...etc
console.log(tagName);
//제이쿼리로 치면 $("#title").on() 의 형식으로 쓰임.
const titleNew = document.querySelector("#title");
console.log(titleNew);

console.dir(window);
//console.error("oooooooh Noooooo!!");

//Document Object Module
