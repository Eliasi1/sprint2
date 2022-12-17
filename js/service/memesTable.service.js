'use strict'
var gMemesList = [
    { memeNum: 1, alt: ["men", "trump"] },
    { memeNum: 2, alt: ["dog"] },
    { memeNum: 3, alt: ["baby", "dog"] },
    { memeNum: 4, alt: ["cat"] },
    { memeNum: 5, alt: ["baby"] },
    { memeNum: 6, alt: ["men"] },
    { memeNum: 7, alt: ["baby"] },
    { memeNum: 8, alt: ["men"] },
    { memeNum: 9, alt: ["baby"] },
    { memeNum: 10, alt: ["men", "obama"] },
    { memeNum: 11, alt: ["men"] },
    { memeNum: 12, alt: ["men", "actor"] },
    { memeNum: 13, alt: ["men", "actor"] },
    { memeNum: 14, alt: ["men", "actor"] },
    { memeNum: 15, alt: ["men", "actor"] },
    { memeNum: 16, alt: ["men", "actor"] },
    { memeNum: 17, alt: ["men", "putin"] },
    { memeNum: 18, alt: ["anime"] },
]

var gCategories = []

var gSelectedCategory = []

function renderMemesTable() {
    var strHTML = ''
    var memeList = getMemeList()
    memeList.forEach(meme => {
        strHTML += `<img class="item" src="./img/meme-imgs(square)/${meme.memeNum}.jpg" alt="${(meme.alt).join()}" onclick="onSelectImg(this.src)"/>`
    });
    document.querySelector(".meme-table").innerHTML = strHTML

}

function getMemeList() {
    if (!gSelectedCategory.length) return gMemesList
    var memeList = gMemesList.filter(meme => meme.alt.some(item => gSelectedCategory.includes(item)))
    return memeList
}

function generateCategoryList() {
    gMemesList.forEach((meme) => {
        (meme.alt).forEach(item => {
            if (!gCategories.includes(item)) gCategories.push(item)
        }
        )
    })
    renderCategoryList()
}

function renderCategoryList() {
    var strHTML = ''
    gCategories.forEach(category =>
        strHTML += `<li><a onclick="onSelectCategory(this)">${category}</a></li>`)
    document.querySelector(".filter-keywords").innerHTML = strHTML

}

function changeSelectedCategory(el, toAdd) {
    if (toAdd) gSelectedCategory.push(el.innerText)
    else gSelectedCategory.splice(gSelectedCategory.indexOf(el.innerText), 1)


}