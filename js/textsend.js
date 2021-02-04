const textArea = document.querySelector(".textarea-language");
const translation = leftIcon.querySelector(".button-share"),
      rightTranslation = document.querySelector(".right-translation");



function textSend(){
  translation.addEventListener("click",function(event){
    rightTranslation.innerText = textArea.value;
  });
}


function init(){
  textSend();
}
init();
