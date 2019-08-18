const nav = document.querySelector('nav')
let toggleNavBtn = false 

let projectInfoVisible = false 
const projects = document.querySelector('#projects')
const projectsHeading = document.querySelector('#projects-heading')
const calculatorApp = document.querySelector('.calculator')
const reportGeneratorApp = document.querySelector('.report-generator')
const flashcard = document.querySelector('.flashcard')
const pollutionApp = document.querySelector('.pollution-app')
const projectSummary = document.querySelector('.project-summary')
let appVideo = document.querySelector('.app-video')
let appInfo = document.querySelector('.app-info')

//info to show projects
let flashcardMessage = `This is a flashcard app written in vanilla JavaScript, CSS, and HTML. It allows the user to choose how many cards they wish to be quized on. The options are: 5, 10, 25, 50 and all cards. It also keeps track of how many cards have been answered and what the user's score is. All cards are shown in a random order. The user can not continue to the next card, or even see the content of the current card, until they respond to having been correct or wrong. `
let flashcardVideoHTML = '<video width="300" class="my-video" height="161" controls preload="auto" ><source src="video/flashcard.mp4" type="video/mp4" /><source src="video/flashcard.webm" type="video/webm" /><source src="video/flashcard.ogv" type="video/ogg" /><p>Your browser does not support video</p></video>'

let reportGeneratorMessage = `Progress Report Generator is a website that I built for an English training school in China. Progress Report Generator lets teachers to only press a few buttons to grade the students’ abilities to generate a progress report. Reports are randomly generated based on the grading criteria entered by the teacher. Also, names and proper gender pronouns are spread naturally throughout the text. To limit the userbase I also learned the very basics of MySQL and some PHP to build a functioning login system.`
let reportGeneratorVideoHTML = `<video width="300" class="my-video" height="161" controls preload="auto" ><source src="video/report.mp4" type="video/mp4" /><source src="video/report.webm" type="video/webm" /><source src="video/report.ogv" type="video/ogg" /><p>Your browser does not support video</p></video>`

let pollutionAppMessage = `Compare Beijing’s Pollution uses AirVisual’s API to compare Beijing’s pollution with hourly updated AQI scores from cities all over the world. All text inputs use regex or a drop-down menu to assure only letters and spaces are typed. Beyond just raw data, there is also a written comparison between Beijing and the selected city with a color-coded description of the current potential health consequences.`
let pollutionAppVideoHTML = `<video width="300" class="my-video" height="161" controls preload="auto" ><source src="video/pollution.mp4" type="video/mp4" /><source src="video/pollution.webm" type="video/webm" /><source src="video/pollution.ogv" type="video/ogg" /><p>Your browser does not support video</p></video>`

let calculatorMessage = `This is a basic calculator application. It was a fun short vanilla JavaScript web application that I recently built. I wrote it with the intention of eventually comparing it with how other more experienced developers have made calculators in ES6. It allows the user to continuously add, subtract, multiply, divide, and clear numbers. Furthermore, if the user presses the equals button, they can continue performing math operations without clearing the value. `
let calculatorVideoHTML = `<video width="300" class="my-video" height="161" controls preload="auto" ><source src="video/calculator.mp4" type="video/mp4" /><source src="video/calculator.webm" type="video/webm" /><source src="video/calculator.ogv" type="video/ogg" /><p>Your browser does not support video</p></video>`

//reusable function for all apps

function getAppInfo(message, video, x, y, z){
    x.style.visibility = 'hidden'
    y.style.visibility = 'hidden'
    z.style.visibility = 'hidden'
    projectSummary.style.visibility = 'visible'
    appInfo.innerHTML = '<span style="max-width: 700px">'+message+'</span>'
    let mq = window.matchMedia('(max-width: 500px)')
    if (mq.matches) appInfo.innerHTML = '<span style="max-width: 300px">'+message+'</span>'
    appVideo.innerHTML = video
    projects.style.gridTemplateRows = '2.5 2em 1fr 1fr 1fr .5em'
    projects.style.gridTemplateAreas = '"projects-heading projects-heading projects-heading""flashcard flashcard flashcard""project-summary project-summary project-summary""project-summary project-summary project-summary""project-summary project-summary project-summary""pollution-app calculator report-generator"'
    projectInfoVisible = true
}
//let getFlashCardInfo = getAppInfo(flashcardMessage, flashcardVideoHTML, flashcard, calculatorApp, reportGeneratorApp, pollutionApp)
function returnToProjectsHome(){
    calculatorApp.style.visibility = 'visible'
    reportGeneratorApp.style.visibility = 'visible'
    pollutionApp.style.visibility = 'visible'
    flashcard.style.visibility = 'visible'
    projectSummary.style.visibility = 'hidden'
    projects.style.gridTemplateRows = '3em 1fr 1fr 1fr 1fr .5em'
    projects.style.gridTemplateAreas = '"projects-heading projects-heading projects-heading""flashcard flashcard flashcard""report-generator report-generator report-generator""pollution-app pollution-app pollution-app""calculator calculator calculator""project-summary project-summary project-summary"'
    // calculatorAppInfoVisible = false 
    // flashcardInfoVisible = false 
    // reportGeneratorAppInfoVisible = false 
    // pollutionAppInfoVisible = false 
    projectInfoVisible = false 
}


function hideShowByClassName(className, visibleOrHiddenString){
    for (let i = 0; i < document.getElementsByClassName(className).length; i++)
      document.getElementsByClassName(className)[i].style.visibility = visibleOrHiddenString;
  }

  function getNav(){
    let mq = window.matchMedia('(max-width: 880px)')
    if (mq.matches) {
        document.querySelector('nav').style.backgroundPosition = 'left'
        document.querySelector('nav').style.width = '100%'
        hideShowByClassName('section-link', 'visible')
        toggleNavBtn = true
    }
}

function resetNav() {
    let mqTablet = window.matchMedia('(max-width: 880px)')
    if (mqTablet.matches) {
        document.querySelector('nav').style.backgroundPosition = 'center'
        document.querySelector('nav').style.width = '5em'
        hideShowByClassName('section-link', 'hidden')
        toggleNavBtn = false
    }
    let mqMobile = window.matchMedia('(max-width: 520px)')
    if (mqMobile.matches) {
        document.querySelector('nav').style.backgroundPosition = 'center'
        document.querySelector('nav').style.width = '4em'
        hideShowByClassName('section-link', 'hidden')
        toggleNavBtn = false
    }
}



//event handlers
nav.addEventListener('click', ()=> toggleNavBtn === false? getNav(): resetNav(), false)

flashcard.addEventListener('click', ()=>{
        if (projectInfoVisible === false){
        getAppInfo(flashcardMessage, flashcardVideoHTML, calculatorApp, reportGeneratorApp, pollutionApp)
        document.querySelector('.app-link').innerHTML = '<a style="color: #ef8b14;" href="web-apps/flashcard-app/index.html">Check it out here</a>'
        }else if(projectInfoVisible === true){
        returnToProjectsHome()
    }
}, false)

reportGeneratorApp.addEventListener('click', ()=>{
        if (projectInfoVisible === false){
        getAppInfo(reportGeneratorMessage, reportGeneratorVideoHTML, calculatorApp, flashcard, pollutionApp)
        projects.style.gridTemplateAreas = '"projects-heading projects-heading projects-heading""report-generator report-generator report-generator""project-summary project-summary project-summary""project-summary project-summary project-summary""project-summary project-summary project-summary""pollution-app calculator flashcard"'
        document.querySelector('.app-link').innerHTML = ''
        }else if(projectInfoVisible === true){
        returnToProjectsHome()
        }
    }, false)

pollutionApp.addEventListener('click', ()=>{
    if (projectInfoVisible === false){
    getAppInfo(pollutionAppMessage, pollutionAppVideoHTML, calculatorApp, flashcard, reportGeneratorApp)
    projects.style.gridTemplateAreas = '"projects-heading projects-heading projects-heading""pollution-app pollution-app pollution-app""project-summary project-summary project-summary""project-summary project-summary project-summary""project-summary project-summary project-summary""report-generator calculator flashcard"'
    document.querySelector('.app-link').innerHTML = '<a style="color: #ef8b14;" href="http://www.comparebeijingspollution.com">check it out here</a>'
    }else if(projectInfoVisible === true){
    returnToProjectsHome()
    }
}, false)

calculatorApp.addEventListener('click', ()=>{
    if (projectInfoVisible === false){
    getAppInfo(calculatorMessage, calculatorVideoHTML, reportGeneratorApp, flashcard, pollutionApp)
    projects.style.gridTemplateAreas = '"projects-heading projects-heading projects-heading""calculator calculator calculator""project-summary project-summary project-summary""project-summary project-summary project-summary""project-summary project-summary project-summary""report-generator pollution-app flashcard"'
    document.querySelector('.app-link').innerHTML = '<a style="color: #ef8b14;" href="web-apps/calculator/index.html">Check it out here</a>'
    }else if(projectInfoVisible === true){
    returnToProjectsHome()
    }
}, false)
