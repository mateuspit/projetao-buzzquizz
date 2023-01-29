const axiosBase = axios.create({
    baseURL: 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes'
});

const services = {
    getQuizzes: async function getQuizzes() {
        return await axiosBase.get("/").then(resp => resp.data)
    },
    getQuizz: async function getQuizz(id) {
        return await axiosBase.get(`/${id}`).then(resp => resp.data)
    },
    createQuizz: async function createQuizz(quizzInfo) {
        // if (quizzInfo.questions.length < 3) throw new Error("Must have at least 3 questions")
        // quizzInfo.questions.forEach(question => {
        // if (question.answers.length < 2 || question.answers.length > 4) throw new Error("Answers options must have between 2 and 4 itens")
        // })
        // if (quizzInfo.levels.length < 2) throw new Error("Must have at least 2 levels")
        return await axiosBase.post("/", quizzInfo).then(resp => resp.data)
    },
    deleteQuizz: async function deleteQuizz(id, key) {
        return await axiosBase.delete(`/${id}`, { headers: { "Secret-Key": `${key}` } })
    },
    updateQuizz: async function updateQuizz(id, key, data) {
        return await axiosBase.put(`/${id}`, data, { headers: { "Secret-Key": `${key}` } })
    }
}


export const { getQuizzes, getQuizz, createQuizz, deleteQuizz, updateQuizz } = services;