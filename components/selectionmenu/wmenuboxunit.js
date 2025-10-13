
var dataList = [];

function emitWMenuBoxPanel() {
    var wmenuboxpanel = document.createElement("div");
    wmenuboxpanel.id = "wmenuboxpanel";
    wmenuboxpanel.className = "wmenuboxpanel";

    var wmenubox = document.createElement("div");
    wmenubox.style.id = "wmenubox";
    wmenubox.style.className = "wmenubox";
    wmenubox.style.minWidth = "10rem";
    wmenubox.style.border = "2px solid black";
    wmenubox.style.display = "flex";

    var wmenuipbox = document.createElement("div");
    wmenuipbox.id = "wmenuipbox";
    wmenuipbox.className = "wmenuipbox";
    wmenuipbox.style.width = "90%";
    wmenuipbox.style.border = "1px solid transparent";
    wmenuipbox.style.outline = "0";

    var wmenuipdelbtn = document.createElement("div");
    wmenuipdelbtn.id = "wmenuipdelbtn";
    wmenuipdelbtn.className = "wmenuipdelbtn";
    wmenuipdelbtn.style.background = "transparent";
    wmenuipdelbtn.style.border = "none";
    wmenuipdelbtn.style.fontWeight = "800";

    var wmenuiplsbtn = document.createElement("div");
    wmenuiplsbtn.id="wmenuiplsbtn";
    wmenuiplsbtn.className="wmenuiplsbtn";
    wmenuiplsbtn.style.background = "transparent";
    wmenuiplsbtn.style.border = "none";
    wmenuiplsbtn.style.fontWeight = "800";


    var resDataBox = document.createElement("div");
    resDataBox.id="resDataBox";
    resDataBox.className="resDataBox";
    resDataBox.style.visibility = "hidden";
    resDataBox.style.height = "15rem";
    resDataBox.style.border = "1px solid black";
    resDataBox.style.overflowX = "hidden";
    resDataBox.style.overflowY = "scroll";
    
    wmenubox.appendChild(wmenuipbox);
    wmenubox.appendChild(wmenuipdelbtn);
    wmenubox.appendChild(wmenuiplsbtn);

    wmenuboxpanel.appendChild(wmenubox);
    wmenuboxpanel.appendChild(resDataBox);

    return wmenuboxpanel;

}

function initiateWMenu() {
    dataList = ["green", "dam", "yellow", "box", "jet", "van", "red", "syrup"];
}


function viewListOptions() {

    var resDataBox = renderResDataBox(1, 1);


    var wmenubox = document.getElementById("wmenubox");
    resDataBox.style.width = wmenubox.style.width + "px";


    for (var i = 0; i < dataList.length; i++) {

        var itemDiv = document.createElement("div");
        itemDiv.id = "wmenuitem" + (i + 1);
        itemDiv.textContent = dataList[i];
        itemDiv.className = "resDataItem";
        resDataBox.appendChild(itemDiv);

        itemDiv.addEventListener("click", (e) => {
            selectWMenuItem(e, i);
            //console.debug("dybox click e","")
        });

    }

}


function selectWMenuItem(e, ix) {
    var item = e.target;
    var wmenuipbox = document.getElementById("wmenuipbox");
    wmenuipbox.value = item.innerText;

    renderResDataBox(0, 1);

}

function renderResDataBox(renderVal, resetVal) {
    var wmenuboxpanel = document.getElementById("wmenuboxpanel");
    var resDataBox = document.getElementById("resDataBox");
    if (resetVal === 1) {

        if (resDataBox != undefined) {
            wmenuboxpanel.removeChild(resDataBox);
        }

        resDataBox = document.createElement("div");
        resDataBox.id = "resDataBox";
        resDataBox.className = "resDataBox";
        resDataBox.style.border = "1px solid black"
        resDataBox.style.padding = "2px";
    } else {

    }

    resDataBox.style.visibility = renderVal === 1 ? "visible" : "hidden";
    wmenuboxpanel.appendChild(resDataBox); // in div
    return resDataBox;
}


function clearIpBox() {
    var wmenuboxpanel = document.getElementById("wmenuboxpanel");

    var wmenubox = document.getElementById("wmenubox");
    var wmenuipbox = document.getElementById("wmenuipbox");
    wmenuipbox.value = "";
    var resDataBox = document.getElementById("resDataBox");
    resDataBox.style.visibility = "hidden";

}
