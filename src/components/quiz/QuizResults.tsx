import { motion } from "framer-motion";
import { Button } from "../nano/Button";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function QuizResults({
  score,
  totalQuestions,
  onRestart,
}: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto text-center p-6 md:p-8 rounded-lg shadow-md bg-gray-800 overflow-hidden"
    >
      {/* Ícone de Troféu */}
      <div className="flex justify-center mb-4">
        <svg
          className="w-16 h-16 text-yellow-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 8V6a4 4 0 10-8 0v2a4 4 0 00-4 4v1a2 2 0 001 1.73V18a2 2 0 002 2h2.5m3 0H16a2 2 0 002-2v-3.27A2 2 0 0019 13v-1a4 4 0 00-3-3.87z"
          />
        </svg>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-yellow-400 break-words max-w-full">
        Congratulations!
      </h2>

      <p className="text-gray-100 text-xl mb-2 font-semibold">
        You scored:{" "}
        <span className="text-yellow-400">
          {score}/{totalQuestions} ({percentage}%)
        </span>
      </p>

      <p className="text-gray-300 mb-6">
        {percentage >= 80
          ? "You're a financial systems expert! 🚀"
          : percentage >= 60
          ? "Good job! Keep up the good work. 💪"
          : "Don't worry, keep practicing and you'll improve! 🎯"}
      </p>

      <Button
        onClick={onRestart}
        className="px-8 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 hover:shadow-lg transform hover:-translate-y-1"
      >
        Play Again
      </Button>
    </motion.div>
  );
}
