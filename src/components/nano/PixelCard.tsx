"use client";

import { motion } from "framer-motion";

// 🎮 Componente do Cartão Pixelado Animado
const PixelCard = () => {
  return (
    <motion.div
      initial={{ y: -5 }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      className="relative w-64 h-44 bg-gradient-to-r from-yellow-300 to-yellow-500 border-4 border-black rounded-lg flex flex-col justify-center items-center pixelated-card p-4"
    >
      {/* Chip amarelo no canto esquerdo */}
      <div className="absolute top-4 left-4 w-10 h-8 bg-yellow-600 border-2 border-black rounded-lg"></div>

      {/* Números do cartão em pixel font */}
      <div className="text-black text-lg font-mono pixel-font mt-6 tracking-widest">
        7707 7077 0777 7770
      </div>

      {/* Linha branca simulando nome do cartão */}
      <div className="w-40 h-3 bg-white mt-4"></div>

      {/* Logo vermelho e preto no canto direito inferior */}
      <div className="absolute bottom-2 right-2 w-10 h-10">
        <div className="w-10 h-10 right-7 bg-black rounded-full absolute"></div>
        <div className="w-10 h-10  bg-red-500 rounded-full absolute "></div>
      </div>
    </motion.div>
  );
};

export default PixelCard;
