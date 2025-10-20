
var dataList = [];
var dataList2 = [];
var curwdsipboxval = "";
var renderresboxInd = 0;
//var resboxAlwaysVisibleInd = 0;

function emitWdsBoxPanel(infoMap) {

    renderresboxParam = infoMap.get("renderresboxInd");
    dataList = infoMap.get("dataList");

    if (renderresboxParam != undefined && renderresboxParam != "") {
        renderresboxInd = renderresboxParam;
    }

    var wdsboxpanel = document.createElement("div");
    wdsboxpanel.id = infoMap.get("id") != undefined ? infoMap.get("id") : "wdsboxpanel";
    wdsboxpanel.className = "wdsboxpanel";

    wdsboxpanel.style = `
     visibility: ${infoMap.get("renderresboxInd") === 1 &&
            infoMap.get("renderresboxInd") != undefined ? 'visible' : 'hidden'};`;

    var wdsbox = document.createElement("div");
    wdsbox.id = "wdsbox";
    wdsbox.className = "wdsbox";
    wdsbox.style = `
    
    border: 2px solid black;
    display: flex;vertical-align:middle;`;

    var wdsipbox = document.createElement("input");
    wdsipbox.id = infoMap.get("wdsipboxid") != undefined ? infoMap.get("wdsipboxid") : "wdsipbox";
    wdsipbox.className = infoMap.get("wdsipboxclassname") != undefined ? infoMap.get("wdsipboxclassname") : "wdsipbox";
    wdsipbox.type = "text";
    wdsipbox.value = curwdsipboxval;
    wdsipbox.placeholder = "search|select...";
    wdsipbox.style = `cursor: pointer; width: 90%;
    border: 1px solid transparent !important;
    outline: 0 !important;`;


    wdsipbox.addEventListener("keydown", (e) => {
        console.log("event listen activated ipbox filterWdsDataList")
        filterWdsDataList(e);
    });

    var wdsclrbox = document.createElement("input");
    wdsclrbox.id = infoMap.get("wdsclrbox") != undefined ? infoMap.get("wdsclrbox") : "wdsclrbox";
    wdsclrbox.className = infoMap.get("wdsclrboxclassname") != undefined ? infoMap.get("wdsclrboxclassname") : "wdsclrbox";
    wdsclrbox.type = "button";
    wdsclrbox.value = "x";

    wdsclrbox.style = `cursor: pointer;background: transparent;
    border: none;
    font-weight: 800;`;

    wdsclrbox.addEventListener("click", (e) => {
        clearIpBox(e);
    });


    var wdslsbox = document.createElement("input");
    wdslsbox.id = infoMap.get("wdslsbox") != undefined ? infoMap.get("wdslsbox") : "wdslsbox";
    wdslsbox.className = infoMap.get("wdslsboxclassname") != undefined ? infoMap.get("wdslsboxclassname") : "wdslsbox";
    wdslsbox.type = "button";
    wdslsbox.value = "...";

    wdslsbox.style = `cursor: pointer;background: transparent;
    border: none;
    font-weight: 800;`;

    wdslsbox.addEventListener("click", (e) => {

        // var lsinfoMap = new Map();
        // lsinfoMap.set("wdsipbox", wdsipbox);
        viewWdsListOptions(e);
    });

    var wdsresbox = document.createElement("div");
    wdsresbox.id = infoMap.get("wdsresbox") != undefined ? infoMap.get("wdsresbox") : "wdsresbox";
    wdsresbox.className = infoMap.get("wdsresboxclassname") != undefined ? infoMap.get("wdsresboxclassname") : "wdsresbox";

    //resboxAlwaysVisibleInd
    var resboxAlwaysVisibleInd = infoMap.get("resboxAlwaysVisibleInd");
    wdsresbox.setAttribute("resboxAlwaysVisibleInd", resboxAlwaysVisibleInd != undefined ? true : false);

    var resboxvisnv = wdsresbox.attributes.getNamedItem("resboxAlwaysVisibleInd").nodeValue;
    if (resboxvisnv) {
        wdsresbox.innerHTML = "";
        wdsresbox = addDataListItems(wdsresbox,dataList);
    }


    wdsresbox.style = `cursor: pointer;
    visibility: ${resboxAlwaysVisibleInd ? 'visible' : 'hidden'};
        width: ${infoMap.get("resBoxWidthPx")}px
    ${infoMap.get("resBoxHeight") != undefined ? "height: 15rem;" : ""} 
    border: 1px solid black;
    overflow-x: hidden;
    overflow-y: ${infoMap.get("resBoxOverflowY")};
    padding : ${infoMap.get("resBoxItemsPadding")}
    border : 1px solid black;
    `;

    wdsbox.appendChild(wdsipbox);
    wdsbox.appendChild(wdsclrbox);
    wdsbox.appendChild(wdslsbox);

    wdsboxpanel.appendChild(wdsbox);
    wdsboxpanel.appendChild(wdsresbox);

    return wdsboxpanel;

}

function loadWdsDataList() {
    dataList = ["green", "dam", "yellow", "box", "jet", "van", "red", "syrup"];
}

function updateWdsDataList(dataListParam) {
    dataList = dataListParam;
}


function viewWdsListOptions(e) {

    var wdslsboxbtn = e.target;
    var wdsboxpanel = wdslsboxbtn.parentNode.parentNode;
    var wdsipbox = wdsboxpanel.childNodes[0];
    var wdsresbox = wdsboxpanel.childNodes[1];

    if ((dataList === null || dataList.length === 0) && (wdsipbox.innerText == "" || wdsipbox.innerText === undefined)) {
        //dataList ==
        //loadWdsDataList();
    }

    console.log("viewWdsListOptions", dataList);

    resboxinfoMap = new Map();
    resboxinfoMap.set("renderVal", 1);
    resboxinfoMap.set("resetVal", 1);
    resboxinfoMap.set("resboxAlwaysVisibleInd", true);
    resboxinfoMap.set("wdsboxpanel", wdsboxpanel);

    var wdsresbox = renderwdsresbox(resboxinfoMap);

    var wdsbox = document.getElementById("wdsbox");
    wdsresbox.style.width = wdsbox.style.width + "px";

    var wdsboxpanel = wdsresbox.parentNode;
    var wdsipbox = wdsboxpanel.childNodes[0].childNodes[0];

    wdsresbox.innerHTML = "";
    wdsresbox = addDataListItems(wdsresbox);

}

function addDataListItems(wdsresbox, dataList) {

    console.log("addDataListItems for ", dataList);

    for (var i = 0; i < dataList.length; i++) {

        //if(wdsresbox.childNodes[i].id)

        var itmDiv = document.createElement("div");
        itmDiv.id = "wdsresboxitm" + (i + 1);
        itmDiv.textContent = dataList[i];
        itmDiv.className = "wdsresboxitm";
        wdsresbox.appendChild(itmDiv);

        itmDiv.addEventListener("click", (e) => {
            // itmDivInfoMap = new Map();
            // itmDivInfoMap.set('wdsitemid', itmDiv.id);
            // itmDivInfoMap.set('wdsipboxid',);
            // itmDivInfoMap.set('wdsitemix', i);
            selectwdsitm(e);
            //console.debug("dybox click e","")
        });

    }

    return wdsresbox;
}


function selectwdsitm(e) {
    var itm = e.target;
    var itmid = itm.id;

    var wdsboxpanel = itm.parentNode.parentNode;
    var wdsipbox = wdsboxpanel.childNodes[0].childNodes[0];

    //var wdsipbox = document.getElementById(infoMap.get("wdsipboxid"));
    wdsipbox.value = itm.innerText;

    let infoMap = new Map();
    infoMap.set("renderVal", 0);
    infoMap.set("resetVal", 0);
    infoMap.set("wdsboxpanel", wdsboxpanel);

    renderwdsresbox(infoMap);
}



function renderwdsresbox(infoMap) {

    var renderVal = infoMap.get('renderVal');
    var resetVal = infoMap.get('resetVal');
    var resboxAlwaysVisibleInd = infoMap.get('resboxAlwaysVisibleInd');
    var wdsboxpanel = infoMap.get('wdsboxpanel');
    var wdsresbox = wdsboxpanel.childNodes[1];
    // //function renderwdsresbox(renderVal, resetVal) {
    // var wdsboxpanel = document.getElementById("wdsboxpanel");
    // var wdsresbox = document.getElementById("wdsresbox");
    if (resetVal === 1) {

        if (wdsresbox != undefined) {
            wdsboxpanel.removeChild(wdsresbox);
        }

        // wdsresbox = document.createElement("div");
        // wdsresbox.id = "wdsresbox";
        // wdsresbox.className = "wdsresbox";
        // wdsresbox.style.border = "1px solid black"
        // wdsresbox.style.padding = "2px";
    } else {

    }

    var resboxvisnv = wdsresbox.attributes.getNamedItem("resboxAlwaysVisibleInd").nodeValue;
    if (resboxvisnv) {
        wdsresbox.style.visibility = "visible";
    } else {
        //default
        wdsresbox.style.visibility = renderVal === 1 ? "visible" : "hidden";
    }

    //wdsboxpanel.replaceChild(wdsboxpanel, wdsresbox); // in div
    wdsboxpanel.appendChild(wdsresbox);
    return wdsresbox;
}


function clearIpBox(e) {

    var wdsclrbox = e.target;
    var wdsboxpanel = wdsclrbox.parentNode.parentNode;

    //var wdsbox = wdsboxpanel
    var wdsipbox = wdsboxpanel.childNodes[0].childNodes[0];
    wdsipbox.value = "";
    var wdsresbox = wdsboxpanel.childNodes[1];

    var resboxvisnv = wdsresbox.attributes.getNamedItem("resboxAlwaysVisibleInd").nodeValue;
    if (resboxvisnv) {
        wdsresbox.style.visibility = "visible";
    } else {
        wdsresbox.style.visibility = renderresboxInd === 1 && renderresboxInd != undefined ? "visible" : "hidden";
    }
}


function filterWdsDataList(e, infoMap) {
    curKeyType = e.key;
    var wdsipbox = e.target;

    //curKeyType === "Backspace" && 
    //reset
    if (dataList2.length > 0) {
        //var dtmp = 
        dataList = dataList2;
    } else {

    }

    dataList2 = dataList;
    //var wdsipbox = document.getElementById("wdsipbox");
    dataList = [];

    for (var i = 0; i < dataList2.length; i++) {

        if (startsWith(dataList2[i], wdsipbox.value) === 1) {
            dataList.push(dataList2[i]);
        }
    }

    //let infoMap = new Map();
    //infoMap.set("curDataList",dataList);
    //infoMap.set("curDataListFilter",dataList2);
    viewWdsListOptions(e);


}
