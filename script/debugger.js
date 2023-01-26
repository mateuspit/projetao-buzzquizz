import { getQuizzes } from './services.js';

let userQuizzes;
let elementYourQuizzesSpace = "";
// let yourQuizzesSpace = "";
let userId = 17982;
let imgSrc = "";

const quizzes = await getQuizzes() // COLETANDO TODOS OS QUIZZES DO DATABASE

console.log(quizzes);
console.log(quizzes[3].id);
console.log(quizzes[3].image);
console.log(quizzes[3].title);

userQuizzes = quizzes.filter(quiz => quiz.id === userId); // COLETANDO QUIZZES DO USUARIO
// console.log("alou: "+ userQuizzes); PQ ISSO N DA CERTO?



if (userQuizzes.length > 0) { //ANALISANDO SE O USUARIO POSSUI QUIZZES
    //PLOTANDO CABEÇALHO QUANDO O USER TEM QUIZZES ABAIXO
    elementYourQuizzesSpace = document.querySelector(".yourQuizzesMenu");
    elementYourQuizzesSpace.innerHTML = "";

    for (let i = 0; i < userQuizzes.length; i++) {
        elementYourQuizzesSpace.innerHTML += `
        <div class="yourQuizz">
            <div class="yourQuizzImg">
                <img src="${userQuizzes[i].image}" alt="Imagem do quizz">
                <div class="yourQuizzTitle">
                ${userQuizzes[i].title}
                </div> 
            </div>                                       
        </div>        
        `;
    }
}
else {

}


