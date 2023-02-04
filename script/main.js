import { controller } from "./controller.js";
import { getQuizzes, createQuizz } from "./services.js";
import { view1 } from "./view-page-1.js";
import { view2 } from "./view-page-2.js";
import { view3 } from "./view-page-3.js";


// let userId;
let userId = JSON.parse(window.localStorage.getItem("userID")).map(item => {
    const [id] = Object.keys(item);
    return id;})

if (!userId){
    window.localStorage.setItem('userID', JSON.stringify([]))
}
// console.log(userId)
// window.localStorage.setItem("userID",18193) 
const quizzes = await getQuizzes() // COLETANDO TODOS OS QUIZZES DO DATABASE
const doneQuestions = new Set()
const wonMatches = new Set()
view1.mountFirstPage(quizzes, userId)

// console.log(quizzes[0].questions)


window.goToCreationPage = async function goToCreationPage() {
    view1.cleanUpPage1Classess()
    let body = document.querySelector('body')
    body.classList.add('main-screen-3')
    body.innerHTML = await view3.mountInitialPage()
}
window.goToPage2 = async function goToPage2(e) {
    let [user, itemID] = e.currentTarget.id.split('-')
    window.localStorage.setItem('actualQuizzID', itemID)
    const isUser = user === 'user'
    view1.cleanUpPage1Classess()
    let mainElement = document.querySelector('main')
    mainElement.classList.add('main-screen-2')
    const { image, questions, title, levels } = quizzes[itemID]

    console.log()
    view2.buildPage2(mainElement, image, title, questions, levels)
}
window.resetQuizz = () => {

    let mainContainer = document.querySelector('main')
    let itemID = window.localStorage.getItem('actualQuizzID')
    const { image, questions, title } = quizzes[itemID]
    view2.buildPage2(mainContainer, image, title, questions)
    controller.doneQuestions.clear()
	controller.wonMatches.clear()
    window.scrollTo(0,0)
}
window.hide = view3.hide
window.accessQuizz = view3.accessQuizz
window.selectAnswer = controller.selectAnswer
window.createQuestions = view3.createQuestions
window.createLevels = view3.createLevels
window.renderLevels = view3.renderLevels
window.finishQuizz = view3.finishQuizz
window.allLevelTitles = view3.allLevelTitles
window.levelTitles = view3.levelTitles
window.numberOfQuestions = view3.numberOfQuestions
window.questionStorage = view3.questionStorage
window.numberLevels = view3.numberLevels
window.reload = view3.reload;
window.renderSucess = view3.renderSucess;


