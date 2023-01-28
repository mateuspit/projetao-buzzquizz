function createQuestions() {
    let boxQuestions = document.querySelector('.segundapagina .question-box');
    let Number = Number(
        document.querySelector('.container-informacoes input:nth-child(3)').value);

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
}

function expandQuestion(req) {
    const selected = document.querySelector('.selected');
    const question = req.parentNode.parentNode;
    if (selected) {
        selected.classList.remove('selected');
        question.classList.add('selected');
    } else {
        question.classList.add('selected');
    }
}

function hide1() {
    let pagina = document.querySelector('.paginainicial')
    pagina.classList.add('hide');
}

function hide2() {
    let pagina = document.querySelector('.segundapagina')
    pagina.classList.add('hide');
}

function hide3() {
    let pagina = document.querySelector('.terceirapagina')
    pagina.classList.add('hide');
}

function renderLevels() {
    const boxLevels = document.querySelector('.terceirapagina .level-box');
    let Number = Number(
        document.querySelector('.container-informacoes input:nth-child(4)').value)
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
}

let questionStorage = [];
function createLevels() {
    const allCorrectAnswers = document.querySelectorAll(' .correct-answer');
    const allWrongAnswers1 = document.querySelectorAll('.wrong-answer1');
    const allWrongAnswers2 = document.querySelectorAll('.wrong-answer2');
    const allWrongAnswers3 = document.querySelectorAll('.wrong-answer3');
    const allQuestionColors = document.querySelectorAll('.question-color');
    const allQuestionTitles = document.querySelectorAll('.question-title');
    const allQuestionUrlsCorrects = document.querySelectorAll(
        '.question-url-correct'
    );
    const allQuestionUrls1 = document.querySelectorAll('.question-url1');
    const allQuestionUrls2 = document.querySelectorAll('.question-url2');
    const allQuestionUrls3 = document.querySelectorAll('.question-url3');

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
}

let inputTitle = document.querySelector('.container-informacoes input').value;
let inputImage = document.querySelector(
    '.container-informacoes input:nth-child(2)').value;
function renderSucess() {
    const boxSucess = document.querySelector('.quartapagina .sucess-box');
    boxSucess.innerHTML = `
    <div class="quizz">
      <div class="gradient"></div>
      <img src="${inputImage}" alt="">
      <p>${inputTitle}</p>
    </div>
  `;
}
