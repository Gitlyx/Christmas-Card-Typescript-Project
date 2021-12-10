
const changeFrom = () => {
    let text = (document.getElementById("inputFrom") as HTMLInputElement)
        .value;
    document.getElementById("outputFrom")!.innerHTML = (`From: ${text}`);
};
const changeTo = () => {
    let text = (document.getElementById("inputTo") as HTMLInputElement)
        .value;
    document.getElementById("outputTo")!.innerHTML = (`To: ${text}`);
};
const changeDescription = () => {
    let text = (document.getElementById("inputDescription") as HTMLInputElement)
        .value;
    document.getElementById("outputDescription")!.innerHTML = text;
};
const changeImg = () => {
    var img = (document.getElementById("inputImg") as HTMLInputElement).value;
    document.getElementById("outputImg")!.setAttribute( 'src', img );

}
const changeBorder = () => {
    var color = (document.getElementById("inputColor") as HTMLInputElement).value;
    document.getElementById("xmasCard")!.className = color;
}
const changeFont = () => {
    var font = (document.getElementById("inputFont") as HTMLInputElement).value;
    document.getElementById("xmasCard")!.style.fontFamily = font;
}

