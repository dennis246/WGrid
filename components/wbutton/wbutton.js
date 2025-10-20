function emitWButton(infomap) {

    var wbutton = document.createElement("div");
    wbutton.id = "lnavlist";
    wbutton.className = "lnavlist";

    wbutton.id = infomap.get("id");
    wbutton.className = infomap.get("className");
    //wbutton.type = "button";
    //wbutton.value = "lnav";
    //wbutton.innerText = "lnav"

    var btnlabeltxt = infomap.get("buttonLabel");

    wbutton.style = `
    padding:5px;
    border: 1px solid black;
    vertical-align:middle;`;


    // wbutton.addEventListener("click", (e) => {
    //     //viewWdsListOptions();
    //     //loadWdsDataList();
    //     //togglelnavlistpanelbox();
    // })

    var wbuttonLabel = document.createElement("p");
    wbuttonLabel.style = `font-size:14px;margin:auto;`;
    wbuttonLabel.innerText = infomap.get("buttonLabel") != undefined ? infomap.get("buttonLabel") : infomap.get("id");

    wbutton.appendChild(wbuttonLabel);

    return wbutton;
}