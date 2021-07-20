Webcam.set({
    width: 300,
    height: 350,
    image_format: "png",
    png_ouality: 90,
    constraints: {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snap() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="lokesh" scr="'+data_uri+'"/ >';

    });

}
console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('MobileNet', modelloded);

function modelloded() {
    console.log('modelloded');


}

function check() {
    img = document.getElementById("lokesh");
    classifier.classify(img, gotResut);
}

function gotResut(error, results) {
    if (error) {
        console.error(error);

    } else {
        console.log(results);

        document.getElementById("ans").innerHTML = results[0].label;
    }


}