export const view1 = {
    mountFirstPage: async function mountFirstPage(quizzes, userId) {
        this.mainElement = window.document.querySelector('.site')
        this.mainElement.innerHTML = "";
        let userQuizzes;
        userQuizzes = quizzes.filter(quiz => quiz.id === userId);
        this.mainElement.innerHTML = this.mountMainContainer();
        const elementAllQuizzesMenu = document.querySelector(".allQuizzesMenu");
        elementAllQuizzesMenu.innerHTML = "";
        for (let i = 0; i < quizzes.length; i++) {
            elementAllQuizzesMenu.innerHTML += this.generateQuizzMenuItem(quizzes[i].image, quizzes[i].title, i);
        }
        if (userQuizzes.length > 0) {
            const elementYourQuizzesSpace = document.querySelector(".yourQuizzesSpace")
            elementYourQuizzesSpace.innerHTML = this.generateUserQuizzesMenu();
            const elementYourQuizzesMenu = document.querySelector(".yourQuizzesMenu");
            elementYourQuizzesMenu.innerHTML = "";
            for (let i = 0; i < userQuizzes.length; i++) {
                elementYourQuizzesMenu.innerHTML += this.generateUserQuizzes(userQuizzes[i].image, userQuizzes[i].title, i);
            }

        }
        else {
            const elementYourQuizzesSpace = document.querySelector(".yourQuizzesSpace")
            elementYourQuizzesSpace.innerHTML = "";
            elementYourQuizzesSpace.innerHTML = `
            <div class="noQuizzes">
                <div class="noQuizzesText">                
                    Você não criou nenhum quizz ainda :(
                </div>
                <div onclick="goToCreationPage()" class="noQuizzesButton">
                    Criar Quizz                            
                </div>
            </div>            
            `;

        }
    },
    mountMainContainer: function mountMainContainer() {
        return `
        <header class="header-screen-2">
            <p>BuzzQuizz</p>
        </header>
            <main class="main-screen-1">
                <div class="yourQuizzesSpace">
                </div>
                <div class="allQuizzes">
                    <div class="allQuizzesHeader">Todos os Quizzes</div>
                        <div class="allQuizzesMenu">
                        </div>
                    </div>
            </main>
        `
    },
    mountMainAllQuizzes: function mountMainAllQuizzes() {
        return `<div class="allQuizzesHeader">
                    Todos os Quizzes
                    </div><div class="allQuizzesMenu">
                </div>`
    },
    generateQuizzMenuItem: function generateQuizzMenuItem(image, title, i) {
        return `<div class="quizz">
                    <div class="quizzImg">
                        <div class="shadow">
                                        
                        </div>
                        <img src="${image}" alt="Imagem do quizz nmr ${i + 1}">
                        <div class="quizzTitle">
                            ${title}
                        </div> 
                    </div> 
                </div> 
            `
    },
    generateUserQuizzesMenu: function generateUserQuizzesMenu() {
        `<div class="yourQuizzes">
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
                `

    },
    generateUserQuizzes: function generateUserQuizzes(image, title, i) {
        return `
                        <div class="yourQuizz">
                            <div class="yourQuizzImg">
                                <div class="shadow">
                                                    
                                </div>
                                <img src="${image}" alt="Imagem do quizz nrm ${i + 1}">
                                <div class="yourQuizzTitle">
                                    ${title}
                                </div> 
                            </div>                                       
                        </div>        
                    `
    },

}