var maxBoxes_H = 32;
var maxBoxes_V = 32;
var defaultBoxWidth = 100;
var defaultBoxHeight = 30;
var curBuffLastBoxVal = maxBoxes_H * maxBoxes_V;
//window.KeyframeEffect
var canvasContainer;
var focusedElement;
var curKeyType;
var curKeyType2;
var curKeyType3;

var processEventsInd = 1;
var docReloadCount = 0;
var prevFuncID = "";

var floatingInfoBox;

var feIx = 0;
var nxteIx = 0;
var nxtBox;
var nxtBoxId;

var dyboxModes = ["ip_visible", "op_visible"];
var dyboxMode = "op_visible";

var hgligBoxModes = ["hidden", "default", "appending"];
var hgligBoxMode = "hidden";
var hgligBox;
var curHgligBoxWidth = defaultBoxWidth;
var curHgligBoxHeight = defaultBoxHeight;
var hgligBoxDyBoxes = [];
var hgligBoxDyBoxesPrev = [];

var selectionRange = "";


window.addEventListener("keydown", (e) => {
    //selectNextBoxByKeyType(e);

    curKeyType2 = e.key;
    console.debug("an ", curKeyType2, " event");

    if (curKeyType2 === "Control") {

    } else {

    }

})

// window.addEventListener("tab", (e) => {
//     selectNextBoxByKeyType(e);
// })


function initiateCanvas() {

    //var navlistObj = document.getElementsByClassName("privateObject");
    // var navlistObj = document.getElementById("navlistObj");
    // var baseURI = navlistObj.attributes[1].baseURI;
    //console.log("baseURI:", baseURI);

    // var jsonpath = navlistObj.attributes[1].value;
    // var jsonqpath = baseURI.substring(0, baseURI.indexOf("/components")) + jsonpath.substring(jsonpath.indexOf("/datamodel"));
    // //console.log("jsonurl:", navlistObj.attributes[1].value);
    // console.log("jsonqpath", jsonqpath);

    // if (webkitURL.canParse(jsonqpath)) {

    // }

    // console.log(jsonqpath.replace("file:///",""));
    //var pd = fetch(jsonqpath.replace("file:///"));


    //console.log("can parse ::", webkitURL.parse(jsonqpath));
    //Uint16Array.


    //console.log(document.scripts[0].dataset);
    //console.log(navlistObj.children.item);

    // var rs = new ReadableStream();
    // rs.getReader().read();

    // URL.canParse();

    // // var navlistPara = document.getElementsByClassName("navlistPara");
    // // console.log(navlistPara);
    // var pobj = navlistObj.namedItem("navlistObj");
    // console.log("pobj", navlistObj.namedItem("navlistObj").getHTML.toString);

    // var pobj2 = document.querySelectorAll("object");
    // console.log("indoc::doc", pobj2);
    // var pobj3 = new Object(pobj2); 
    // var pobj4 = Array.from(pobj3);
    // var indoc = pobj.innerHTML;
    //console.log("pobj4", pobj4[0].querySelectorAll("object"));

    // var imgB2198 = document.getElementById("imgB2198");
    // console.log(navlistObj.namedItem("navlistObj").getHTML.toString);

    //console.log(window.sessionStorage.);
    // var blob = new Blob();
    // var fr = new FileReader(blob);
    // fr.readAsText();

    //eotst
    //
    canvasContainer = document.getElementById("canvasContainer");
    importComponents();

    //var windowMaxHeight = window.visualViewport.height;
    //var windowMaxWidth = window.visualViewport.width;
    var windowMaxHeight = 1000;
    var windowMaxWidth = 3240;

    canvasContainer.className = "canvasContainer";
    canvasContainer.style.width = windowMaxWidth + "px";
    canvasContainer.style.border = "2px dotted red";

    var curTopPos = 0;
    var curLeftPos = 0;


    var ri = 1;
    for (var i = 1; i <= maxBoxes_V; i++) {

        var canvasRow = document.createElement("canvasRow");
        canvasRow.id = "cnvrow" + i;
        canvasRow.className = "canvasRow";
        //canvasRow.style.width = windowMaxWidth + "px";
        canvasRow.style.display = "flex";
        //canvasRow.style.flexGrow = "inherit";
        //canvasRow.style.flexShrink = "initial";


        for (var j = 1; j <= maxBoxes_H; j++, ri++) {

            //++ri;
            if (j > maxBoxes_H) {
                break;
            }

            //box
            var dybox = document.createElement("div");
            dybox.className = "dybox";
            //dybox.style.zIndex = "-1";
            // dybox.style.position = "relative";
            // dybox.style.width = "100px";
            // dybox.style.height = "30px";
            // dybox.style.border = "1px solid green";
            // dybox.style.top = curTopPos + "px";


            dybox.id = "dybox" + ri;
            dybox.style.cursor = "cursor";

            // dybox.addEventListener("ctrl", (e) => {
            //     //toggleDyBox(e, ri);
            //     console.debug("a ctrl down event","")
            // });

            //if (processEventsInd == 1) {

            dybox.addEventListener("focus", (e) => {
                toggleDyBox(e, ri);
                //console.debug("dybox focus e","")
            });

            dybox.addEventListener("click", (e) => {
                toggleDyBox(e, ri);
                //console.debug("dybox click e","")
            });

            //}

            // dybox.addEventListener("hover", (e) => {
            //     updateDyBoxInfo(e, ri);
            //     //console.debug("dybox click e","")
            // });

            //op
            var dyboxOpGrp = document.createElement("div");
            dyboxOpGrp.className = "opgrp";
            // dyboxOpGrp.style.position = "absolute";
            // dyboxOpGrp.style.margin = "0px";
            // //dyboxOpGrp.style.top = "0px";
            // dyboxOpGrp.style.left = "0px";
            // dyboxOpGrp.style.width = "100px";
            // dyboxOpGrp.style.height = "30px";
            // dyboxOpGrp.style.margin = "0px";
            // dyboxOpGrp.style.border = "1px solid red";
            // dyboxOpGrp.style.overflow = "hidden";
            // dyboxOpGrp.style.top = curTopPos + "px";

            dyboxOpGrp.id = "oxpgrp" + ri;

            var dyboxOpLabel = document.createElement("p");
            dyboxOpLabel.id = "oxp:p" + ri;
            dyboxOpLabel.style.userSelect = "none";
            dyboxOpLabel.style.color = "green";
            //dyboxOpLabel.value = ri + "INP";
            dyboxOpLabel.textContent = ri + "INP";
            dyboxOpLabel.style.margin = "0px";
            dyboxOpLabel.style.width = "100px";
            dyboxOpLabel.style.height = "30px";
            //dyboxOpLabel.style.zIndex = "1";




            //events
            dyboxOpGrp.addEventListener("focus", (e) => {
                boxSelectionEvent(e, ri);
            });

            dyboxOpGrp.addEventListener("click", (e) => {
                boxSelectionClickEvent(e, ri);
            });



            dyboxOpGrp.appendChild(dyboxOpLabel);
            dybox.appendChild(dyboxOpGrp);

            //ip grp
            var dyboxIpGrp = document.createElement("div");
            dyboxIpGrp.className = "ipgrp";

            dyboxIpGrp.className = "opgrp";
            // dyboxIpGrp.style.position = "absolute";
            // dyboxIpGrp.style.margin = "0px";
            // //dyboxIpGrp.style.top = "0px";
            // dyboxIpGrp.style.left = "0";
            // dyboxIpGrp.style.width = "100px";
            // dyboxIpGrp.style.height = "30px";
            // dyboxIpGrp.style.margin = "0px";
            // dyboxIpGrp.style.border = "1px solid red";
            // dyboxIpGrp.style.overflow = "hidden";
            //dyboxIpGrp.style.top = curTopPos + "px";
            dyboxIpGrp.style.background = "#egegeg";
            dyboxIpGrp.id = "ixpgrp" + ri;


            //inp
            var dyboxIpTxt = document.createElement("input");
            dyboxIpTxt.id = "ixp:ip" + ri;
            dyboxIpTxt.value = ri;

            // dyboxIpTxt.style.margin = "0px";
            dyboxIpTxt.style.width = "100px";
            dyboxIpTxt.style.height = "30px";
            dyboxIpTxt.style.zIndex = "-1";
            dyboxIpTxt.style.visibility = "hidden";
            // dyboxIpTxt.style.border = "2px solid orange";

            //dyboxIpTxt.style.top = curTopPos + "px";
            //dyboxIpTxt.innerHTML = ri;

            dyboxIpTxt.addEventListener("keydown", (e) => {
                //boxSelectionEvent(e, ri);
                selectNextBoxByKeyType(e);
            });

            // dyboxIpTxt.addEventListener("click", (e) => {
            //     boxSelectionClickEvent(e, ri);
            // });

            dyboxIpGrp.appendChild(dyboxIpTxt);
            dybox.appendChild(dyboxIpGrp);

            //dyboxF.appendChild(dybox);
            canvasRow.appendChild(dybox);
            curLeftPos += defaultBoxWidth;
        }

        //break;
        curLeftPos = 0;
        curTopPos += defaultBoxHeight;

        canvasContainer.appendChild(canvasRow);

    }

    canvasContainer.scrollIntoView(true);

    ++docReloadCount;



}

function toggleDyBox(e) {

    focusedElement = e.target;
    var cboxid = e.target.id;

    if (focusedElement === undefined) {
        console.debug("error invalid dybox selection");
        return;
    }

    if (validateDyboxFocus(0) === 0) {
        return;
    }


    if (checkPartialMatch(cboxid, ":ip") === 1) {
        return;
    }


    console.debug("input focus/click event", "id:", cboxid);
    //hgligBoxDyBoxes.push(focusedElement);

    if (curKeyType2 === "Control") {
        hgligBoxDyBoxes.push(focusedElement);
    } else {
        // if (hgligBoxDyBoxes.length > 0) {

        //     if (hgligBoxDyBoxes.length === 1 && focusedElement.id != hgligBoxDyBoxes[hgligBoxDyBoxes.length - 1].id) {
        //         hgligBoxDyBoxesPrev = hgligBoxDyBoxes;
        //         resetStylesOfPrevBoxes();
        //     }
        // }

        hgligBoxDyBoxesPrev = hgligBoxDyBoxes;
        hgligBoxDyBoxes = [];
        hgligBoxDyBoxes.push(focusedElement);

        resetStylesOfPrevBoxes();

    }

    var feBoxOxpGrp = focusedElement.childNodes[0];
    var feBoxOxpP = feBoxOxpGrp.childNodes[0];

    var feBoxIxpGrp = focusedElement.childNodes[1];
    var feBoxIxpIp = feBoxIxpGrp.childNodes[0];

    feBoxIxpGrp.style.visibility = "visible";
    feBoxIxpIp.style.visibility = "visible";

    feBoxOxpGrp.style.visibility = "hidden";
    feBoxOxpP.style.visibility = "hidden";

    // if (feBoxIxpGrp.style.visibility === "" ||
    //     feBoxIxpGrp.style.visibility === undefined ||
    //     feBoxIxpGrp.style.visibility === "hidden") {

    //     feBoxIxpGrp.style.visibility = "visible";
    //     feBoxIxpIp.style.visibility = "visible";

    //     feBoxOxpGrp.style.visibility = "hidden";
    //     feBoxOxpP.style.visibility = "hidden";
    // } else if (feBoxOxpGrp.style.visibility === "" ||
    //     feBoxOxpGrp.style.visibility === undefined ||
    //     feBoxOxpGrp.style.visibility === "hidden") {

    //     feBoxOxpGrp.style.visibility = "visible";
    //     feBoxOxpP.style.visibility = "visible";

    //     feBoxIxpGrp.style.visibility = "hidden";
    //     feBoxIxpIp.style.visibility = "hidden";
    // }

    updateDyBoxInfo(e);
    curKeyType2 = undefined;

    prevFuncID = "toggleDyBox(e)";

}


function validateDyboxFocus(fcount) {

    if (fcount === undefined) {
        fcount = 0;
    }

    if (startsWith(focusedElement.id, "dyb") === 0 || startsWith(focusedElement.id, "dyb") === 0) {

        if (focusedElement.parentNode === undefined || fcount > 2) {
            return 0;
        }

        focusedElement = focusedElement.parentNode;
        validateDyboxFocus(++fcount);
    } else {
        return 1;
    }

}

// function validateFocusedElement0() {

//     if (startsWith(focusedElement.id, "dyb") === 0 || startsWith(focusedElement.id, "dyb") === 0) {
//         focusedElement = focusedElement.parentNode;
//     } else {
//         return 0;
//     }

// }

function resetStylesOfPrevBoxes() {

    console.debug("invk resetStylesOfPrevBoxes");
    for (var i = 0; i < hgligBoxDyBoxesPrev.length; i++) {
        var fe = hgligBoxDyBoxesPrev[i];

        if (fe === undefined) {
            return;
        }

        if (startsWith(fe.id, "oxp") === 1 || startsWith(fe.id, "ixp") === 1) {
            fe = hgligBoxDyBoxesPrev[i].parentNode;
        }

        var feBoxOxpGrp = fe.childNodes[0];
        var feBoxOxpP = feBoxOxpGrp.childNodes[0];

        var feBoxIxpGrp = fe.childNodes[1];
        var feBoxIxpIp = feBoxIxpGrp.childNodes[0];

        feBoxOxpGrp.style.visibility = "visible";
        feBoxOxpP.style.visibility = "visible";

        feBoxIxpGrp.style.visibility = "hidden";
        feBoxIxpIp.style.visibility = "hidden";

    }

    //hgligBoxDyBoxesPrev



}

function updateDyBoxInfo(e) {

    //console.debug("updateDyBoxInfo", "hover event ");

    focusedElement = e.target;
    var cboxid = e.target.id;

    validateDyboxFocus(0);

    if (floatingInfoBox != undefined && floatingInfoBox != "") {
        canvasContainer.removeChild(floatingInfoBox);
    }

    var InfoBoxPanel = document.createElement("div");
    var rowInfoPara = document.createElement("p");

    var rmp = focusedElement.id.substring(5);
    var rmplen = rmp.length;

    var atrow = rmp <= maxBoxes_H ? 1 : parseInt((rmp / maxBoxes_H) + (rmp > maxBoxes_H ? 1 : 0));
    //var atcolumn = rmp - (rmp.substring(0, 1) * Math.pow(10, rmplen - 1));

    var atcolumn = rmp - (maxBoxes_H * (atrow - 1))

    var atinfotext = "R" + atrow + ":C" + atcolumn;

    atinfotext += "\n" + hgligBoxDyBoxes.length;


    rowInfoPara.value = atinfotext

    InfoBoxPanel.innerHTML = rowInfoPara;

    //var columnInfo = document.createElement("div");

    floatingInfoBox = document.createElement("div");
    floatingInfoBox.className = "floatingInfoBox";
    floatingInfoBox.style.padding = "5px";
    floatingInfoBox.innerHTML = atinfotext;
    floatingInfoBox.style.width = "180px";
    floatingInfoBox.style.height = "40px";
    floatingInfoBox.style.border = "2px solid black";
    floatingInfoBox.style.borderRadius = "5px";
    floatingInfoBox.style.background = "#efefef";
    floatingInfoBox.style.opacity = "5";


    // floatingInfoBox.style.top = (focusedElement.style.top+20) + "px";
    // floatingInfoBox.style.left = (focusedElement.style.left+20) + "px";

    floatingInfoBox.style.top = 30 + "px";
    floatingInfoBox.style.left = 40 + "px";
    floatingInfoBox.style.position = "fixed";
    floatingInfoBox.style.zIndex = "1";


    floatingInfoBox.style.transition = "2s fade in";

    canvasContainer.appendChild(floatingInfoBox);

    //canvasContainer.appendChild();
}


function boxSelectionClickEvent(e) {
    focusedElement = e.target;
    var cboxid = e.target.id;

    if (cboxid.startsWith("oxp") ||
        cboxid.startsWith("ixp")
    ) {
        focusedElement = focusedElement.parentNode;
    }


    console.debug("input click event", "id:", cboxid);

    //ip disp
    toggleDyBox(e);

    // for (var i = 0; i < hgligBoxDyBoxes.length; i++) {
    //    hgligBoxDyBoxes.pop();
    //}
}

function boxSelectionEvent(e) {

    focusedElement = e.target;
    var cboxid = e.target.id;

    if (cboxid.startsWith("oxp") ||
        cboxid.startsWith("ixp")
    ) {
        focusedElement = focusedElement.parentNode;
    }

    console.debug("input focus event", "id:", cboxid);

    if (hgligBoxMode === "hidden") {
        hgligBox = document.createElement("div");
        hgligBox.style.borderColor = "blue;"
        hgligBox.style.borderWidth = "2px";
        //hgligBox.style.background = "red";
        hgligBox.style.color = "black";
        hgligBox.style.width = defaultBoxWidth + "px";
        hgligBox.style.height = defaultBoxHeight + "px";
        hgligBox.style.top = focusedElement.style.top;
        hgligBox.style.left = focusedElement.style.left;
        hgligBox.style.position = "absolute";
        hgligBox.style.padding = "0px;";
        hgligBoxMode = "default";

        hgligBoxDyBoxes.push(focusedElement);

        //canvasDiv.appendChild(hgligBox);
    } else if (hgligBoxMode === "appending") {

    }
    //document.appendChild(hgligBox);
}

function applyHgLigDefaultStyle(boxehglig) {

    boxehglig.style.border = "2px dotted blue;"
    boxehglig.style.background = "transparent";
    //boxehglig.style.color = "black";
    boxehglig.style.width = defaultBoxWidth + "px";
    boxehglig.style.height = defaultBoxHeight + "px";
    boxehglig.style.top = focusedElement.style.top;
    boxehglig.style.left = focusedElement.style.left;
    boxehglig.style.position = "absolute";
    boxehglig.style.padding = "0px;";
    hgligBoxMode = "default";
    return boxehglig;
}

function resetHgLigStyleOfBox() {
    focusedElement.style.border = "1px solid black;"
    focusedElement.style.background = "yellow";
}




function canvasInnerFocusEvent() {

}

function selectNextBoxByKeyType(e) {


    curKeyType = e.key;
    if (focusedElement != null) {
        console.debug("movingfocusfrom:", focusedElement.id, "etype", curKeyType);
    }

    if (!curKeyType.startsWith("Arrow") && curKeyType.startsWith("Escape")) {
        return;
    }

    console.debug("hgligBoxDyBoxes", hgligBoxDyBoxes.length);

    feIx = parseInt(focusedElement.id.substring(3));
    //var nxteIx = 0;
    //var nxtBox;
    //var nxtBoxId;
    if (feIx < curBuffLastBoxVal) {
        if (curKeyType === "ArrowDown") {

            nxteIx = feIx + maxBoxes_H;
            nxtBoxId = "ixp" + nxteIx;
            nxtBox = document.getElementById(nxtBoxId);
            nxtBox = applyHgLigDefaultStyle(nxtBox);
            hgligBoxDyBoxes.push(nxtBox);
            focusedElement = nxtBox;

            // var prevVerOfNxtBox = canvasDiv.getElementsById(nxtBoxId)[0];
            // nxtBox.insertAfter(prevVerOfNxtBox);
            // canvasDiv.removeChild(prevVerOfNxtBox);

        } else if (curKeyType === "ArrowUp") {

            nxteIx = feIx - maxBoxes_H;

            if (hgligBoxDyBoxes.length > 1) {
                hgligBoxDyBoxes.pop(feIx);
                //canvasDiv.remove(hgligBoxDyBoxes[feIx]);
                //focusedElement.style 
                resetHgLigStyleOfBox();
                hgligBoxDyBoxes.pop(feIx);
            }

        } else if (curKeyType === "ArrowRight") {

            if (feIx % maxBoxes_H === 0) {
                nxteIx = feIx;
            } else {
                nxteIx = feIx + 1;
                var nxtBoxId = "ixp" + nxteIx;
                nxtBox = document.getElementById(nxtBoxId);
                nxtBox = applyHgLigDefaultStyle(nxtBox);
                hgligBoxDyBoxes.push(nxtBox);
                focusedElement = nxtBox;
            }


        } else if (curKeyType === "ArrowLeft") {

        }

    }
}


// function importData(){

// }

function importComponents() {

    let navBtnInfoMap = new Map();
    navBtnInfoMap.set('id', 'lnavlistpanelAccessBtn');
    navBtnInfoMap.set('className', 'lnavlistpanelAccessBtn');
    navBtnInfoMap.set('buttonLabel', 'LNav');

    var wbutton = emitWButton(navBtnInfoMap);
    wbutton.addEventListener("click", (e) => {
        //viewWdsListOptions();
        //loadWdsDataList();
        togglelnavlistpanelbox(e);
    })

    canvasContainer.appendChild(wbutton);

    let lnavlistInfoMap = new Map();
    lnavlistInfoMap.set('renderLNavListPanelInd', 0);
    lnavlistInfoMap.set('wdsresdatalist', dataList);
    lnavlistInfoMap.set('resboxAlwaysVisibleInd', true);
    canvasContainer.appendChild(emitLNavListBoxPanel(lnavlistInfoMap));

    var wdsInfoMap = new Map();
    wdsInfoMap.set("id", "wdsbox92");
    wdsInfoMap.set("renderresboxInd", 0);
    //canvasContainer.appendChild(emitWdsBoxPanel(wdsInfoMap));
}



// OLD
// function dyboxIpDefaultStyle() {
//     dyboxIp.id = "ixp" + ri;
//     dyboxIp.value = ri;
//     dyboxIp.style.width = (defaultBoxWidth - 0) + "px";
//     dyboxIp.style.height = (defaultBoxHeight - 0) + "px";
//     //dyboxIp.innerHTML = i * j; //tab
//     dyboxIp.innerHTML = ri;
//     dyboxIp.style.top = curTopPos + "px";
//     dyboxIp.style.left = curLeftPos + "px";
//     return dyboxIp
// }

// console.debug("lCt:", Array.from('Iterable')[0].toLowerCase());
// console.debug("tstW:", startsWith("systematic", "system"));
// console.debug("testParMtch:", checkPartialMatch("systematic", "mat"));


// util
function startsWith0(content, sequence) {

    var mainArr = Array.from(content);
    var seqArr = Array.from(sequence);
    var matchedLen = 0;

    for (var j = 0; j < seqArr.length; j++) {

        if (j === mainArr.length) {
            break;
        }

        if (mainArr[j] === seqArr[j]) {
            ++matchedLen;
        } else if (j > 0 && matchedLen === 0) {
            break;
        }

        if (matchedLen >= seqArr.length) {
            return 1;
        }
    }

    if (matchedLen >= seqArr.length) {
        return 1;
    }


    return 0;


}




function checkPartialMatch0(firstArr, secondArr, ignoreCase) {
    if (ignoreCase != 1 && ignoreCase != 0) {
        ignoreCase = 0;
    }

    var interArr = [];
    if (secondArr.length > firstArr.length) {
        interArr = firstArr;
        firstArr = secondArr;
        secondArr = interArr;
    }

    //utilInfo = new LinkedHashMap<>();
    var matchedStartPt = -1;
    var matchedEndPt = -1;
    var ri = 0;
    var ip = 0;
    var hasCount = 0;
    var eof = 0;
    if (firstArr.length >= secondArr.length) {
        for (var i = 0; i < secondArr.length; i++, ri++) {

            for (var j = 0; j < firstArr.length; j++) {

                if ((ignoreCase === 1
                    && secondArr[i].toLowerCase() === firstArr[j].toLowerCase())
                    ||
                    (ignoreCase === 0 && secondArr[i] === firstArr[j])) {
                    if (matchedStartPt === -1) {
                        matchedStartPt = j;
                    }

                    hasCount += 1;
                    i++;
                    ip++;

                    if (hasCount === secondArr.length) {
                        matchedEndPt = i;
                        eof = 1;
                        break;
                    }

                    if (i === secondArr.length) {
                        break;
                    }

                } else {
                    matchedStartPt = -1;
                    matchedEndPt = -1;
                    hasCount = 0;
                    i = i - ip;
                    ip = 0;
                }

            }

            if (eof === 1) {
                break;
            }

        }

        // utilInfo.put("matchedStartPt", matchedStartPt);
        // utilInfo.put("matchedEndPt", matchedEndPt);
        // utilInfo.put("matchedCount", hasCount);
        // utilInfo.put("runningIndex", ri);

        if (hasCount === secondArr.length) {
            return 1;
        } else {
            return 0;
        }

    } else {
        throw new Exception("unimpl method for haschars");
    }

}



