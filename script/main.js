import { getQuizzes } from "./services.js";
import { view1 } from "./view-page-1.js";
import { view3 } from "./view-page-3.js";
console.log(view1)

const quizzes = await getQuizzes() // COLETANDO TODOS OS QUIZZES DO DATABASE
let userId = 18193
view1.mountFirstPage(quizzes, userId)
window.goToCreationPage = async function goToCreationPage() {
    document.querySelector('body').classList.remove('main-screen-1')
    document.querySelector('body').classList.remove('site')
    document.querySelector('body').classList.add('main-screen-3')
    document.querySelector('body').innerHTML = await view3.mountInitialPage()
}

window.hide = view3.hide
window.accessQuizz = view3.accessQuizz
