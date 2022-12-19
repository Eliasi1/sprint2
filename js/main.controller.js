'use strict'

function onInit() {
    renderMemesTable()
    generateCategoryList()
    addEventListeners()
}


function onSelectImg(src) {
    console.log(src)
    gMeme = src
    document.querySelector(".modal-canvas").style.top = '0'
    renderMeme()
}

function onCloseModal() {
    document.querySelector(".modal-canvas").style.top = '-100%'
    onRemoveText()
}


function onSelectCategory(el) {
    if (el.classList.contains("selected")) {
        changeSelectedCategory(el, false)
    } else {
        changeSelectedCategory(el, true)
    }
    el.classList.toggle("selected")
    renderMemesTable()
}

function onSearchFilter(value) {
    var filter, ul, li, txtValue, i;
    filter = value.toUpperCase();
    ul = document.querySelector(".meme-table");
    li = ul.querySelectorAll("img");
    for (i = 0; i < li.length; i++) {
        txtValue = li[i].alt;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}