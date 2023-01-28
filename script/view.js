export const view = {
    createQuizzMainTitleTemplate: function createQuizzMainTitleTemplate(title, image) {
        return `<p style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})">${title}</p>`;
    },
    createQuizzContainerTemplate: function createQuizzContainerTemplate(id) {
        return `<div>
                    <div id="${id}" class="quizz-container">
                        ###!###
                    </div>
                </div>`;
    },
    createTitleTemplate: function createTitleTemplate(title, color) {
        return `<div style="background-color: ${color}">
                    <p>${title}</p>
                </div>`;
    },
    createAnswersContainers: function createAnswersContainers() {
        return `<div class="answer-container">
                        <div>
                        ###!###
                        </div>
                </div>`;
    },

    createAnswersItems: function createAnswersItems({ image = '', text = '' }, id) { //DEVE SER JOGADA DENTRO DE UM DIV A CADA DUAS
        return `<div id="answer-${id}"class="answer-item">
                    <img onclick="selectAnswer(event)" src="${image}" alt="${text}"> 
                    <p>${text}</p>
                </div>`;
    },
}