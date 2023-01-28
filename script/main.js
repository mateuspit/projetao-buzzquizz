import { controller } from "./controller.js";
import { getQuizzes } from "./services.js";
import { view1 } from "./view-page-1.js";
import { view2 } from "./view-page-2.js";
import { view3 } from "./view-page-3.js";
console.log(view1)

const quizzes = await getQuizzes() // COLETANDO TODOS OS QUIZZES DO DATABASE
let userId = 18193
const doneQuestions = new Set()
const wonMatches = new Set()
view1.mountFirstPage(quizzes, userId)
window.goToCreationPage = async function goToCreationPage() {
    view1.cleanUpPage1Classess()
    document.querySelector('body').innerHTML = await view3.mountInitialPage()
}

window.goToPage2 = async function goToPage2(e) {
    let [user, itemID] = e.currentTarget.id.split('-')
    window.localStorage.setItem('actualQuizzID', itemID)
    const isUser = user === 'user'
    view1.cleanUpPage1Classess()
    let mainElement = document.querySelector('main')
    mainElement.classList.add('main-screen-2')
    const { image, questions, title } = quizzes[itemID]

    console.log()
    view2.buildPage2(mainElement, image, title, questions)
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
