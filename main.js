var nose_x = 200;
var nose_y = 100;
var Lwrist = 0;
var Rwrist = 0;
var SideOfText = 449.99;

function preload() {


}

function setup() {
    canvas = createCanvas(550, 450);
   background("grey");    
   canvas.position(750, 150);
    webcam = createCapture(VIDEO);
    webcam.size(500, 400);
    poseNet = ml5.poseNet(webcam, modelLoaded);
    poseNet.on("pose", got_results);


}
function draw() {

    background("grey");
    fill("red");
    stroke("dashed");
    textSize(SideOfText);
    text("PROJECT",nose_x, nose_y,);
    
    
}

function modelLoaded() {
    console.log("model is loaded");
}

function got_results(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;

        Lwrist = results[0].pose.leftWrist.x;
        Rwrist = results[0].pose.rightWrist.y;

        SideOfText = floor(Lwrist - Rwrist);

        document.getElementById("text_size").innerHTML="TEXT SIZE WILL BE =" + SideOfText +"px";
    }

}
