// 'use strict'

function scrollBar() {
    var nodeList = document.querySelectorAll('.testimonials__item')
    var prevBtn = document.querySelector('.testimonials__prev')
    var nextBtn = document.querySelector('.testimonials__next')
    var barTrans = document.querySelector('.testimonials__bar__trans__large')
    var index = 0
    var barLeft = 0

    prevBtn.onclick = function (e) {
        e.preventDefault();

        nodeList[index].classList.remove('testimonials__item--active')
        if (index > 0) {
            index--
            barLeft -= 30
        } else {
            index = nodeList.length - 1
            barLeft = index * 30
        }
        nodeList[index].classList.add('testimonials__item--active')
        nodeList[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        barTrans.style.left = barLeft + 'px'
    }

    nextBtn.onclick = function (e) {
        e.preventDefault();

        nodeList[index].classList.remove('testimonials__item--active')
        if (index < nodeList.length - 1) {
            index++
            barLeft += 30
        } else {
            index = 0
            barLeft = 0
        }
        nodeList[index].classList.add('testimonials__item--active')
        nodeList[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        barTrans.style.left = barLeft + 'px'
    }
}

scrollBar()

function menu() {
    var menuBtn = document.querySelector('.menu__toggle')
    var menuEle = document.querySelector('.menu')

    menuBtn.onclick = function () {
        menuEle.classList.add('menu--active')
    }

    window.addEventListener('click', function (e) {
        if (!menuEle.contains(e.target) && !e.target.closest('.menu__toggle')) {
            menuEle.classList.remove('menu--active')
        }
    })
}


menu()