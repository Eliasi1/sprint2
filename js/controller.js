'use strict'

function onInit(){
    renderMemesTable()
    generateCategoryList()
}

function onRenderText(txt){
console.log("rendering " + txt + " for line " + gLineIdx)
gTextProperties[gLineIdx].text=txt
clearCanvas()
renderText()
}

function onChangeFontSize(diff) {
    changeFontSize(diff)
    renderText()
}

function onRemoveText(){
    if (gLineIdx) {
        gTextProperties.pop()
        gLineIdx -- 
    } else gTextProperties[gLineIdx].text=''
    renderText()
    document.querySelector(".input-text").value = ''

}

function onTextAlign(alignTo){
    textAlign(alignTo)
    renderText()
}

function onSelectImg(src){
    console.log(src)
    gMeme = src
    document.querySelector(".modal-canvas").style.top = '0'
    renderMeme()
}

function onCloseModal() {
    document.querySelector(".modal-canvas").style.top = '-100%'
    onRemoveText()
}

function onAddText(){
    if (gLineIdx) return
    gLineIdx ++ 
    addText()
    renderText()
}

function onChangePlace(){
    changePlace()
    renderText()
}

function onSelectCategory(el){
if (el.classList.contains("selected")) {
    changeSelectedCategory(el,false)
} else {
    changeSelectedCategory(el,true)
}
    el.classList.toggle("selected")
    renderMemesTable()

}