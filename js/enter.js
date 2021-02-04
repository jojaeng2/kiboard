const languageBox = document.querySelector(".language-box");
const leftLanguage = document.querySelector(".left-language");
const selectWrap = document.querySelector(".left-language__wrap");
const leftLanguageSelect = selectWrap.querySelectorAll("li");
const leftLanguageVar = document.querySelector(".left-language-var");
const child = document.querySelector(".to-child");
const childTop = document.querySelector(".to-child__top");
const childBottom = document.querySelector(".to-child__bottom");
const leftIcon = document.querySelector(".main-box__left");
const buttonSpeak = leftIcon.querySelectorAll(".button-speak"),
      buttonCopy = leftIcon.querySelectorAll(".button-copy"),
      buttonStar = leftIcon.querySelectorAll(".button-star");


function msgOn5(){
  buttonSpeak[1].classList.add("button-active")
}
function msgOut5(){
  buttonSpeak[1].classList.remove("button-active");
}
function msgOn6(){
  buttonCopy[1].classList.add("button-active")
}
function msgOut6(){
  buttonCopy[1].classList.remove("button-active");
}
function msgOn7(){
  buttonStar[1].classList.add("button-active")
}
function msgOut7(){
  buttonStar[1].classList.remove("button-active");
}

function iconOut(){
  buttonSpeak[0].addEventListener("mouseleave",msgOut5);
  buttonCopy[0].addEventListener("mouseleave",msgOut6);
  buttonStar[0].addEventListener("mouseleave",msgOut7);

}
function iconHover(){
  buttonSpeak[0].addEventListener("mouseenter",msgOn5);
  buttonCopy[0].addEventListener("mouseenter",msgOn6);
  buttonStar[0].addEventListener("mouseenter",msgOn7);

}



function childActive(){
  child.classList.toggle("child__opacity");
  childTop.classList.toggle("active-child__top");
  childBottom.classList.toggle("active-child__bottom");
}


for (const click of leftLanguageSelect) {
  click.addEventListener("click",function(event){
  for (i = 0; i < leftLanguageSelect.length; i++){
    leftLanguageSelect[i].style.color="black";
  }
  click.style.color = "#2ed573";
  leftLanguage.classList.toggle("language-click");
  leftLanguageVar.innerText = "";
  leftLanguageVar.innerText = click.innerText;
  });
}

function seeLanguage(){
  leftLanguage.classList.toggle("language-click");
}

function init(){
  languageBox.addEventListener("click",seeLanguage);
  child.addEventListener("click",childActive);
  iconHover();
  iconOut();
}
init();
