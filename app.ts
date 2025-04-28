const inputnum1 = document.querySelector("#input1") as HTMLInputElement;
const inputnum2 = document.querySelector("#input2") as HTMLInputElement;;
const subbutton = document.querySelector("button");

function addnum(num1 : number, num2 : number)
{
    return num1 + num2;
}

subbutton?.addEventListener("click", ()=>
{
    console.log(`the sum is ${addnum(+inputnum1.value, +inputnum2.value)}`);
})

