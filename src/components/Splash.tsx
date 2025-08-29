"use client";
import { motion } from "framer-motion";
import { useSound } from "use-sound";

export default function Splash({ onFinish }: { onFinish: () => void }) {
  const [play] = useSound("/sounds/swoosh.aiff", { volume: 0.3 });

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-slate-100 via-slate-700 to-slate-200 z-50 flex items-center justify-center overflow-hidden">
      {/* Left curtain */}
      <motion.div
        className="absolute top-0 left-0 z-20 h-full w-1/2 bg-gradient-to-b from-slate-950 via-slate-400 to-slate-950"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1, ease: "circInOut", delay: 0.5 }}
        onAnimationStart={() => play()}
      />
      {/* Right curtain */}
      <motion.div
        className="absolute top-0 z-20 right-0 h-full w-1/2 bg-gradient-to-b from-slate-950 via-slate-400 to-slate-950"
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1, ease: "circInOut", delay: 0.5 }}
      />
      <motion.span 
      onAnimationComplete={onFinish}
      initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "circInOut", delay: 0.5 }}
      className="text-5xl font-bold bg-gradient-to-br from-pink-600 via-orange-100 to-pink-500  bg-clip-text text-transparent">Sachin Patidar</motion.span>
      {/* Center line */}
      <motion.div
        className="absolute h-0.5 bg-gradient-to-br from-pink-800 via-orange-900 to-pink-800  w-full top-1/2 translate-y-1/2"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1, ease: "circInOut", delay: 0.5 }}
        onAnimationComplete={onFinish}
      />   
    </div>
  );
}
