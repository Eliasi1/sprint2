var gElCanvas
var gCtx
var gTextProperties = [{posX:'212',posY:'40',text:'hello my name is fufi',lineWidth:2, strokeStyle: 'white', fillStyle: 'black', fontSize:46, font: 'arial', textAlign: 'center'}]
var gLineIdx = 0
var gMeme = 'http://127.0.0.1:5500/img/meme-imgs(square)/1.jpg'




function renderMeme(){
    console.log("initiated")
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    drawImg()
}

function drawText(line) {
    let {posX,posY,text, lineWidth, strokeStyle, fillStyle, fontSize, font, textAlign} = line
    gCtx.lineWidth = lineWidth
    gCtx.strokeStyle = strokeStyle
    gCtx.fillStyle = fillStyle
    gCtx.font = `${fontSize}px ${font}`;
    gCtx.textAlign = textAlign
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, posX, posY) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, posX, posY) // Draws (strokes) a given text at the given (x, y) position.
}


function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}


function drawImg() {
    const elImg = new Image() // Create a new html img element
    elImg.src = gMeme // Send a network req to get that image, define the img src
    // setTimeout(() => {
    //     gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    // }, 10);
    // When the image ready draw it on the canvas
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function downloadCanvas(elLink) {
    // Gets the canvas content and convert it to base64 data URL that can be save as an image
    const data = gElCanvas.toDataURL('image/png') // Method returns a data URL containing a representation of the image in the format specified by the type parameter.
    elLink.href = data // Put it on the link
    // elLink.download = 'shuki' // Can change the name of the file
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    // Note: changing the canvas dimension this way clears the canvas
    gElCanvas.width = elContainer.offsetWidth - 20
    // Unless needed, better keep height fixed.
    // gElCanvas.height = elContainer.offsetHeight
}

function selectPoint(ev){
    const {offsetX,offsetY} = ev
    console.log(`offsetX: ${offsetX}, offsetY: ${offsetY}`)
    console.log(ev)
}

function changeFontSize(diff){
    gTextProperties[gLineIdx].fontSize += diff
}

function textAlign(alignTo){
    gTextProperties[gLineIdx].alignTo = alignTo
}


function renderText(){
    const elImg = new Image()
elImg.src = gMeme
elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    gTextProperties.forEach(line => drawText(line))
}
}

function addText(){
    gTextProperties.push(JSON.parse(JSON.stringify(gTextProperties[0])))
    gTextProperties[gLineIdx].posY = 560
}

function changePlace(){
    gTextProperties.forEach(line => line.posY = line.posY === 40 ? 560 : 40)
}

function changeColor(color){
    gTextProperties[gLineIdx].fillStyle = color;
}