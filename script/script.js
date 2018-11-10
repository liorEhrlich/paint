var chosenColor = "black";
var idCounter = 0;
var flag = true;
var brushSize = 10;

var colorPicker = function (e) {
    switch (e.target.id) {
        case "red":
            chosenColor = "red"
            break;
        case "blue":
            chosenColor = "blue"
            break;
        case "yellow":
            chosenColor = "yellow"
            break;
        case "green":
            chosenColor = "green"
            break;
        case "purple":
            chosenColor = "purple"
            break;
        case "pink":
            chosenColor = "pink"
            break;
        case "orange":
            chosenColor = "orange"
            break;
        case "brown":
            chosenColor = "brown"
            break;
    }
}

var drawOnCanvasDot = function (e) {
    if (flag == true) {
        var x = e.clientX - document.querySelector(".my-canvas").getBoundingClientRect().x;
        var y = e.clientY - document.querySelector(".my-canvas").getBoundingClientRect().y;
        var circler = document.createElement("div");
        var idCircle = circler.setAttribute("id", `circle-${idCounter}`);
        var classCircle = circler.setAttribute("class", "my-circle");
        document.getElementById("canvas-id").appendChild(circler);
        var el = document.getElementById(`circle-${idCounter}`);
        el.style.left = x + "px";
        el.style.top = y + "px";
        el.style.width = brushSize + "px";
        el.style.height = brushSize + "px";
        el.style.position = "absolute"
        el.style.background = chosenColor;
        idCounter++;
        document.querySelector(".my-canvas").addEventListener("mouseup", function () { return false; });
    }
}

var stopFunction = function () {
    flag = false;
}

var erase = function () {
    chosenColor = "white";
}

var clear = function () {
    var childElements = document.querySelector("#canvas-id");
    while (childElements.hasChildNodes()) {
        childElements.removeChild(childElements.childNodes[0]);
    }
}

var changeBrushSize = function () {
    switch (brushSize) {
        case 10:
            brushSize = 20
            break;
        case 20:
            brushSize = 5
            break;
        case 5:
            brushSize=10
            break;
    }
}

document.querySelector(".my-pallete").addEventListener("click", colorPicker);

document.querySelector(".my-canvas").addEventListener("mousedown", function () {
    flag = true;
    document.querySelector(".my-canvas").addEventListener("mousemove", drawOnCanvasDot)
});
document.querySelector(".my-canvas").addEventListener("mouseup", stopFunction);

document.querySelector("#eraser").addEventListener("click", erase);

document.querySelector("#clear").addEventListener("click", clear);

document.querySelector("#brushSize").addEventListener("click", changeBrushSize);


