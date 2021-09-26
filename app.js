var angleA = document.querySelector("#angle1");
var angleB = document.querySelector("#angle2");
var angleC = document.querySelector("#angle3");
var valid = document.querySelector("#isTraingle");
var msg = document.querySelector("#message");
valid.addEventListener("click", function checkValidity() {
    hiddenMessage();
    // check condition
    var a = angleA.value;
    var b = angleB.value;
    var c = angleC.value;

    if (a + b <= c || a + c <= b || b + c <= a) {
        finalMessage("Nope! doesn't form a traingle");
    }
    else {
        return finalMessage("Yes it does :)");
    }
}
);
function hiddenMessage() {
    msg.style.display = "none";
}
function finalMessage(text) {
    msg.style.display = "block";
    msg.innerText = text;
}