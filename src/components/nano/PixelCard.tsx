"use client";

import { motion } from "framer-motion";

// 🎮 Componente do Cartão Pixelado Animado
const PixelCard = () => {
  return (
    <motion.div
      initial={{ y: -5, rotateY: -15 }}
      animate={{ y: [0, -8, 0], rotateY: [0, 5, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      className="relative w-56 h-36 sm:w-64 sm:h-44 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl shadow-2xl shadow-yellow-500/50 flex flex-col justify-center items-center p-4 sm:p-6 border-2 border-yellow-300/50"
      style={{ perspective: "1000px" }}
    >
      {/* Efeito de brilho */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl"></div>
      
      {/* Chip no canto esquerdo */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-8 h-6 sm:w-10 sm:h-8 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-md shadow-lg"></div>

      {/* Números do cartão */}
      <div className="text-gray-900 text-sm sm:text-lg font-mono font-bold mt-4 sm:mt-6 tracking-wider">
        <div className="opacity-90">7707 7077</div>
        <div className="opacity-80">0777 7770</div>
      </div>

      {/* Linha simulando nome */}
      <div className="w-32 sm:w-40 h-2 sm:h-3 bg-gray-900/30 rounded mt-3 sm:mt-4"></div>

      {/* Logo no canto direito */}
      <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 flex gap-1">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 rounded-full shadow-lg"></div>
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full shadow-lg"></div>
      </div>
    </motion.div>
  );
};

export default PixelCard;
