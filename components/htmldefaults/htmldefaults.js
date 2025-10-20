function initiateDefaults() {

    var defaultDiv = document.createElement("defaultDiv");
    defaultDiv.id = "defaultDiv";
    defaultDiv.class = "defaultDiv";
    defaultDiv.style = `font-family: Arial, Helvetica, sans-serif; 
                        width:10rem; border:2px solid black;
                        display: flex;`;

    var ipbox = document.createElement("input");
    ipbox.id = "ipbox";
    ipbox.id = "ipbox";
    ipbox.type = "text";
    ipbox.style = ` width: 90%;
    border: 1px solid transparent !important;
    outline: 0 !important;`;

    var clrbox = document.createElement("input");
    clrbox.id = "ipbox";
    clrbox.id = "ipbox";
    clrbox.type = "button";
    clrbox.value = "x";

    clrbox.style = `background: transparent;
    border: none;
    font-weight: 800;`;


     var lsbox = document.createElement("input");
    lsbox.id = "ipbox";
    lsbox.id = "ipbox";
    lsbox.type = "button";
    lsbox.value = "...";

    lsbox.style = `background: transparent;
    border: none;
    font-weight: 800;`;


    defaultDiv.appendChild(ipbox);
    defaultDiv.appendChild(clrbox);
    defaultDiv.appendChild(lsbox);
    document.body.append(defaultDiv);
}