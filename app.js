 var translatebtn = document.querySelector("#btn-translate");
 var inputText = document.querySelector("#input-area");
 var outputText = document.querySelector("#output-area");
 var serverURL = 	"https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandling(error){
    console.log("error occured",error);
    alert("try after sometime!")
}
function clickHandler(){
  var inText = inputText.value;
 

 fetch(getTranslationURL(inText))
 .then(response => response.json())
 .then(json => {
     var translatedtext = json.contents.translated;
     outputText.innerText = translatedtext;
 })
 .catch(errorHandling)
};
 translatebtn.addEventListener("click",clickHandler)