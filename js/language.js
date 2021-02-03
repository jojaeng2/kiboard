const language = document.querySelector(".language");
const rightLanguage = document.querySelector(".right-language");
const select = document.querySelector(".right-language__wrap");
const languageSelect = select.querySelectorAll("li");
const languageVar = document.querySelector(".language-var");


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
}
init();
