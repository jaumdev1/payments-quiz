// src/components/quiz/QuestionCard.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import AnswerOptions from "./AnswerOptions";

interface QuestionCardProps {
  question: {
    question: string;
    options: string[];
  };
  questionNumber: number;
  totalQuestions: number;
  onAnswerSubmit: (selectedAnswer: number) => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswerSubmit,
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswerSelection = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      onAnswerSubmit(selectedAnswer);
      setSelectedAnswer(null); // Reset state for next question
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6 sm:p-8"
    >
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-yellow-400">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-sm text-gray-400">
            {Math.round((questionNumber / totalQuestions) * 100)}%
          </span>
        </div>
        <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            transition={{ duration: 0.3 }}
            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-6 sm:mb-8 leading-relaxed">
        {question.question}
      </h2>

      {/* Answer options */}
      <AnswerOptions
        options={question.options}
        selectedAnswer={selectedAnswer}
        onSelect={handleAnswerSelection}
      />

      {/* Submit button */}
      <div className="flex justify-end mt-6 sm:mt-8">
        <motion.button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          whileHover={selectedAnswer !== null ? { scale: 1.05 } : {}}
          whileTap={selectedAnswer !== null ? { scale: 0.95 } : {}}
          className={`px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-white text-sm sm:text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${
            selectedAnswer === null
              ? "bg-gray-700 cursor-not-allowed opacity-50"
              : "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 shadow-lg shadow-yellow-500/50"
          }`}
        >
          {questionNumber === totalQuestions ? "Finish Quiz" : "Next Question"}
        </motion.button>
      </div>
    </motion.div>
  );
}
