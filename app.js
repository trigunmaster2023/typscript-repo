var inputnum1 = document.querySelector("#input1");
var inputnum2 = document.querySelector("#input2");
;
var subbutton = document.querySelector("button");
function addnum(num1, num2) {
    return num1 + num2;
}
subbutton === null || subbutton === void 0 ? void 0 : subbutton.addEventListener("click", function () {
    console.log("the sum is ".concat(addnum(+inputnum1.value, +inputnum2.value)));
});
