status = "";

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelloaded() {
    console.log("Model Loaded In Screen 4");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
    }
}

// function preload() {
//     img = loadImage("");
// }

// function draw() {
//     image(img, 0, 0, 640, 480);
// }