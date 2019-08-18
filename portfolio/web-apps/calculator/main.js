let currentNum = '0'
let numA = '0'
let operator
let equalButtonPressed = false 


function doMath(a, operator, b){
    if (operator === '+') return parseInt(a)+parseInt(b)
    if (operator === '-') return parseInt(a)-parseInt(b)
    if (operator === '*') return parseInt(a)*parseInt(b)
    if (operator === '/') return parseInt(a)/parseInt(b)
}

function setOperator(x){
    if (x=='+') operator ='+'
    if (x=='-') operator ='-'
    if (x=='*') operator ='*'
    if (x=='/') operator ='/'
}

//sets up a series of closures to iterate currentNum
const concatenateTwoNumbers = (x) => (y) => {
    currentNum=y+x
    if (currentNum.length != 1 && currentNum[0] == '0'){
        currentNum = currentNum.slice(1)
    }
}

const concatenateZero = concatenateTwoNumbers('0')
const concatenateOne = concatenateTwoNumbers('1')
const concatenateTwo= concatenateTwoNumbers('2')
const concatenateThree = concatenateTwoNumbers('3')
const concatenateFour = concatenateTwoNumbers('4')
const concatenateFive = concatenateTwoNumbers('5')
const concatenateSix = concatenateTwoNumbers('6')
const concatenateSeven= concatenateTwoNumbers('7')
const concatenateEight = concatenateTwoNumbers('8')
const concatenateNine = concatenateTwoNumbers('9')

//sets numA to the value of numA +-*/ currentNum... then resets currentNum to 0 
function setNumAClearCurrentNum(){
    if (numA ==='0'){
        numA = 0+parseInt(currentNum)
        currentNum = '0'
    } else{
        numA = doMath(numA, operator, currentNum)
        currentNum = '0'
    }
}

//event handlers 
//sets operator to be used 
document.querySelector('.add-num').addEventListener('click', () => {
    setOperator('+')
    setNumAClearCurrentNum()
}, false )  
document.querySelector('.subtract-num').addEventListener('click', () => {
    setOperator('-')
    setNumAClearCurrentNum()
}, false ) 
document.querySelector('.multiply-num').addEventListener('click', () => {
    //prevents dividing by zero
    if (equalButtonPressed === true || operator === '*' || operator === '/') currentNum = '1'
    setOperator('*')
    setNumAClearCurrentNum()
}, false ) 
document.querySelector('.divide-num').addEventListener('click', () => {
    if (equalButtonPressed === true || operator === '*' || operator === '/') currentNum = '1'
    setOperator('/')
    setNumAClearCurrentNum()
}, false ) 

//concatenates currentNum in string formate according to the button pressed
//then clears currentNum
document.querySelector('.number-zero').addEventListener('click', ()=> {
    concatenateZero(currentNum)
    document.querySelector('.display-screen').innerHTML = currentNum
}, false)
document.querySelector('.one').addEventListener('click', ()=> {
    concatenateOne(currentNum)
    document.querySelector('.display-screen').innerHTML = currentNum
}, false)
document.querySelector('.two').addEventListener('click', ()=> {
    concatenateTwo(currentNum)
    document.querySelector('.display-screen').innerHTML = currentNum
}, false)
document.querySelector('.three').addEventListener('click', ()=> {
    concatenateThree(currentNum)
    document.querySelector('.display-screen').innerHTML = currentNum
}, false)
document.querySelector('.four').addEventListener('click', ()=> {
    concatenateFour(currentNum)
    document.querySelector('.display-screen').innerHTML = currentNum
}, false)
document.querySelector('.five').addEventListener('click', ()=> {
    concatenateFive(currentNum)
    document.querySelector('.display-screen').innerHTML = currentNum
}, false)
document.querySelector('.six').addEventListener('click', ()=> {
    concatenateSix(currentNum)
    document.querySelector('.display-screen').innerHTML = currentNum
}, false)
document.querySelector('.seven').addEventListener('click', ()=> {
    concatenateSeven(currentNum)
    document.querySelector('.display-screen').innerHTML = currentNum
}, false)
document.querySelector('.eight').addEventListener('click', ()=> {
    concatenateEight(currentNum)
    document.querySelector('.display-screen').innerHTML = currentNum
}, false)
document.querySelector('.nine').addEventListener('click', ()=> {
    concatenateNine(currentNum)
    document.querySelector('.display-screen').innerHTML = currentNum
}, false)
document.querySelector('.equals').addEventListener('click', () => {
    setNumAClearCurrentNum()
    document.querySelector('.display-screen').innerHTML = numA
    equalButtonPressed = true 
}, false)
document.querySelector('.all-clear').addEventListener('click', ()=>{
    numA = '0'
    currentNum = '0'
    equalButtonPressed = false
    document.querySelector('.display-screen').innerHTML = '0'
}, false)