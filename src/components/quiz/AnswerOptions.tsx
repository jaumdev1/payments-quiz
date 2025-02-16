// src/components/quiz/AnswerOptions.tsx
import { motion } from "framer-motion";

interface AnswerOptionsProps {
  options: string[];
  selectedAnswer: number | null;
  onSelect: (index: number) => void;
}

export default function AnswerOptions({
  options,
  selectedAnswer,
  onSelect,
}: AnswerOptionsProps) {
  return (
    <div className="space-y-6 flex flex-col">
      {options.map((option, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          onClick={() => onSelect(index)}
          className={`
            px-4 py-3 rounded
            text-white text-left font-semibold
            transition-colors duration-200
            ${
              selectedAnswer === index
                ? "bg-yellow-600"
                : "bg-yellow-500 hover:bg-yellow-600"
            }
          `}
        >
          {option}
        </motion.button>
      ))}
    </div>
  );
}
