"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getQuizQuestions } from "../../services/quizService";
import QuestionCard from "../../components/quiz/QuestionCard";
import QuizResults from "../../components/quiz/QuizResults";
import QuestionReview from "../../components/quiz/QuestionReview";
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
  const [incorrectQuestions, setIncorrectQuestions] = useState<Array<{
    question: Question;
    selectedAnswer: number;
  }>>([]);
  const [showReview, setShowReview] = useState(false);

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
    const currentQ = questions[currentQuestion];
    
    if (selectedAnswer === currentQ.correctAnswer) {
      setScore(score + 1);
    } else {
      // Store incorrect question with selected answer
      setIncorrectQuestions(prev => [...prev, {
        question: currentQ,
        selectedAnswer: selectedAnswer
      }]);
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
    setIncorrectQuestions([]);
    setShowReview(false);
    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-100">
      {/* Decorative background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-800/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative flex-grow flex items-center justify-center px-4 py-6 sm:py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl"
        >
          <AnimatePresence mode="wait">
            {!quizStarted ? (
              // 🏁 Start screen
              <motion.div
                key="start-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                    Payment Systems Quiz
                  </h1>
                  <p className="text-gray-300 text-sm sm:text-base mb-8 px-4">
                    Test your knowledge about payment systems
                  </p>
                </motion.div>

                {/* 🎮 Card animation */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-8 sm:mb-10"
                >
                  <PixelCard />
                </motion.div>

                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={startQuiz}
                  className="group relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-xl shadow-lg shadow-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/60 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10">Start Quiz</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.button>
              </motion.div>
            ) : loading ? (
              // ⏳ Loading screen
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto mb-4"
                ></motion.div>
                <p className="text-yellow-400 text-xl font-semibold">Loading questions...</p>
              </motion.div>
            ) : !quizCompleted ? (
              // ❓ Quiz questions
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
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
              // 🎉 Results screen
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <QuizResults
                  score={score}
                  totalQuestions={questions.length}
                  incorrectQuestions={incorrectQuestions}
                  onRestart={resetQuiz}
                  onReview={() => setShowReview(true)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {showReview && (
        <QuestionReview
          incorrectQuestions={incorrectQuestions}
          onClose={() => setShowReview(false)}
        />
      )}
    </div>
  );
}
