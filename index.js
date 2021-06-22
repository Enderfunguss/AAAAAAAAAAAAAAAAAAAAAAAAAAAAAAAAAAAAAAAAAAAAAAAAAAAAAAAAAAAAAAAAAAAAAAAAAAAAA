function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(700,100);
    
    canvas = createCanvas(300,300);
    canvas.position(800,600);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('posenet good!');
}

function gotPoses(result){
    if(result.lenght > 0){
        console.log(result);
    }
}

function draw(){

}