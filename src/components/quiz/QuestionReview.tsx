import { motion } from "framer-motion";
import { Question } from "../../services/questions";

interface QuestionReviewProps {
  incorrectQuestions: Array<{
    question: Question;
    selectedAnswer: number;
  }>;
  onClose: () => void;
}

export default function QuestionReview({
  incorrectQuestions,
  onClose,
}: QuestionReviewProps) {
  if (incorrectQuestions.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white/10 backdrop-blur-xl border-b border-white/20 p-4 sm:p-6 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            Review Your Mistakes ({incorrectQuestions.length})
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl sm:text-3xl font-bold w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="p-4 sm:p-6">

          <div className="space-y-4 sm:space-y-6">
            {incorrectQuestions.map((item, index) => {
              const { question, selectedAnswer } = item;
              const correctOption = question.options[question.correctAnswer];
              const selectedOption = question.options[selectedAnswer];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border-l-4 border-red-500/50"
                >
                  <div className="mb-3 sm:mb-4">
                    <span className="inline-block text-xs sm:text-sm font-semibold text-yellow-400 bg-yellow-400/20 px-3 py-1.5 rounded-lg">
                      Level {question.level} {question.category ? `• ${question.category}` : ""}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-gray-100 mb-4 sm:mb-5 leading-relaxed">
                    {question.question}
                  </h3>

                  <div className="space-y-3 mb-4 sm:mb-5">
                    <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-xl p-3 sm:p-4">
                      <div className="text-xs sm:text-sm font-semibold text-red-300 mb-2">
                        Your Answer (Incorrect):
                      </div>
                      <div className="text-gray-100 text-sm sm:text-base">{selectedOption}</div>
                    </div>

                    <div className="bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-xl p-3 sm:p-4">
                      <div className="text-xs sm:text-sm font-semibold text-green-300 mb-2">
                        Correct Answer:
                      </div>
                      <div className="text-gray-100 font-semibold text-sm sm:text-base">
                        {correctOption}
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-500/50 rounded-xl p-4 sm:p-5">
                    <div className="text-xs sm:text-sm font-semibold text-blue-300 mb-2 sm:mb-3">
                      Explanation:
                    </div>
                    <div className="text-gray-200 leading-relaxed text-sm sm:text-base">
                      {question.explanation}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 sm:mt-8 flex justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-yellow-500/50 text-sm sm:text-base"
            >
              Close Review
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

