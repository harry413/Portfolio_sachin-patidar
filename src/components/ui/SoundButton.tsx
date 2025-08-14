"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function SoundButton({ children, onClick, className }: Props) {
  const [play] = useSound("/sounds/click.wav", { volume: 0.25 });

  const handleClick = () => {
    play();
    onClick?.();
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`glass rounded-xl px-6 py-3 font-orbitron transition ${className}`}
    >
      {children}
    </motion.button>
  );
}