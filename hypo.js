var baseValue = document.querySelector("#hyp1");
var heightValue = document.querySelector("#hyp2");
var btn = document.querySelector("#calcTrain");
var msg = document.querySelector("#calc");
btn.addEventListener("click", function lengthhyp() {
    hiddenMessage();
    var b = baseValue.value;
    var h = heightValue.value;
    var lh = Math.sqrt((b * b) + (h * h));
    finalMessage("The length of hypotenuse is: " + lh);

})
function hiddenMessage() {
    msg.style.display = "none";
}
function finalMessage(message) {
    msg.style.display = "block";
    msg.innerText = message;
}