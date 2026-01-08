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
    <div className="space-y-3 sm:space-y-4 flex flex-col">
      {options.map((option, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(index)}
          className={`
            relative px-4 py-4 sm:px-5 sm:py-4 rounded-xl
            text-left font-medium text-sm sm:text-base
            transition-all duration-200
            border-2
            ${
              selectedAnswer === index
                ? "bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 border-yellow-400 text-yellow-100 shadow-lg shadow-yellow-500/30"
                : "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10 hover:border-white/20"
            }
          `}
        >
          <div className="flex items-start gap-3">
            <div className={`
              flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5
              ${selectedAnswer === index 
                ? "border-yellow-400 bg-yellow-400" 
                : "border-gray-400 bg-transparent"
              }
            `}>
              {selectedAnswer === index && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 bg-gray-900 rounded-full"
                />
              )}
            </div>
            <span className="flex-1 leading-relaxed">{option}</span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
