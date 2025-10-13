
var mainboxWidthInPx = 500;
var mainboxHeightInPx = 300;
var minUnitDistWidthInPx = 100;
var minUnitDistHeightInPx = 16;


var mainBoxDiv;
var focusedElement;
var curKeyType;
var curKeyType2;
var curKeyType3;


function inputValidation() {

}


function setLayout() {

    console.log("initiateLayout::");
    mainBoxDiv = document.createElement("div");
    mainBoxDiv.style.width = mainboxWidthInPx + "px";
    mainBoxDiv.style.height = mainboxHeightInPx + "px";
    mainBoxDiv.style.border = "2px dotted red";

    var curTopPos = 0;
    var curLeftPos = 0;

    var ipNumSec = document.getElementById("ipNumSec");

    console.log("ipNumSec=", ipNumSec.value);
    var numdivs = ipNumSec.value;

    var innerBoxL = 0;
    var innerBoxB = 0;
    var mainBoxLXB = mainboxWidthInPx * mainboxHeightInPx;
    var unitLXBFI = mainBoxLXB / numdivs;
    console.log("mainlxb", mainBoxLXB, "unitlxb:", unitLXBFI);

    var LXBType = "LXB0";
    if (mainboxWidthInPx > mainboxHeightInPx) {
        LXBType = "LXB1"
    } else if (mainboxWidthInPx < mainboxHeightInPx) {
        LXBType = "LXB2"
    }

    if (LXBType === "LXB1") {

    }

    var mainBoxLXBUnSet = mainBoxLXB;

    curTopPos = 0;
    curLeftPos = 0;
    grWidth = 0;

    var curDiv;
    var curDivWidth = 0;
    var curDivHeight = 0;

    curDivWidth


    for (var i = 0; i < numdivs; i++) {

        curDiv = document.createElement("div");

        //innerContentDiv.style.margin = "0px";
        curDiv.style.top = curTopPos + "px";
        curDiv.style.left = curLeftPos + "px";

        curDiv.style.width = "px";
        curDiv.style.height = "px";

        mainBoxDiv.appendChild(innerContentDiv);

        // grWidth += curDivWidth;
        // if(grWidth > mainboxWidthInPx){
        //    curTopPos 
        // }

    }


    document.body.append(mainBoxDiv);


}



// var ipbox = document.createElement("input");
// ipbox.type = "text";
// ipbox.value = 222;
// ipbox.innerHTML = 541;
// ipbox.innerText = "2398HSu";
// console.log("ipbox", ipbox);