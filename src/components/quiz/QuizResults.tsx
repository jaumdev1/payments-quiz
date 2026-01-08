import { motion } from "framer-motion";
import { Question } from "../../services/questions";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  incorrectQuestions: Array<{
    question: Question;
    selectedAnswer: number;
  }>;
  onRestart: () => void;
  onReview: () => void;
}

export default function QuizResults({
  score,
  totalQuestions,
  incorrectQuestions,
  onRestart,
  onReview,
}: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  // Classify participant by level
  const getLevelClassification = () => {
    if (percentage >= 90) {
      return { level: "Arquiteto de Meios de Pagamento", emoji: "🟡", color: "text-yellow-400" };
    } else if (percentage >= 75) {
      return { level: "Especialista em ISO 8583", emoji: "⚡", color: "text-yellow-300" };
    } else if (percentage >= 60) {
      return { level: "Analista de Autorização", emoji: "🔵", color: "text-blue-400" };
    } else {
      return { level: "Iniciante de Pagamentos", emoji: "🟢", color: "text-green-400" };
    }
  };

  const classification = getLevelClassification();

  // Get level distribution from incorrect questions
  const getLevelDistribution = () => {
    const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    incorrectQuestions.forEach(item => {
      distribution[item.question.level] = (distribution[item.question.level] || 0) + 1;
    });
    return distribution;
  };

  const levelDistribution = getLevelDistribution();

  // Suggest next topics
  const getSuggestions = () => {
    const suggestions = [];
    if (levelDistribution[5] > 0) {
      suggestions.push("EMV and chip authentication");
      suggestions.push("ARQC/ARPC and cryptography");
    }
    if (levelDistribution[4] > 0) {
      suggestions.push("Encoding (ASCII/EBCDIC)");
      suggestions.push("ISO 8583 field structure");
    }
    if (levelDistribution[3] > 0) {
      suggestions.push("MTI and message types");
      suggestions.push("Bitmaps and message structure");
    }
    if (levelDistribution[2] > 0) {
      suggestions.push("Complete transaction flow");
      suggestions.push("Timeouts and retries");
    }
    if (levelDistribution[1] > 0 || suggestions.length === 0) {
      suggestions.push("Authorization fundamentals");
      suggestions.push("Role of acquirer, card scheme, and issuer");
    }
    return suggestions.slice(0, 4);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl mx-auto text-center p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden"
    >
      {/* Score Circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="relative w-32 h-32 mx-auto mb-6"
      >
        <svg className="w-32 h-32 transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-700/30"
          />
          <motion.circle
            cx="64"
            cy="64"
            r="56"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 56}`}
            initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
            animate={{ strokeDashoffset: 2 * Math.PI * 56 * (1 - percentage / 100) }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-yellow-400"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">{percentage}%</div>
            <div className="text-xs text-gray-400">{score}/{totalQuestions}</div>
          </div>
        </div>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"
      >
        Congratulations!
      </motion.h2>

      {/* Classification */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`mb-6 text-xl sm:text-2xl font-bold ${classification.color}`}
      >
        {classification.emoji} {classification.level}
      </motion.div>

      {/* Message */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg px-4"
      >
        {percentage >= 90
          ? "Outstanding performance! You've mastered payment systems! 🚀"
          : percentage >= 75
          ? "Excellent work! You have deep knowledge of ISO 8583! 💪"
          : percentage >= 60
          ? "Good job! You understand transaction flows well! 🎯"
          : "Keep practicing! Review the explanations to improve! 📚"}
      </motion.p>

      {/* Error warning */}
      {incorrectQuestions.length > 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-6 p-4 sm:p-5 bg-red-500/20 backdrop-blur-sm rounded-xl border border-red-500/50"
        >
          <p className="text-red-300 font-semibold mb-1 text-base sm:text-lg">
            You missed {incorrectQuestions.length} question{incorrectQuestions.length > 1 ? 's' : ''}
          </p>
          <p className="text-gray-300 text-sm">
            Review your mistakes to learn from them!
          </p>
        </motion.div>
      )}

      {/* Suggestions */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mb-6 sm:mb-8 text-left bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/10"
      >
        <h3 className="text-yellow-400 font-semibold mb-3 text-base sm:text-lg">Suggested Next Topics:</h3>
        <ul className="text-gray-300 text-sm sm:text-base space-y-2">
          {getSuggestions().map((suggestion, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">•</span>
              <span>{suggestion}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
      >
        {incorrectQuestions.length > 0 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onReview}
            className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm sm:text-base font-semibold transition-all duration-200 shadow-lg shadow-blue-500/50"
          >
            Review Mistakes ({incorrectQuestions.length})
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 text-sm sm:text-base font-semibold transition-all duration-200 shadow-lg shadow-yellow-500/50"
        >
          Play Again
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
