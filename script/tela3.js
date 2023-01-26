function createQuestions() {
    let boxQuestions = document.querySelector('.segundapagina .question-box');
    let Number = Number(
        document.querySelector('.container-informacoes input:nth-child(3)').value);

    for (let i = 0; i < Number; i++) {
        boxQuestions.innerHTML += `
      <div class="question">
        <div class="header">
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