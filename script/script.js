var chosenColor = "black";
var idCounter = 0;
var flag=true;

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
    if(flag==true){
    var x = e.clientX - document.querySelector(".my-canvas").getBoundingClientRect().x;
    var y = e.clientY - document.querySelector(".my-canvas").getBoundingClientRect().y;
    var circler = document.createElement("div");
    var idCircle = circler.setAttribute("id",`circle-${idCounter}`);
    var classCircle = circler.setAttribute("class","my-circle");
    document.getElementById("canvas-id").appendChild(circler);
    var el = document.getElementById(`circle-${idCounter}`);
    el.style.left = x+"px";
    el.style.top = y+"px";
    el.style.position = "absolute"
    el.style.background = chosenColor;
    idCounter++;
    document.querySelector(".my-canvas").addEventListener("mouseup", function(){return false;});
}}

var stopFunction = function(){
    flag=false;
}

var erase = function(){
    chosenColor = "white";
}

var save = function(){
    var savedProject = document.querySelectorAll("#canvas-id div");
    savedProject = JSON.stringify(savedProject);
    localStorage.setItem("savedDrawing",savedProject);
}

var load = function(){
    var loadProject = localStorage.getItem("savedDrawing");
    loadProject = JSON.parse(loadProject);
    var parent = document.getElementById("canvas-id");
    var childElements = document.querySelectorAll("#canvas-id div");
    for(var i = 0;i<childElements;i++){
        var child = document.querySelector("#canvas-id div");
        parent.removeChild(child);
    }
    for(var j=0;j<loadProject.length;i++){
        parent.appendChild(loadProject[i]);
    }
}

document.querySelector(".my-pallete").addEventListener("click", colorPicker);

document.querySelector(".my-canvas").addEventListener("mousedown", function(){
    flag=true;
    document.querySelector(".my-canvas").addEventListener("mousemove",drawOnCanvasDot)
});
document.querySelector(".my-canvas").addEventListener("mouseup",stopFunction);

document.querySelector("#save").addEventListener("click",save);

document.querySelector("#load").addEventListener("click",load);

