const axiosBase = axios.create({
    baseURL: 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes'
});

export const services = {
    getQuizzes: async function getQuizzes() {
        return await axiosBase.get("/").then(resp => resp.data)
    },
    getQuizz: async function getQuizz(id) {
        return await axiosBase.get(`/${id}`).then(resp => resp.data)
    },
}
