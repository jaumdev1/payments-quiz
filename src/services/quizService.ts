import { Question, questions } from "./questions";

function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function shuffleQuestionOptions(question: Question): Question {
  const correctOption = question.options[question.correctAnswer];
  const shuffledOptions = shuffleArray(question.options);
  const newCorrectAnswer = shuffledOptions.indexOf(correctOption);
  return { ...question, options: shuffledOptions, correctAnswer: newCorrectAnswer };
}

export async function getQuizQuestions(): Promise<Question[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 5);
      const updatedQuestions = selectedQuestions.map(shuffleQuestionOptions);
      resolve(updatedQuestions);
    }, 1000);
  });
}