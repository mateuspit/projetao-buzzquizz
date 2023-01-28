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
    }
}