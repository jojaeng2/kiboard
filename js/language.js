const language = document.querySelector(".language");
const rightLanguage = document.querySelector(".right-language");

function seeLanguage(){
  rightLanguage.classList.toggle("language-click");
}

function init(){
  language.addEventListener("click",seeLanguage);
}

init();
