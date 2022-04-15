var music1 = "";
var music2 = ""

function preload(){
    music1 = loadSound("Hogwarts.mp3");
    music2 = loadSound("Tune.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(450,250);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}