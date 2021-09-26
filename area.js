var s1 = document.querySelector("#side1");
var s2 = document.querySelector("#side2");

var btn = document.querySelector("#calcArea");
var msg = document.querySelector("#areaTrain")
btn.addEventListener("click", function areaCalc() {
    hiddenMessage()
    var a = 0, b = 0, c = 0;
    a = s1.value;
    b = s2.value;


    var area = 1 / 2 * (a * b);
    finalMessage("Area is: " + area);

}

)
function hiddenMessage() {
    msg.style.display = "none";
}
function finalMessage(message) {
    msg.style.display = "block";
    msg.innerText = message;
}