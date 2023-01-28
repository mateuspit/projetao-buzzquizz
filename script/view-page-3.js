export const view3 = {
    mountInitialPage: async function mountInitialPage() {
        return `   <header>
                        <p>BuzzQuiz</p>
                    </header>
                    <main>
                        <div class="paginainicial">
                            <div class="frase">
                                Comece pelo começo
                            </div>
                            <div class="container-informacoes">
                                <input type="text" minlength="20" maxlength="65" required title="Digite entre 20 e 65"
                                    placeholder="Título do seu quizz">
                                <input type="url" required title="Digite uma URL válida" placeholder="URL da imagem do seu quizz">
                                <input type="number" min="1" required title="Digite um número igual ou maior que 0"
                                    placeholder="Quantidade de perguntas do quizz">
                                <input type="number" min="1" required title="Digite um número igual ou maior que 0"
                                    placeholder="Quantidade de níveis do quizz">
                            </div>
                            <button onclick="hide(this)" onclick="createQuestions()">Prosseguir para criar perguntas</button>
                        </div>
                        <div class="segundapagina hide">
                            <div class="frase">
                                SEGUNDA PAGINA
                            </div>
                            <div class="question-box">

                            </div>
                            <button onclick="hide(this)" onclick="createLevels()">Prosseguir para criar níveis</button>
                        </div>
                        <div class="terceirapagina hide">
                            <div class="frase">
                                Agora, decida os níveis
                            </div>
                            <div class="level-box">

                            </div>
                            <button onclick="hide(this)" onclick="renderSucess()">Finalizar o quizz</button>
                        </div>
                        <div class="quartapagina hide">
                            <div class="frase">Seu quizz está pronto</div>
                            <div class="sucess-box">

                            </div>
                            <button onclick="accessQuizz()">Acessar Quizz</button>
                            <h2 onclick="onclick="window.location.reload()"">voltar pra home</h2>
                        </div>


                    </main>`
    },createQuestions: function createQuestions() {
        let boxQuestions = window.document.querySelector('.segundapagina .question-box');
        let Number = Number(window.document.querySelector('.container-informacoes input:nth-child(3)').value);

        for (let i = 0; i < Number; i++) {
            boxQuestions.innerHTML += `
      <div class="question">
        <div class="titulo">
            <p>Pergunta ${i + 1}</p>
            <ion-icon onclick="expandQuestion(this)" name="create-outline"></ion-icon>
        </div>
        <input type="text" class="question-title" minlength="20" required title="minimo de 20 letras" placeholder="Texto da pergunta">
        <input type="text" class="question-color" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{6})$" required title="começar em #, seguida de 6 caracteres hexadecimais, ou seja, números ou letras de A a F" placeholder="Cor de fundo da pergunta">
        <p>Resposta correta</p>
        <input type="text" class="correct-answer" required placeholder="Resposta correta">
        <input type="url" class="question-url-correct" required placeholder="URL da imagem">
        <p>Respostas incorretas</p>
        <input type="text" class="wrong-answer1" required placeholder="Resposta incorreta 1">
        <input type="url" class="question-url1" required placeholder="URL da imagem 1">
        <br> <br>
        <input type="text" class="wrong-answer2" placeholder="Resposta incorreta 2">
        <input type="url" class="question-url2" placeholder="URL da imagem 2">
        <br> <br>
        <input type="text" class="wrong-answer3" placeholder="Resposta incorreta 3">
        <input type="url" class="question-url3" placeholder="URL da imagem 3">
      </div>
    `;
        }
    },

    expandQuestion: function expandQuestion(req) {
        const selected = window.document.querySelector('.selected');
        const question = req.parentNode.parentNode;
        if (selected) {
            selected.classList.remove('selected');
            question.classList.add('selected');
        } else {
            question.classList.add('selected');
        }
    },

    hide: function hide(elemento) {
        let pagina = elemento.parentNode;
        let nextPagina = elemento.parentNode.nextSibling?.nextSibling;
        console.log(pagina);
        console.log(nextPagina);
        pagina.classList.add('hide');
        nextPagina.classList.remove('hide');
    },


    renderLevels: function renderLevels() {
        const boxLevels = window.document.querySelector('.terceirapagina .level-box');
        let Number = Number(
            window.document.querySelector('.container-informacoes input:nth-child(4)').value)
        for (let i = 1; i < inputNumberOfLevels; i++) {
            boxLevels.innerHTML += `
      <div class="level">
        <div class="header">
            <p>Nivel ${i + 1}</p>
            <ion-icon onclick="expandQuestion(this)" name="create-outline"></ion-icon>
        </div>
        <input type="text" class="level-title" minlength="10" required title="minimo de 10 letras" placeholder="Título do nível">
        <input type="number" class="level-min" min="0" max="100" required placeholder="% de acerto mínima">
        <input type="url" class="level-url" required placeholder="URL da imagem do nível">
        <input type="text" class="level-description" minlength="30" required title="minimo de 30 letras" placeholder="Descrição do nível">
      </div>
    `;
        }
    },
    createLevels: function createLevels() {
        const allCorrectAnswers = window.document.querySelectorAll(' .correct-answer');
        const allWrongAnswers1 = window.document.querySelectorAll('.wrong-answer1');
        const allWrongAnswers2 = window.document.querySelectorAll('.wrong-answer2');
        const allWrongAnswers3 = window.document.querySelectorAll('.wrong-answer3');
        const allQuestionColors = window.document.querySelectorAll('.question-color');
        const allQuestionTitles = window.document.querySelectorAll('.question-title');
        const allQuestionUrlsCorrects = window.document.querySelectorAll(
            '.question-url-correct'
        );
        const allQuestionUrls1 = window.document.querySelectorAll('.question-url1');
        const allQuestionUrls2 = window.document.querySelectorAll('.question-url2');
        const allQuestionUrls3 = window.document.querySelectorAll('.question-url3');
    
        for (let i = 0; i < allCorrectAnswers.length; i++) {
            const title = allQuestionTitles[i].value;
            const color = allQuestionColors[i].value;
            const correct = allCorrectAnswers[i].value;
            const urlCorrect = allQuestionUrlsCorrects[i].value;
            const wrong1 = allWrongAnswers1[i].value;
            const wrong2 = allWrongAnswers2[i].value;
            const wrong3 = allWrongAnswers3[i].value;
            const url1 = allQuestionUrls1[i].value;
            const url2 = allQuestionUrls2[i].value;
            const url3 = allQuestionUrls3[i].value;
    
            questionStorage.push({
                title: title,
                color: color,
                answers: [
                    {
                        text: correct,
                        image: urlCorrect,
                        isCorrectAnswer: true,
                    },
                    {
                        text: wrong1,
                        image: url1,
                        isCorrectAnswer: false,
                    },
                ],
            });
    
            if (wrong2 !== '' && wrong3 === '') {
                questionStorage[i].answers.push({
                    text: wrong2,
                    image: url2,
                    isCorrectAnswer: false,
                });
            } else if (wrong2 !== '' && wrong3 !== '') {
                questionStorage[i].answers.push(
                    {
                        text: wrong2,
                        image: url2,
                        isCorrectAnswer: false,
                    },
                    {
                        text: wrong3,
                        image: url3,
                        isCorrectAnswer: false,
                    }
                );
            }
        }
        questions.classList.add('hide');
        questions.classList.remove('questions');
        levels.classList.remove('hide');
        levels.classList.add('levels');
        renderLevels();
    },
    renderSucess: function renderSucess() {
        const boxSucess = window.document.querySelector('.quartapagina .sucess-box');
        boxSucess.innerHTML = `
        <div class="quizz">
          <div class="gradient"></div>
          <img src="${inputImage}" alt="">
          <p>${inputTitle}</p>
        </div>
      `;
    },
    
    accessQuizz :async function accessQuizz() {
        const main = window.document.querySelector('main')
        console.log(main)
     
        // const { image, title, questions } =  await createQuizz(quizz)
        // view.buildPage2(main, image, title, questions)
        // window.openQuizz(main)
    }

}
