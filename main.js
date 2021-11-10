
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
    if(content=="Take my selfie."){
        speak();
    }
}
function speak(){
    var synth=window.speechSynthesis;
    var speech="taking your selfie in 5 seconds";
    var speakthis=new SpeechSynthesisUtterance(speech);
    synth.speak(speakthis);
    Webcam.attach(camera);
    setTimeout(function(){
    take_snapshot() ;
    save();
    },5000);
}

Webcam.set({
    width:360,
    height:240,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie-image' src='"+data_uri+"'>";
    })
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie-image").src;
    link.href=image;
    link.click();
}