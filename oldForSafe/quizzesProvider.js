import { getQuizzes } from '../script/services.js';

let quizzes;

export async function quizzesData(){
    if (!quizzes) {
        quizzes = await services.getQuizzes();
    }
    return quizzes;
}