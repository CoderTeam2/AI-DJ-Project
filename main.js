var music1 = "";
var music2 = "";

var rightX = 0;
var rightY = 0;

var leftX = 0;
var leftY = 0;

function preload(){
    music1 = loadSound("Hogwarts.mp3");
    music2 = loadSound("Tune.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(450,250);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video,0,0,600,500);
}
function modelLoaded(){
    console.log("PoseNet is ready to rock!");
}
function play(){
    music1.play();
    music1.setRate(1);
    music1.setVolume(1);
}

function gotPoses(results){
    if(results.length > 0){
        rightX = results[0].pose.rightWrist.x;
        rightY = results[0].pose.rightWrist.y;
    
        leftX = results[0].pose.leftWrist.x;
        leftY = results[0].pose.leftWrist.y;
    }
}
