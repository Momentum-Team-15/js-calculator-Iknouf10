let buttons = document.querySelectorAll(".button");
let result = "";
let display = document.querySelector(".display");
let equalsButton = document.getElementById("equal");
let clearButton = document.getElementById("clear");

for (let button of buttons) {
    button.addEventListener("click", function (event) {
        result += event.target.textContent;
        display.textContent = result;
    });
}
equalsButton.addEventListener("click", function () {
    const calcresult = eval(result);
    display.textContent = calcresult;
});

clearButton.addEventListener("click", function () {
    display.textContent = "";
    result = "";
});