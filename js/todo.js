const toDoList = document.querySelector(".js-toDoList");
const left = document.querySelector(".left-icon"),
      translate = left.querySelector(".button-share"),
      clearLS = document.querySelector(".record-box__delete"),
      boxHide = document.querySelector(".record-box"),
      boxShow = document.querySelector(".record-box__show"),
      boxShowLater = document.querySelector(".hide-box__show"),
      boxSpan = boxShow.querySelector(".record-box__span");

boxShow.addEventListener("mouseleave",function(event){
  boxSpan.classList.toggle("record-box__hide");
})


boxShow.addEventListener("mouseenter",function(event){
  boxSpan.classList.toggle("record-box__hide");
})

boxShowLater.addEventListener("click",function(event){
  boxHide.classList.toggle("record-box__hide");
  boxShow.classList.toggle("record-box__hide");
})

boxShow.addEventListener("click",function(event){
  boxHide.classList.toggle("record-box__hide");
  boxShow.classList.toggle("record-box__hide");
})




clearLS.addEventListener("click",function(event){
  localStorage.removeItem("saveLists");
  location.reload();
})

const TODOS_LS = 'saveLists';
let saveLists = [];

function filterFn(toDo){
  return toDo.id === 1
}

function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = saveLists.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  });
  saveLists = cleanToDos
  saveToDos();
}

function saveToDos(){
  localStorage.setItem(TODOS_LS,JSON.stringify(saveLists));
}

function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("p");
  const span = document.createElement("span");
  const newId = saveLists.length + 1;
  delBtn.innerText = "X";
  delBtn.addEventListener("click",deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text:text,
    id : newId
  };
  saveLists.push(toDoObj);
  saveToDos();
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = textArea.value;
  paintToDo(currentValue);
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    })
  }
}

function init(){
  loadToDos();
  translate.addEventListener("click",handleSubmit);
}

init();
