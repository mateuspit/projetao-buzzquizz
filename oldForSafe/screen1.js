import { getQuizzes } from '../script/services.js';

export async function displayUserQuizzes(userId){

    let userQuizzes;
    let siteTitle = "BuzzQuizz";
    let allQuizzesHeader = "Todos os Quizzes";

    const quizzes = await getQuizzes() // COLETANDO TODOS OS QUIZZES DO DATABASE

    console.log(quizzes);

    userQuizzes = quizzes.filter(quiz => quiz.id === userId); // COLETANDO QUIZZES DO USUARIO

    //PLOTANDO O TITLE DA PAGINA "BUZZQUIZZ"
    //E A TAG MAIN yourQuizzesSpace e allQuizzes
    const elementSite = document.querySelector(".site"); 
    elementSite.innerHTML = "";    
    elementSite.innerHTML = `
        <header class="header-screen-1">
            ${siteTitle}
        </header>
        <main class="main-screen-1">
            <div class="yourQuizzesSpace">
            </div>
            <div class="allQuizzes">
            </div>
        </main>
    `;

    //PLOTANDO allQuizzesHeader e allQuizzesMenu
    const elementAllQuizzes = document.querySelector(".allQuizzes");
    elementAllQuizzes.innerHTML = "";
    elementAllQuizzes.innerHTML = `
        <div class="allQuizzesHeader">
            ${allQuizzesHeader}
        </div>
        <div class="allQuizzesMenu">
        </div>
    `;

    //PLOTANDO TODOS OS QUIZZES ABAIXO
    const elementAllQuizzesMenu = document.querySelector(".allQuizzesMenu");
    elementAllQuizzesMenu.innerHTML = "";

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
    //PLOTANDO TODOS OS QUIZZES ACIMA

    //PLOTANDO SE O USUARIO POSSUI QUIZZES OU NÃO
    if (userQuizzes.length > 0) {
        const elementYourQuizzesSpace = document.querySelector(".yourQuizzesSpace")
        elementYourQuizzesSpace.innerHTML = "";
        elementYourQuizzesSpace.innerHTML = `
        <div class="yourQuizzes">
            <div class="yourQuizzesHeader">
                <div class="yourQuizzesTitle">
                    Seus Quizzes
                </div>
                <div class="yourQuizzesHeaderButton">
                    +                            
                </div>
            </div>
            <div class="yourQuizzesMenu">
            </div>   
        </div>             
        `;

        const elementYourQuizzesMenu = document.querySelector(".yourQuizzesMenu");
        elementYourQuizzesMenu.innerHTML = "";


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
    else{
        const elementYourQuizzesSpace = document.querySelector(".yourQuizzesSpace")
        elementYourQuizzesSpace.innerHTML = "";
        elementYourQuizzesSpace.innerHTML = `
        <div class="noQuizzes">
            <div class="noQuizzesText">                
                Você não criou nenhum quizz ainda :(
            </div>
            <div class="noQuizzesButton">
                Criar Quizz                            
            </div>
        </div>            
        `;

    }
}

displayUserQuizzes(8193); // testando modulo