import { services } from './services.js';

export async function hasQuizzes(userId) {
    const quizzes = await services.getQuizzes();
    const userQuizzes = quizzes.filter(quiz => quiz.id === userId);
    return userQuizzes.length > 0;
}