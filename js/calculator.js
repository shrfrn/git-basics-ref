'use strict'

var num1 = 0
var num2 = 0
var operator = ''

function onNumClick(elCell) {
    if(!num1) num1 = +elCell.innerText
    else if(operator && !num2) num2 = +elCell.innerText
}

function onOperatorClick(elCell) {
    console.log(elCell.innerText)
}

function onCalc() {
    console.log('Calculating...')
}
