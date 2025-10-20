
var dataList = [];
var dataList2 = [];
var curlnavlistipboxval = "";
var renderlnavlistpanelbox = 0;

function emitLNavListBoxPanel(infoMap) {

    //renderLNavListPanelInd
    var lnavlistpanel = document.createElement("div");
    lnavlistpanel.id = "lnavlistpanel";
    lnavlistpanel.className = "lnavlistpanel";
    //lnavlistpanel.style.setProperty("font-family", "Arial, Helvetica, sans-serif");

    dataList = infoMap.get("wdsresdatalist");

    lnavlistpanel.style = `
    font-family: Arial, Helvetica, sans-serif,
    visibility: ${infoMap.get('renderLNavListPanelInd') === 1 ? 'visible' : 'hidden'};
    display: ${infoMap.get('renderLNavListPanelInd') === 1 ? 'block' : 'none'};
    `;

    var lnavlist = document.createElement("div");
    lnavlist.id = "lnavlist";
    lnavlist.className = "lnavlist";
    lnavlist.style = `
    visibility: ${infoMap.get('renderLNavListPanelInd') === 1 ? 'visible' : 'hidden'};
    display: ${infoMap.get('renderLNavListPanelInd') === 1 ? 'block' : 'none'};
    position:absolute;
    top:0;left:0;
    width: 250px;height:100%;
    border: 2px solid black;
    display: flex;vertical-align:middle;`;

    var wdsInfoMap = new Map();
    wdsInfoMap.set("renderresboxInd", infoMap.get("renderLNavListPanelInd"));
    wdsInfoMap.set("resBoxWidthPx", 300);

    //var lnavdataList = dataList.length > 0 ? dataList : initiatelnavlist();

    wdsInfoMap.set("wdsipboxid", "nlavlistipbox");
    wdsInfoMap.set("wdsipboxclassname", "nlavlistipbox");

    wdsInfoMap.set("wdsclrboxid", "nlavlistclrbox");
    wdsInfoMap.set("wdsclrboxclassname", "nlavlistclrbox");

    wdsInfoMap.set("wdslsboxid", "nlavlistlsbox");
    wdsInfoMap.set("wdslsboxclassname", "nlavlistlsbox");

    wdsInfoMap.set("wdsresboxid", "nlavlistresbox");
    wdsInfoMap.set("wdsresboxclassname", "nlavlistresbox");

    //wdsInfoMap.set("dataList", lnavdataList);
    dataList = initiatelnavlist();
    wdsInfoMap.set("dataList", dataList);
    wdsInfoMap.set('resboxAlwaysVisibleInd', infoMap.get('resboxAlwaysVisibleInd'));
    wdsInfoMap.set('resBoxOverflowY', "hidden");
    wdsInfoMap.set('resBoxItemsPadding', "20px");


    var wdsboxpanel = emitWdsBoxPanel(wdsInfoMap);
    var wdsipbox = wdsboxpanel.childNodes[0];
    wdsipbox.addEventListener("keydown", (e) => {
        console.log("event listen activated ipbox filterWdsDataList from lnavlist")
        filterLNavListIpBox(e);
    });

    lnavlistpanel.appendChild(wdsboxpanel);

    return lnavlistpanel;

}


function togglelnavlistpanelbox(e) {



    console.log("togglelnavlistpanelbox::");
    //renderlnavlistpanelbox = renderlnavlistpanelbox === 1 ? 0 : 1;
    var lnavlistpanel = document.getElementById("lnavlistpanel");
    lnavlistpanel.style.visibility =
        lnavlistpanel.style.visibility != undefined
            && lnavlistpanel.style.visibility === "visible" ? "hidden" : "visible";
    lnavlistpanel.style.display =
        lnavlistpanel.style.display != undefined
            && lnavlistpanel.style.display != "none" ? "none" : "block";

    wdsboxpanel = document.getElementById("wdsboxpanel");
    wdsboxpanel.style.visibility = lnavlistpanel.style.visibility;
    wdsboxpanel.style.display = lnavlistpanel.style.display;

    //makeResboxAlwaysVisible("lnavlist");

    console.log("togglelnavlistpanelbox::", lnavlistpanel.style.visibility);
}

function initiatelnavlist() {
    dataList = ["Mou3w9w39", "93dsfi390w", "389usdcj3ui 8u398uw98u ", "23987dsjbsdhb2390 983u 89", "2jbsdhb-23983298r"];

    var datarespath = "http://localhost:8990/WGrid/navlistdata.html";
    var url = URL.parse(datarespath, "html");
    // //Access-Control-Allow-Origin
    var xhr = new XMLHttpRequest();
    xhr.open("GET", datarespath, false); 
    //wrreq.setRequestHeader("Access-Control-Allow-Origin", "true");
    //xhr.responseType = "json";
    var resText;
    xhr.onload = function () {
        resText = xhr.responseText;
        //console.log(resText);
        var jsonData = JSON.parse(resText);
        console.log(new Object(jsonData).navlistitems);
        dataList = [];
        dataList = new Object(jsonData).navlistitems;
        return dataList;
    }
    xhr.send();
    return dataList;
}

async function fetchData() {

    var datarespath = "http://localhost:8990/WGrid/navlistdata.json";
    var url = URL.parse(datarespath, "html");
    var resContent;
    var resExcep;
    var response = await fetch(url);

    if (response.ok) {
        console.log(response.json);
    }

    // var resthenop = resProm.then((onfullfilled) => {
    //     resContent = onfullfilled.value;
    // }, (onrejected) => {
    //     console.log("invalid req");
    // });
    //console.log("resthenop::",resthenop.);
    console.log("URLfet::", "rescont: ", resContent, "resexcep: ", resExcep);
    return resContent;

}

function preloadLNavList() {

}


function filterLNavListIpBox(e) {
    curKeyType = e.key;
    var wdsipbox = e.target;

    if (dataList2.length > 0) {
        dataList = dataList2;
    }

    dataList2 = dataList;
    dataList = [];

    for (var i = 0; i < dataList2.length; i++) {

        if (startsWith(dataList2[i], wdsipbox.value) === 1) {
            dataList.push(dataList2[i]);
        }
    }

    updateWdsDataList(dataList);
    viewWdsListOptions(e);

}

