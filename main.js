var speechRecognition=window.webkitSpeechRecognition;
var recognition= new speechRecognition();
function start(){
    document.getElementById("textarea").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);
    content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textarea").innerHTML=content;
}