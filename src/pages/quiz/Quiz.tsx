"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getQuizQuestions } from "../../services/quizService";
import QuestionCard from "../../components/quiz/QuestionCard";
import QuizResults from "../../components/quiz/QuizResults";
import { Question } from "../../services/questions";
import PixelCard from "../../components/nano/PixelCard";

// 🎮 Componente do Cartão de Crédito Pixelado estilo Mario Bros

export default function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = async () => {
    setLoading(true);
    setQuizStarted(true);
    try {
      const data = await getQuizQuestions();
      setQuestions(data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNextQuestion = (selectedAnswer: number) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = async () => {
    setLoading(true);
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setQuizStarted(false);
    setQuestions([]);
    setLoading(false);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gray-900 text-gray-100 font-minecraft">
      <div className="flex-grow flex items-center justify-center px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <AnimatePresence mode="wait">
            {!quizStarted ? (
              // 🏁 Tela inicial com o Cartão de Crédito estilo Mario Bros e botão Play
              <motion.div
                key="start-screen"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h1 className="text-3xl font-bold text-yellow-400 mb-6 pixel-font">
                  Payment Power-Up Quiz!
                </h1>

                {/* 🎮 Animação do Cartão Pixelado */}
                <div className="flex justify-center mb-6">
                  <PixelCard />
                </div>

                <button
                  onClick={startQuiz}
                  className="px-6 py-3 text-lg bg-yellow-400 text-gray-900 rounded-lg font-bold hover:bg-yellow-500 transition pixel-font"
                >
                  Start Quiz
                </button>
              </motion.div>
            ) : loading ? (
              // ⏳ Tela de carregamento
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-yellow-400 text-2xl font-bold text-center"
              >
                Loading...
              </motion.div>
            ) : !quizCompleted ? (
              // ❓ Perguntas do quiz
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <QuestionCard
                  question={questions[currentQuestion]}
                  questionNumber={currentQuestion + 1}
                  totalQuestions={questions.length}
                  onAnswerSubmit={handleNextQuestion}
                />
              </motion.div>
            ) : (
              // 🎉 Tela de resultado
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <QuizResults
                  score={score}
                  totalQuestions={questions.length}
                  onRestart={resetQuiz}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
