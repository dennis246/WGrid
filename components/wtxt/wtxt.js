
var wcontentline = "";
var wcontentArr = [];
var curKeyType;
var curKeyType2;

var viewportwidth = window.visualViewport.width;
var viewportheight = window.visualViewport.height;

var wtxtpagewidth = window.visualViewport.height;
var wtxtpageheight;
var linewidth = 200;
var wtxtContainer;


function isAlphaNumeric(x) {

    if ((x >= 48 && x <= 57) || (x >= 65 && x >= 90)) {
        return 1;
    } else {
        return 0;
    }

}


window.addEventListener("keydown", (e) => {
    //selectNextBoxByKeyType(e);

    curKeyType = e.key;
    console.debug("an ", curKeyType, " event");


    if (isAlphaNumeric(curKeyType) != 1) {

    }

    //    if(wcontent.length === )
    //     wcontent += curKeyType;
    wcontentline += curKeyType;

    if (wcontentline === linewidth) {
        wcontentArr.push(wcontentline);
        wcontentline = "";
    }

    updateWTxtCanvas();

})

function updateWTxtCanvas() {

    wtxtContainer = document.getElementById("wtxtContainer");

    for (var i = 0; i < wcontentArr.length; i++) {
        var ccntDiv = document.createElement("div");
        ccntDiv.innerHTML = wcontentArr[i];
        wtxtContainer.appendChild(ccntDiv);
    }

    if (wtxtContainer === undefined || wtxtContainer === "") {
        document.body.removeChild(wtxtContainer);
    } else {
        document.body.append(wtxtContainer);
    }



}


function initiateCanvas() {

    wtxtpagewidth = viewportwidth / 2;
    
    wtxtContainer = document.getElementById("wtxtContainer");

    wtxtContainer.style.position = "absolute";
    wtxtContainer.style.overflow = "scroll";
    wtxtContainer.style.width = wtxtpagewidth + "px";
    wtxtContainer.style.height = wtxtpageheight + "px"; 
    wtxtContainer.style.border = "1px solid black";
    wtxtContainer.style.margin = "5% 25%";
    wtxtContainer.style.justifyContent = "center";



}