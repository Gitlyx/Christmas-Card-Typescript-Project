type Combinable = number | string;
type ConversionType = Combinable;
const combine = (
    input1: Combinable,
    input2: Combinable,
    output: ConversionType
) => {
    let result;
    if (
        (typeof input1 === "number" && typeof input2 === "number") ||
        output === "asNumber"
    ) {
        result = +input1 + +input2;
    } else if (typeof input1 === "string" && typeof input2 === "string") {
        result = input1.toString() + input2.toString();
    }
    return result;
};
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

const combineNumbers = combine(30, 26, "asNumber");
const combineNames = combine("Charlie", " Vo", "asText");

const add = (input1: number, input2: number) => {
    return input1 + input2;
};

const printResult = (num: number) => {
    console.log(`Result: ${num}`);
};

printResult(add(2,3))