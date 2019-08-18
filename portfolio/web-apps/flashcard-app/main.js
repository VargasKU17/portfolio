//global variables that use boolean values for selecting vocab quiz size 
let fiveWordsStatus = false
let tenWordsStatus = false
let twentyFiveWordsStatus = false
let fiftyWordsStatus = false
let allWordsStatus = false 
//creates and destoys a copy of an array, then randomizes order of the copy
function equivalentExchangeRandomize(array){
  let newArray = []
  let copy = array.slice()
  for (let i = copy.length; 0 < copy.length; i--)
    newArray.push(copy.splice(Math.floor(Math.random()*copy.length),1))
  return newArray
}
// takes the index of any inputed array and turns the indexes into array elements
const indexNumToArray = (arrayToBeOrdNum) => arrayToBeOrdNum.map((x)=>arrayToBeOrdNum.indexOf(x));
//similar to indexNumToArray, but starts from 1, more useful for iteration
const arrayElementCounter = (arrayToCount) => arrayToCount.map((x)=> arrayToCount.indexOf(x)+1);
let quizWordstoNumbers = indexNumToArray(words);
let randomizeIndexArray = equivalentExchangeRandomize(quizWordstoNumbers);
//takes any array of numbers and uses the numbers as the indexes for the target array's elements of the same index
const useAlteredIndexForTargetArray = (targetArray, indexes) => indexes.map(indexes => targetArray[indexes]);
let randomQuizwords = useAlteredIndexForTargetArray(words, randomizeIndexArray);
//makes it possible to only use first X elements from an array... if the first arg is undefined it slices all
const firstFewFromAnArray = (yourAmount, yourArray) => yourArray.slice(0,yourAmount);
let chinese = randomQuizwords.map((x)=> x.Chinese)
let pinyin = randomQuizwords.map((x)=> x.Pinyin)
let english = randomQuizwords.map((x)=> x.English)
//general function for interating through an array by event with a final value of an empty string
function iterateByEvent(arrayIt){
  let x
  let tempValue = [];
  return function(){
    for (let i = 0; i <= tempValue.length; i++)
      x = arrayIt[tempValue.length];
    tempValue.length < arrayIt.length ? tempValue.push("hi") : x= "";
    return x;
  }
}
//SIDE-EFFECTS START HERE
//will make an entire class visible or hidden
function hideShowByClassName(className, visibleOrHiddenString){
  for (let i = 0; i < document.getElementsByClassName(className).length; i++)
    document.getElementsByClassName(className)[i].style.visibility = visibleOrHiddenString;
}
//the below function changes the grid layout and makes the flashcard app presentable
function runFlashcardApp (testArray){
    let flashcard = document.querySelector(".flashcard");
    flashcard.style.gridTemplateColumns = "5em"
    //flashcard.style.gridTemplateAreas = '"five begin twentyfive fifty all-words . "". .ten tally. ."". . correct wrong . ."". . side-a side-a . ."". . side-b-one side-b-one . ." ". . side-b-two side-b-two . . "';
    flashcard.style.gridTemplateAreas = '"twentyfive begin fifty all-words"". ten tally five"". correct wrong ."". side-a side-a ."". side-b-one side-b-one ." ". side-b-two side-b-two ."';
    document.querySelector('.side-b-one').style.fontSize = "14px"
    document.querySelector('.side-b-two').style.fontSize = "14px"
    let begin = document.querySelector(".begin");
    let restart = () => location.reload(true);
    begin.innerHTML = "restart";
    begin.addEventListener("click",restart)
    document.querySelector(".tally").style.visibility = "visible";
    document.querySelector(".side-a").style.visibility = "visible";
    for (let i = 0; i < document.getElementsByClassName("hide").length; i++)
      document.getElementsByClassName("hide")[i].style.visibility = "hidden";
  }
//you need to write a function that undoes this
//counts the numbers in the largest possible array
let maxWordCounter = arrayElementCounter(randomQuizwords)
let tallyCorrect = iterateByEvent(maxWordCounter)
let tallyWrong = iterateByEvent(maxWordCounter)
let tallyClicks = iterateByEvent(maxWordCounter)
let aSideArrayItFive = iterateByEvent(firstFewFromAnArray(5, chinese))
let bSideOneItFive = iterateByEvent(firstFewFromAnArray(5,pinyin))
let bSideTwoItFive = iterateByEvent(firstFewFromAnArray(5,english))
let aSideArrayItTen = iterateByEvent(firstFewFromAnArray(10, chinese))
let bSideOneItTen = iterateByEvent(firstFewFromAnArray(10,pinyin))
let bSideTwoItTen = iterateByEvent(firstFewFromAnArray(10,english))
let aSideArrayItTwentyFive = iterateByEvent(firstFewFromAnArray(25, chinese))
let bSideOneItTwentyFive = iterateByEvent(firstFewFromAnArray(25,pinyin))
let bSideTwoItTwentyFive = iterateByEvent(firstFewFromAnArray(25,english))
let aSideArrayItFifty = iterateByEvent(firstFewFromAnArray(50, chinese))
let bSideOneItFifty = iterateByEvent(firstFewFromAnArray(50,pinyin))
let bSideTwoItFifty = iterateByEvent(firstFewFromAnArray(50,english))
let aSideArrayItAll = iterateByEvent(firstFewFromAnArray(randomQuizwords.length, chinese))
let bSideOneItAll = iterateByEvent(firstFewFromAnArray(randomQuizwords.length,pinyin))
let bSideTwoItAll = iterateByEvent(firstFewFromAnArray(randomQuizwords.length,english))

let aSideText = (x) => {
  document.querySelector(".side-a").innerHTML = x()
  if (document.querySelector(".side-a").innerHTML==="") document.querySelector(".side-a").style.visibility = "hidden";
}
let bSideOneText = (x) => document.querySelector(".side-b-one").innerHTML = x();
let bSideTwoText = (x)  => document.querySelector(".side-b-two").innerHTML = x();

function nextWord(intA, intB, intC){
  aSideText(intA)
  bSideOneText(intB)
  bSideTwoText(intC)
}
//the event handlers for presenting both the flashcard layout and providing card limits
document.querySelector(".five").addEventListener("click", () => fiveWordsStatus = true)
document.querySelector(".five").addEventListener("click", ()=> {nextWord(aSideArrayItFive, bSideOneItFive, bSideTwoItFive)},false)
document.querySelector(".five").addEventListener("click", () => {runFlashcardApp(randomQuizwords)},false)

document.querySelector(".ten").addEventListener("click", () => tenWordsStatus = true)
document.querySelector(".ten").addEventListener("click", ()=> {nextWord(aSideArrayItTen, bSideOneItTen, bSideTwoItTen)},false)
document.querySelector(".ten").addEventListener("click", () => {runFlashcardApp(randomQuizwords)},false)

document.querySelector(".twentyfive").addEventListener("click", () => twentyFiveWordsStatus = true)
document.querySelector(".twentyfive").addEventListener("click", ()=> {nextWord(aSideArrayItTwentyFive, bSideOneItTwentyFive, bSideTwoItTwentyFive)},false)
document.querySelector(".twentyfive").addEventListener("click", () => {runFlashcardApp(randomQuizwords)},false)

document.querySelector(".fifty").addEventListener("click", () => fiftyWordsStatus = true)
document.querySelector(".fifty").addEventListener("click", ()=> {nextWord(aSideArrayItFifty, bSideOneItFifty, bSideTwoItFifty)},false)
document.querySelector(".fifty").addEventListener("click", () => {runFlashcardApp(randomQuizwords)},false)

document.querySelector(".all-words").addEventListener("click", () => allWordsStatus = true)
document.querySelector(".all-words").addEventListener("click", () => {nextWord(aSideArrayItTwentyFive, bSideOneItTwentyFive, bSideTwoItTwentyFive)},false)
document.querySelector(".all-words").addEventListener("click", () => {runFlashcardApp(randomQuizwords)},false)
//the wrong and correct buttons run the flashcard app, but are only available when when the user presses the A side of the card
document.querySelector('.side-a').addEventListener("click", () => {hideShowByClassName('answer', 'visible')},false);
let wrong = document.querySelector(".wrong");
let correct = document.querySelector(".correct");
let showCorrect = () => document.querySelector('.num-correct').innerHTML = `Score: ${tallyCorrect()}/`
let showClicks = () => document.querySelector('.num-total').innerHTML = tallyClicks()
correct.addEventListener("click", showCorrect);
correct.addEventListener("click", showClicks);
correct.addEventListener("click", ()=> {
  if (fiveWordsStatus === true) nextWord(aSideArrayItFive, bSideOneItFive, bSideTwoItFive)
  if (tenWordsStatus === true) nextWord(aSideArrayItTen, bSideOneItTen, bSideTwoItTen)
  if (twentyFiveWordsStatus === true) nextWord(aSideArrayItTwentyFive, bSideOneItTwentyFive, bSideTwoItTwentyFive)
  if (fiftyWordsStatus === true) nextWord(aSideArrayItFifty, bSideOneItFifty, bSideTwoItFifty)
  if (allWordsStatus === true) nextWord(aSideArrayItAll, bSideOneItAll, bSideTwoItAll)
},false)
correct.addEventListener("click", () => {hideShowByClassName("answer", "hidden")},false)
wrong.addEventListener("click", showClicks);
wrong.addEventListener("click", ()=> {
  if (fiveWordsStatus === true) nextWord(aSideArrayItFive, bSideOneItFive, bSideTwoItFive)
  if (tenWordsStatus === true) nextWord(aSideArrayItTen, bSideOneItTen, bSideTwoItTen)
  if (twentyFiveWordsStatus === true) nextWord(aSideArrayItTwentyFive, bSideOneItTwentyFive, bSideTwoItTwentyFive)
  if (fiftyWordsStatus === true) nextWord(aSideArrayItFifty, bSideOneItFifty, bSideTwoItFifty)
  if (allWordsStatus === true) nextWord(aSideArrayItAll, bSideOneItAll, bSideTwoItAll)
},false)
wrong.addEventListener("click", () => {hideShowByClassName("answer", "hidden")},false);