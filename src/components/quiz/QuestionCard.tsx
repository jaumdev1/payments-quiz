// src/components/quiz/QuestionCard.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import AnswerOptions from "./AnswerOptions";
import { Button } from "../nano/Button";

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
      setSelectedAnswer(null); // Reseta o estado para a próxima pergunta
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 border rounded-lg shadow-md bg-gray-800"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-yellow-400">
          Question {questionNumber} / {totalQuestions}
        </h2>
      </div>
      <p className="mb-6 text-gray-100 text-base font-medium tracking-wide">
        {question.question}
      </p>

      <AnswerOptions
        options={question.options}
        selectedAnswer={selectedAnswer}
        onSelect={handleAnswerSelection}
      />

      <div className="flex justify-end mt-8">
        <Button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className={`px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${
            selectedAnswer === null
              ? "bg-yellow-300 cursor-not-allowed opacity-50"
              : "bg-yellow-500 hover:bg-yellow-600 hover:shadow-lg transform hover:-translate-y-1"
          }`}
        >
          {questionNumber === totalQuestions ? "Finish Quiz" : "Next Question"}
        </Button>
      </div>
    </motion.div>
  );
}
