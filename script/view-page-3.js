import { createQuizz } from "./services.js";
import { view2 } from './view-page-2.js'
export const view3 = {
    numberLevels: "",
    numberOfQuestions: "",
    questionStorage: [],
    mountInitialPage: async function mountInitialPage() {
        return `   <header>
                        <p>BuzzQuiz</p>
                    </header>
                    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                    <main>
                        <div class="paginainicial">
                            <div class="frase">
                                Comece pelo começo
                            </div>
                            <div class="container-informacoes">
                                <input id="inputQuizzTitle" type="text" minlength="20" maxlength="65" required title="Digite entre 20 e 65"
                                    placeholder="Título do seu quizz">
                                <input id="inputQuizzURL" type="url" required title="Digite uma URL válida" placeholder="URL da imagem do seu quizz">
                                <input id="inputQuizzQuestions"type="number" min="1" required title="Digite um número igual ou maior que 0"
                                    placeholder="Quantidade de perguntas do quizz">
                                <input id="inputQuizzLevels" type="number" min="1" required title="Digite um número igual ou maior que 0"
                                    placeholder="Quantidade de níveis do quizz">
                            </div>
                            <button onclick="hide(this); createQuestions.call(window); createLevels.call(window);" >Prosseguir para criar perguntas</button>
                        </div>
                        <div class="segundapagina hide">
                            <div class="frase">
                                SEGUNDA PAGINA
                            </div>
                            <div class="question-box">

                            </div>
                            <button onclick="hide(this); ">Prosseguir para criar níveis</button>
                        </div>
                        <div class="terceirapagina hide">
                            <div class="frase">
                                Agora, decida os níveis
                            </div>
                            <div class="level-box">

                            </div>
                            <button onclick="hide(this); finishQuizz.call(window); ">Finalizar o quizz</button>
                        </div>
                        <div class="quartapagina hide">
                            <div class="frase">Seu quizz está pronto</div>
                            <div class="sucess-box">

                            </div>
                            <button onclick="accessQuizz()">Acessar Quizz</button>
                            <h2 onclick="onclick="window.location.reload()"">voltar pra home</h2>
                        </div>


    </main>`
    },
    createQuestions: function createQuestions() {
        let boxQuestions = window.document.querySelector('.segundapagina .question-box');
        this.numberLevels = Number(window.document.querySelector('.container-informacoes input:nth-child(4)').value);
        // console.log(Number(window.document.querySelector('.container-informacoes input:nth-child(3)').value))
        this.numberOfQuestions = Number(window.document.querySelector('.container-informacoes input:nth-child(3)').value);

        console.log(this.numberLevels)
        console.log(this.numberOfQuestions)
        for (let i = 0; i < this.numberOfQuestions; i++) {
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
        let validTitle = false;
        let validURL = false;
        let validQuestions = false;
        let validLevels = false;
        let validPage31 = false;

        //variaveis da pagina 3.1
        let valueQuizzTitle = document.getElementById('inputQuizzTitle').value;
        // let valueQuizzURL = document.getElementById('inputQuizzURL').value;
        let valueQuizzQuestions = document.getElementById('inputQuizzQuestions').value;
        let valueQuizzLevels = document.getElementById('inputQuizzLevels').value;
        console.log(valueQuizzTitle)
        console.log(valueQuizzQuestions)
        console.log(valueQuizzLevels)
        //validando variaveis da primeira pagina
        validTitle = (valueQuizzTitle.length <= 65) && (valueQuizzTitle.length >= 20);
        // validURL = isValidUrl(valueQuizzURL);
        validQuestions = (valueQuizzQuestions >= 3);
        validLevels = (valueQuizzLevels >= 2);
        // validPage31 = validTitle && validURL && validQuestions && validLevels;
        validPage31 = validTitle && validQuestions && validLevels;
        if (pagina.classList.contains("paginainicial")) {
            if (validPage31) {
                pagina.classList.add('hide');
                nextPagina.classList.remove('hide');
            }
            else if (!validTitle) {
                alert("O titulo deve conter de 20 até 65 caracteres!");
            }
            // else if(!validURL){
            //     alert("Coloquei uma URL valida!");
            // }
            else if (!validQuestions) {
                alert("Deve existir no minimo 3 questões!");
            }
            else if (!validLevels) {
                alert("Deve existir no minimo dois niveis!");
            }
        }
        // pagina.classList.add('hide');
        // nextPagina.classList.remove('hide');
    },


    renderLevels: function renderLevels() {
        const boxLevels = window.document.querySelector('.terceirapagina .level-box');
        for (let i = 0; i < window.numberLevels; i++) {
            boxLevels.innerHTML += `
                    <div class="level">
                        <div class="titulo">
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
        view3.questionStorage = [];
        const allCorrectAnswers = window.document.querySelectorAll('.correct-answer');
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

            view3.questionStorage.push({
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
                view3.questionStorage[i].answers.push({
                    text: wrong2,
                    image: url2,
                    isCorrectAnswer: false,
                });
            } else if (wrong2 !== '' && wrong3 !== '') {
                view3.questionStorage[i].answers.push(
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
        // let questions = document.querySelector('questions')
        // console.log("questions", questions)
        // questions.classList.add('hide');
        // questions.classList.remove('questions');
        // levels.classList.remove('hide');
        // levels.classList.add('levels');
        renderLevels();
    },
    renderSucess: function renderSucess() {
        view3.inputTitle = document.querySelector('.paginainicial input').value;
        view3.inputImage = document.querySelector(
            '.paginainicial input:nth-child(2)'
        ).value;
        const boxSucess = window.document.querySelector('.quartapagina .sucess-box');
        boxSucess.innerHTML = `
        <div class="quizz">
          <div class="gradient"></div>
          <img src="${view3.inputImage}" alt="">
          <p>${view3.inputTitle}</p>
        </div>
      `;
    },

    finishQuizz: async function finishQuizz() {
        const [quizzTitle, quizzImage] = document.querySelectorAll('.paginainicial .container-informacoes input')
        const levelBoxItems = document.querySelectorAll('.terceirapagina .level-box input')


        /*TIAGO*/
        let questions = [];
        const allCorrectAnswers = window.document.querySelectorAll('.correct-answer');
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

            questions.push({
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
                questions[i].answers.push({
                    text: wrong2,
                    image: url2,
                    isCorrectAnswer: false,
                });
            } else if (wrong2 !== '' && wrong3 !== '') {
                questions[i].answers.push(
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

        // fim tiago

console.log(questions)

        const levels = [...levelBoxItems].map(item => item.value).reduce((acc, item, i) => {
            if ((i === 0) || (i % 4 === 0 && i > 2)) {
                acc[0] = Object.assign(acc[0], { title: item })
            } else if ((i === 1) || (i % 4 === 1 && i > 2)) {
                acc[0] = Object.assign(acc[0], { minValue: item })
            } else if ((i === 2) || (i % 4 === 2 && i > 2)) {
                acc[0] = Object.assign(acc[0], { image: item })
            } else if ((i === 3) || (i % 4 === 3 && i > 2)) {
                acc[0] = Object.assign(acc[0], { text: item })
            }
            console.log("TAMANHO DO OBJ", Object.keys(acc[0]).length)
            if (Object.keys(acc[0]).length === 4) {
                acc[1].push(acc[0])
                acc[0] = {}
            }
            return acc
        }, [{}, []])
        // view3.inputTitle = document.querySelector('.paginainicial input').value;
        // view3.inputImage = document.querySelector('.paginainicial input:nth-child(2)').value;

        const objectQuizzCreate = {
            title: quizzTitle.value,
            image: quizzImage.value,
            questions: questions,
            levels: levels[1],
        };
        console.log(objectQuizzCreate)

        const promise = await createQuizz(objectQuizzCreate)

        let userItems = window.localStorage.getItem("userID")
        let newUserItems = JSON.parse(userItems)
        newUserItems.push({[`${promise.id}`]: promise.key})
        window.localStorage.setItem("userID", JSON.stringify(newUserItems))
        console.log(promise)

        // console.log(JSON.parse(window.localStorage.getItem("userID")))
        // const promise = axios.post(
        // 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes',
        // objectQuizzCreate
        // );



        // const  { image, title, questions, levels} = view3.questionStorage
        // const main = window.querySelector('main')
        // view2.buildPage2(main, )
        // const allLevelMins = document.querySelectorAll('.level-min');
        // const allLevelUrls = document.querySelectorAll('.level-url');
        // const allLevelDescriptions = document.querySelectorAll(
        //     '.level-description'
        // );
        // allLevelTitles = document.querySelectorAll('.level-title');
        // for (let i = 0; i < allLevelTitles.length; i++) {
        //     levelTitles.push(allLevelTitles[i].value);
        //     levelMins.push(allLevelMins[i].value);
        //     levelUrls.push(allLevelUrls[i].value);
        //     levelDescription.push(allLevelDescriptions[i].value);
        // }

        // const sucess = document.querySelector('quartapagina');
        // levelObjectCreate();
        // postQuizz();
        // levels.classList.add('hide');
        // levels.classList.remove('levels');
        // sucess.classList.remove('hide');
        // sucess.classList.add('sucess');
        // renderSucess();
    },

    levelObjectCreate: function levelObjectCreate() {
        view3.levelStorage = [];
        for (let i = 0; i < allLevelTitles.length; i++) {
            view3.levelStorage.push({
                title: levelTitles[i],
                image: levelUrls[i],
                text: levelDescription[i],
                minValue: levelMins[i],
            });
        }
    },

    backHome: function backHome() {
        location.reload(true);
    },

    postQuizz: function postQuizz() {
        const objectQuizzCreate = {
            title: inputTitle,
            image: inputImage,
            questions: questionStorage,
            levels: levelStorage,
        };
        const promise = createQuizz(objectQuizzCreate)
        // const promise = axios.post(
        // 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes',
        // objectQuizzCreate
        // );

        promise.catch((err) => console.log(err));
        promise.then((res) => {
            quizzAtual = res.data;
            if (localStorage.length === 0) {
                userQuizzes.push(res.data);
                userQuizzesString = JSON.stringify(userQuizzes);
                localStorage.setItem('userQuizzes', userQuizzesString);
            } else {
                const arrayAux = JSON.parse(localStorage.getItem('userQuizzes'));
                arrayAux.push(res.data);
                userQuizzesString = JSON.stringify(arrayAux);
                localStorage.setItem('userQuizzes', userQuizzesString);
            }
        });
    },







    accessQuizz: async function accessQuizz() {
        const main = window.document.querySelector('main')
        console.log(main)

        // const { image, title, questions } =  await createQuizz(quizz)
        // view.buildPage2(main, image, title, questions)
        // window.openQuizz(main)
    }

}
