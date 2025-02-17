"use client";

import { motion } from "framer-motion";

// 🎮 Componente do Cartão Pixelado Animado
const PixelCard = () => {
  return (
    <motion.div
      initial={{ y: -5 }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      className="relative w-64 h-44 bg-gradient-to-r from-blue-500 to-blue-700 border-4 border-black rounded-lg flex flex-col justify-center items-center pixelated-card p-4"
    >
      {/* Chip amarelo no canto esquerdo */}
      <div className="absolute top-4 left-4 w-10 h-8 bg-yellow-300 border-2 border-black"></div>

      {/* Números do cartão em pixel font */}
      <div className="text-white text-lg font-mono pixel-font mt-6 tracking-widest">
        7707 7077 0777 7770
      </div>

      {/* Linha branca simulando nome do cartão */}
      <div className="w-40 h-3 bg-white mt-4"></div>

      {/* Logo vermelho e preto no canto direito inferior */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <div className="w-6 h-6 bg-black rounded-full"></div>
        <div className="w-6 h-6 bg-red-500 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default PixelCard;
