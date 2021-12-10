"use strict";
const changeFrom = () => {
    let text = document.getElementById("inputFrom")
        .value;
    document.getElementById("outputFrom").innerHTML = (`From: ${text}`);
};
const changeTo = () => {
    let text = document.getElementById("inputTo")
        .value;
    document.getElementById("outputTo").innerHTML = (`To: ${text}`);
};
const changeDescription = () => {
    let text = document.getElementById("inputDescription")
        .value;
    document.getElementById("outputDescription").innerHTML = text;
};
const changeImg = () => {
    var img = document.getElementById("inputImg").value;
    document.getElementById("outputImg").setAttribute('src', img);
};
const changeBorder = () => {
    var color = document.getElementById("inputColor").value;
    document.getElementById("xmasCard").className = color;
};
const changeFont = () => {
    var font = document.getElementById("inputFont").value;
    document.getElementById("xmasCard").style.fontFamily = font;
};
