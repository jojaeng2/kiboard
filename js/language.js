const language = document.querySelector(".language");
const rightLanguage = document.querySelector(".right-language");
const select = document.querySelector(".right-language__wrap");
const languageSelect = select.querySelectorAll("li");
const languageVar = document.querySelector(".language-var");
const adult = document.querySelector(".to-adult");
const adultTop = document.querySelector(".to-adult__top");
const adultBottom = document.querySelector(".to-adult__bottom");
const rightIcon = document.querySelector(".main-box__right");
const btnSpeak = rightIcon.querySelectorAll(".button-speak"),
      btnCopy = rightIcon.querySelectorAll(".button-copy"),
      btnStar = rightIcon.querySelectorAll(".button-star"),
      btnShare = rightIcon.querySelectorAll(".button-share");


function msgOn1(){
  btnSpeak[1].classList.add("button-active")
}
function msgOut1(){
  btnSpeak[1].classList.remove("button-active");
}
function msgOn2(){
  btnCopy[1].classList.add("button-active")
}
function msgOut2(){
  btnCopy[1].classList.remove("button-active");
}
function msgOn3(){
  btnStar[1].classList.add("button-active")
}
function msgOut3(){
  btnStar[1].classList.remove("button-active");
}
function msgOn4(){
  btnShare[1].classList.add("button-active")
}
function msgOut4(){
  btnShare[1].classList.remove("button-active");
}
function iconOut(){
  btnSpeak[0].addEventListener("mouseleave",msgOut1);
  btnCopy[0].addEventListener("mouseleave",msgOut2);
  btnStar[0].addEventListener("mouseleave",msgOut3);
  btnShare[0].addEventListener("mouseleave",msgOut4);

}
function iconHover(){
  btnSpeak[0].addEventListener("mouseenter",msgOn1);
  btnCopy[0].addEventListener("mouseenter",msgOn2);
  btnStar[0].addEventListener("mouseenter",msgOn3);
  btnShare[0].addEventListener("mouseenter",msgOn4);
}



function adultActive(){
  adult.classList.toggle("adult__opacity");
  adultTop.classList.toggle("active-adult__top");
  adultBottom.classList.toggle("active-adult__bottom");
}


for (const click of languageSelect) {
  click.addEventListener("click",function(event){
  for (i = 0; i < languageSelect.length; i++){
    languageSelect[i].style.color="black";

  }
  click.style.color = "#2ed573";
  rightLanguage.classList.toggle("language-click");
  languageVar.innerText = "";
  languageVar.innerText = click.innerText;
  });
}

function seeLanguage(){
  rightLanguage.classList.toggle("language-click");
}

function init(){
  language.addEventListener("click",seeLanguage);
  adult.addEventListener("click",adultActive);
  iconHover();
  iconOut();
}
init();
