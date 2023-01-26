import { getQuizzes } from './services.js';

export async function displayUserQuizzes(userId){

    let userQuizzes;
    // let userId = 18035;

    const quizzes = await getQuizzes() // COLETANDO TODOS OS QUIZZES DO DATABASE

    userQuizzes = quizzes.filter(quiz => quiz.id === userId); // COLETANDO QUIZZES DO USUARIO

    if (userQuizzes.length > 0) { //ANALISANDO SE O USUARIO POSSUI QUIZZES
        //PLOTANDO CABEÇALHO QUANDO O USER TEM QUIZZES
        const elementYourQuizzesMenu = document.querySelector(".yourQuizzesMenu");
        elementYourQuizzesMenu.innerHTML = "";
        const elementNoQuizzes = document.querySelector(".noQuizzes");
        elementNoQuizzes.classList.add("hide");
        const elementYourQuizzes = document.querySelector(".yourQuizzes");
        elementYourQuizzes.classList.remove("hide");

        for (let i = 0; i < userQuizzes.length; i++) {
            elementYourQuizzesMenu.innerHTML += `
            <div class="yourQuizz">
                <div class="yourQuizzImg">
                    <div class="shadow">
                                    
                    </div>
                    <img src="${userQuizzes[i].image}" alt="Imagem do quizz nrm ${i+1}">
                    <div class="yourQuizzTitle">
                    ${userQuizzes[i].title}
                    </div> 
                </div>                                       
            </div>        
            `;
        }
    }
    else {
        //PLOTANDO CABEÇALHO QUANDO O USER NÃO POSSUI QUIZZES
        const elementNoQuizzes = document.querySelector(".noQuizzes");
        elementNoQuizzes.classList.remove("hide");
        const elementYourQuizzes = document.querySelector(".yourQuizzes");
        elementYourQuizzes.classList.add("hide");
    }

    //PLOTANDO TODOS OS QUIZZES
    const elementAllQuizzesMenu = document.querySelector(".allQuizzesMenu");
    elementAllQuizzesMenu.innerHTML = "";

    console.log(quizzes);

    for(let i = 0; i < quizzes.length; i++){
        elementAllQuizzesMenu.innerHTML += `
            <div class="quizz">
                <div class="quizzImg">
                    <div class="shadow">
                                    
                    </div>
                    <img src="${quizzes[i].image}" alt="Imagem do quizz nmr ${i+1}">
                    <div class="quizzTitle">
                        ${quizzes[i].title}
                    </div> 
                </div> 
            </div> 
        `;
    }
}

displayUserQuizzes(666); // testando modulo