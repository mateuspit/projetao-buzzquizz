import { view2 } from "./view-page-2.js"
import { compareID, generatePercentageScore } from "./utils.js"
const mainContainer = window.document.querySelector('.main-screen-2')
let doneQuestions= new Set()
let wonMatches= new Set()
export const controller = {
    doneQuestions ,
    wonMatches ,

    selectAnswer : function selectAnswer(e) {
        const mainContainer = document.querySelector('.main-screen-2')
        let answerNode = e.target.parentNode
        let questionNode = answerNode.parentNode.parentNode.parentNode
        let answerID = Number(answerNode.id.split('-')[1])
        let questionID = Number(questionNode.id.split('-')[1])
        if (controller.doneQuestions.has(questionID)) return; 
        controller.doneQuestions.add(questionID)
        let answers = window.document.querySelectorAll(`#question-${questionID} .answer-item`)//pegar answers do mesmo container pelo id pra usar filter
        for (let correctAnswer of view2.isCorrectAnswer.entries()) {
            let questionIDstoCompare = correctAnswer[0][0]
            let trueSolutionsID = correctAnswer[0][1]
            if (!(compareID(questionID, questionIDstoCompare))) {
                continue;
            }
            if (compareID(trueSolutionsID, answerID)) {
                answerNode.querySelector('p').style.color = "green";
                controller.wonMatches.add(questionIDstoCompare);
                answers.forEach(answer => {
                    if (!compareID(answer.id, `answer-${answerID}`)) {
                        answer.classList.add('red-opacity')
                    }
                })
            } else {
                answers.forEach(answer => {
                    if (!compareID(answer.id, `answer-${trueSolutionsID}`)) {
                        if (!compareID(answer.id, `answer-${answerID}`)) {
                            answer.classList.add('red-opacity')
                        }
                        answer.querySelector('p').style.color = "red"
                    } else {
                        answer.classList.add('green-opacity')
                    }
                })
                
            }
        }
        let numberOfQuestions = window.document.querySelectorAll(`.quizz-container`).length
        if(controller.doneQuestions.size<numberOfQuestions){
        setTimeout(()=>{ 
                questionNode.parentNode.nextSibling?.scrollIntoView({behavior: 'smooth'})
            },2000)
        }
        if (controller.doneQuestions.size === numberOfQuestions) {
            let score = generatePercentageScore(controller.wonMatches.size,numberOfQuestions)
    
            let statisticTemplate = view2.createStatisticMessageTemplate(score)
            
            mainContainer.innerHTML+=statisticTemplate
            setTimeout(()=>{ 
                
                window.document.querySelector('.button-container')?.scrollIntoView({behavior: 'smooth'})
            },2000)
        }
    },
    validateGetQuizzByID: function validateGetQuizzByID(title, questions) {
        if (title?.length === 0 || title === undefined) {
            return true
        }
        if (questions?.length === 0 || title === undefined) {
            return true
        }
        if (questions?.length === 0 || title === undefined) {
            return true
        }
    },
    resetQuizz: async function resetQuizz(mainContainer, image, title, questions){
  
        view2.buildPage2(mainContainer, image, title, questions)
    },
    openQuizz : async function openQuizz(e) {
        view2.buildPage2(mainContainer, image, title, questions, levels)
        controller.doneQuestions.clear()
        controller.wonMatches.clear()
        window.scrollTo(0,0)
        if (validateGetQuizzByID()) {
            return;
        }
        questions.map(question => {
        })
    }
}