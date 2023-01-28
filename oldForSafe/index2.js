import { getQuizzes, getQuizz, createQuizz } from '../script/services.js'
import { view } from './view.js';
import { compareID, generatePercentageScore } from '../script/utils.js'
// console.log(await getQuizzes())
const quizz = {
	title: "Título do quizz",
	image: "https://http.cat/411.jpg",
	questions: [
		{
			title: "Título da pergunta 1",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				},
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: false
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 2",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 3",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		}
	],
	levels: [
		{
			title: "Título do nível 1",
			image: "https://http.cat/411.jpg",
			text: "Descrição do nível 1",
			minValue: 0
		},
		{
			title: "Título do nível 2",
			image: "https://http.cat/412.jpg",
			text: "Descrição do nível 2",
			minValue: 50
		}
	]


}
const response = await createQuizz(quizz)
window.localStorage.setItem("id", response.id);
const id = window.localStorage.getItem('id')
function validateGetQuizzByID(title, questions) {
	if (title?.length === 0 || title === undefined) {
		return true
	}
	if (questions?.length === 0 || title === undefined) {
		return true
	}
	if (questions?.length === 0 || title === undefined) {
		return true
	}
}

const doneQuestions = new Set()
const wonMatches = new Set()
window.selectAnswer = function selectAnswer(e) {
	let answerNode = e.target.parentNode
	let questionNode = answerNode.parentNode.parentNode.parentNode
	let answerID = Number(answerNode.id.split('-')[1])
	let questionID = Number(questionNode.id.split('-')[1])
	if (doneQuestions.has(questionID)) return; 
	doneQuestions.add(questionID)
	let answers = window.document.querySelectorAll(`#question-${questionID} .answer-item`)//pegar answers do mesmo container pelo id pra usar filter
	for (let correctAnswer of view.isCorrectAnswer.entries()) {
		let questionIDstoCompare = correctAnswer[0][0]
		let trueSolutionsID = correctAnswer[0][1]
		if (!(compareID(questionID, questionIDstoCompare))) {
			continue;
		}
		if (compareID(trueSolutionsID, answerID)) {
			answerNode.style.backgroundColor = "green";
			wonMatches.add(questionIDstoCompare);
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
					answer.style.backgroundColor = "red"
				} else {
					answer.classList.add('green-opacity')
				}
			})
			
		}
	}
	let numberOfQuestions = window.document.querySelectorAll(`.quizz-container`).length
	if(doneQuestions.size<numberOfQuestions){
	setTimeout(()=>{ 
			questionNode.parentNode.nextSibling?.scrollIntoView({behavior: 'smooth'})
		},2000)
	}
	if (doneQuestions.size === numberOfQuestions) {
		let score = generatePercentageScore(wonMatches.size,numberOfQuestions)

		let statisticTemplate = view.createStatisticMessageTemplate(score)
		mainContainer.innerHTML+=statisticTemplate
		setTimeout(()=>{ 
			
			window.document.querySelector('.button-container').scrollIntoView({behavior: 'smooth'})
		},2000)
	}
}
const mainContainer = window.document.querySelector('.main-screen-2')
window.resetQuizz= async function resetQuizz(){
	view.buildPage2(mainContainer, image, title, questions, levels)
}
const { image, levels, title, questions } = await getQuizz(id)
window.openQuizz = async function openQuizz(e) {
	view.buildPage2(mainContainer, image, title, questions, levels)
	doneQuestions.clear()
	wonMatches.clear()
	window.scrollTo(0,0)
	if (validateGetQuizzByID()) {
		return;
	}
	questions.map(question => {
	})
}
openQuizz()