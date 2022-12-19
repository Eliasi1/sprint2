'use strict'

var input = document.getElementById("changeColor");
var text = document.getElementById("text");

function addEventListeners(){
    input.addEventListener('change', function () {
        console.log("color changed to " + this.value) 
        changeColor(this.value)
        renderText()
      });
}

function onRenderText(txt) {
    console.log("rendering " + txt + " for line " + gLineIdx)
    gTextProperties[gLineIdx].text = txt
    clearCanvas()
    renderText()
}

function onChangeFontSize(diff) {
    changeFontSize(diff)
    renderText()
}

function onRemoveText() {
    if (gLineIdx) {
        gTextProperties.pop()
        gLineIdx--
    } else gTextProperties[gLineIdx].text = ''
    renderText()
    document.querySelector(".input-text").value = ''

}

function onTextAlign(alignTo) {
    textAlign(alignTo)
    renderText()
}

function onAddText() {
    if (gLineIdx) return
    gLineIdx++
    addText()
    renderText()
}

function onChangePlace() {
    changePlace()
    renderText()
}

function onColorChange(value) {
    console.log(value)
}

function onDownloadCanvas(elLink){
    downloadCanvas(elLink)
}