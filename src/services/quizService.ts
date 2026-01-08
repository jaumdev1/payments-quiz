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

export async function getQuizQuestions(
  level?: 1 | 2 | 3 | 4 | 5,
  count: number = 10
): Promise<Question[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Filter by level if specified, otherwise use all questions
      let availableQuestions = level 
        ? questions.filter(q => q.level === level)
        : questions;
      
      // Filter out questions without required fields (temporary - until all are updated)
      availableQuestions = availableQuestions.filter(q => 
        q.level && q.explanation
      );
      
      // Shuffle and select questions
      const shuffled = shuffleArray(availableQuestions);
      const selectedQuestions = shuffled.slice(0, Math.min(count, shuffled.length));
      
      // Shuffle options for each question
      const updatedQuestions = selectedQuestions.map(shuffleQuestionOptions);
      resolve(updatedQuestions);
    }, 1000);
  });
}

// Helper function to get questions by level range
export async function getQuizQuestionsByLevelRange(
  minLevel: number,
  maxLevel: number,
  count: number = 10
): Promise<Question[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let availableQuestions = questions.filter(q => 
        q.level >= minLevel && q.level <= maxLevel && q.explanation
      );
      
      const shuffled = shuffleArray(availableQuestions);
      const selectedQuestions = shuffled.slice(0, Math.min(count, shuffled.length));
      const updatedQuestions = selectedQuestions.map(shuffleQuestionOptions);
      resolve(updatedQuestions);
    }, 1000);
  });
}