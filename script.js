
const textArea = document.getElementById("textArea");
const totalChar = document.getElementById("total-Char");
const remainingChar=document.getElementById("remaining-Char")

textArea.addEventListener("keyup", () => { 
    updateCounter();
});
updateCounter()

function updateCounter(){

    totalChar.innerText = textArea.value.length;

    remainingChar.innerText=textArea.getAttribute("maxlength")-textArea.value.length;

}
