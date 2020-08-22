const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDOList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDOList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    // console.log(toDo.id, parseInt(li.id));
    //int !=== String compare라서 parseInt()를 써서 casting해야됨
    return toDo.id !== parseInt(li.id);
  });

  console.log(cleanToDos);
  toDos = cleanToDos;
  saveToDos();
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      //   console.log(toDo.text);
      paintToDo(toDo.text);
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

//TODO list를 입력하는 fn
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  delBtn.addEventListener("click", deleteToDo);

  delBtn.innerHTML = " ❌";
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDOList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };
  //push() = 해당값을 add하고 length값을 return한다.
  toDos.push(toDoObj);
  saveToDos();
}

//localStorage에 set하는 함수
//localStorage에는 자바스크립트의 객체를 저장할 수 없다. 즉 사용하려면 String으로 저장해야지만 쓸 수 있다.
//이를 위해서 JSON을 사용한다.
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

init();

//reviver 매개체 사용
function someThing() {
  let a = JSON.parse('{"p": 5,"a":10,"c":"aa"}', (key, value) =>
    typeof value === "number"
      ? value * 2 // 숫자라면 2배
      : value
  ); // 나머진 그대로
  // console.log(a.p);
  // console.log(a);
}
// someThing();
