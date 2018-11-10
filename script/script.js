var chosenColor = "blue";
var idCounter = 0;
var flag = true;
var brushSize = 10;

var colorPicker = function (e) {
    if (chosenColor !== "white" && e.target.className == "col-xs-6 col-xs-6-color"){
        document.querySelector(`#${chosenColor}`).style.border = "1px solid grey";
    }
    else if(chosenColor == "white") {
        document.querySelector("#eraser").style.border = "1px solid grey";
    }
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
    if (chosenColor !== "white" && e.target.className == "col-xs-6 col-xs-6-color"){    
    e.target.style.border = "2px solid black";
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
    document.querySelector(`#${chosenColor}`).style.border = "1px solid grey";
    chosenColor = "white";
}

var clear = function () {
    var childElements = document.querySelector("#canvas-id");
    while (childElements.hasChildNodes()) {
        childElements.removeChild(childElements.childNodes[0]);
    }
    document.querySelector("#my-canvas").setAttribute("style", "background-color:white");
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
            brushSize = 10
            break;
    }
}

function onetime(node, type, callback) {
    node.addEventListener(type, function (e) {
        e.target.removeEventListener(e.type, arguments.callee);
        return callback(e);
    });

}

var colorBG = function (event) {
    event.target.setAttribute("style", `background-color:${chosenColor}`);
    document.querySelector("#colorBG").style.border = "1px solid grey"
    document.querySelector("#colorBG").removeEventListener("mousedown", colorBG);
}

var colorBGEventListener = function () {
    onetime(document.querySelector(".my-canvas"), "mousedown", colorBG);
    document.querySelector("#colorBG").style.border = "2px solid black"
}

document.querySelector(".my-pallete").addEventListener("click", colorPicker);

document.querySelector(".my-canvas").addEventListener("mousedown", function () {
    flag = true;
    document.querySelector(".my-canvas").addEventListener("mousemove", drawOnCanvasDot)
});
document.querySelector(".my-canvas").addEventListener("mouseup", stopFunction);

document.querySelector("#eraser").addEventListener("click", erase);

document.querySelector("#brushSize").addEventListener("click", changeBrushSize);

document.querySelector("#clear").addEventListener("click", clear);

document.querySelector("#colorBG").addEventListener("click", colorBGEventListener);






