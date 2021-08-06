var PredictionUnos;
var PredictionDos;

Webcam.set({
    width: 340,
    height: 290,
    image_format: 'png',
    png_quality: 95
});

CamRef = document.getElementById("JustMyCam");

Webcam.attach(CamRef);

function ClickMe(){
    Webcam.snap(function(data_uri){
document.getElementById("Resultados").innerHTML = "<img id='PosCap' src='" + data_uri + "'>"
    })
}

var Classy = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5LTeBAGB2/model.json", modelLoaded);

function modelLoaded(){
    console.log("M-O-D-E-L---L-O-A-D-E-D");
}

function SaveYourEars(){
    var SynthRef = window.speechSynthesis;
    var SpeechPt1 = "The First Prediction Is " + PredictionUnos;
    var SpeechPt2 = "And Prediction Two Is " + PredictionDos;
    var utterThis = new SpeechSynthesisUtterance(SpeechPt1 + SpeechPt2);
    SynthRef.speak(utterThis);
}

function CheckMe(){
    var SavedImg = document.getElementById("PosCap");
    Classy.classify(SavedImg, YaGathUm);

}
function YaGathUm(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        
document.getElementById("result_emotion_name").innerHTML = results[0].label;
document.getElementById("result_emotion_name2").innerHTML = results[1].label;

PredictionUnos = results[0].label;
PredictionDos = results[1].label;

SaveYourEars();

if(PredictionUnos == "Happy"){
    document.getElementById("result_emoji").innerHTML = "😁";
}
else if(PredictionUnos == "Sad"){
    document.getElementById("result_emoji").innerHTML = "😢";
}
else if(PredictionUnos == "Angry"){
    document.getElementById("result_emoji").innerHTML = "😡";
}
if(PredictionDos == "Happy"){
    document.getElementById("result_emoji2").innerHTML = "😁";
}
else if(PredictionDos == "Sad"){
    document.getElementById("result_emoji2").innerHTML = "😢";
}
else if(PredictionDos == "Angry"){
    document.getElementById("result_emoji2").innerHTML = "😡";
}

    }
}
