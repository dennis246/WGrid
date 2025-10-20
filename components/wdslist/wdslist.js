
var dataList = [];

function initiateWMenu() {
    dataList = ["green", "dam", "yellow", "box", "jet", "van", "red", "syrup"];
}


function viewWdsListOptions() {

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
