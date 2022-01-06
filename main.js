video="";
status="";

function setup(){
canvas=createCanvas(480,380);
canvas.center();
video=createCapture(VIDEO);
video.size(380,380);
video.hide();
}

function start(){
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
}

function modelLoaded() {
console.log("model is loaded")
status=true;
}

function draw(){
}