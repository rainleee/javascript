//자바스크립트 function 만들어보기
function sayHello(name, age) {
  //기존에 java에서 하던방식
  //console.log("Hello " + name + " you are " + age + " years old");

  //(₩)백틱을 이용한 방법
  //console.log(`Hello ${name} you are ${age} years old`);

  //console.log()는 console에만 보여질뿐 이 function이 어떤값을 return하는지 정해지지 않음.
  return `Hello ${name} you are ${age} years old`;
}
//return값 없이 console.log를 찍으면  undefined가 뜬다.
let greetRainlee = sayHello("rianlee", 20);

//console.log(greetRainlee);

const calculator = {
  plus: function (num1, num2) {
    return num1 + num2;
  },
  minus: function (num1, num2) {
    return num1 - num2;
  },
  multiplication: function (num1, num2) {
    return num1 * num2;
  },
};

const plus = calculator.plus(5, 5);
const minus = calculator.minus(10, 5);
const multiplication = calculator.multiplication(3, 3);

console.log(plus);
//백틱은 ES2015부터 사용이가능하다.
console.dir(`plus의 dir는 ${plus} 입니다.`);
console.log(minus);
console.log(multiplication);
// ,를 사용할경우 각각의 값을 나타낼 수 있다.
console.log(plus, minus, multiplication);
//연산자를 이용하면 변수끼리 연산처리를 해서 출력할 수 있다.
console.log(plus + minus);
