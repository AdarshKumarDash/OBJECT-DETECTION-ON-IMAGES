status = "";
object = [];

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
        object = result;
    }
}

function preload() {
    img = loadImage("image4.jpg");
}

function draw() {
    image(img, 0, 0, 640, 480);
    if (status != "") {
        for (i = 0; i < object.length; i++) {
            percent = floor(object[i].confidence*100);
            fill("red");
            text(object[i].label + " " + percent + "%", object[i].x, object[i].y);
            textSize(20);
            noFill();
            width = object[i].width;
            height = object[i].height;
            rect(object[i].x, object[i].y, width, height);
            document.getElementById("status").innerHTML = "Objects Detected";
        }
    }
}