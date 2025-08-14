"use client";
import { motion } from "framer-motion";
import { useSound } from "use-sound";

export default function Splash({ onFinish }: { onFinish: () => void }) {
  const [play] = useSound("/sounds/swoosh.aiff", { volume: 0.3 });

  return (
    <div className="fixed inset-0 bg-slate-950 z-50 flex items-center justify-center overflow-hidden">
      {/* Left curtain */}
      <motion.div
        className="absolute top-0 left-0 h-full w-1/2 bg-white"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1, ease: "circInOut", delay: 0.5 }}
        onAnimationStart={() => play()}
      />
      {/* Right curtain */}
      <motion.div
        className="absolute top-0 right-0 h-full w-1/2 bg-white"
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1, ease: "circInOut", delay: 0.5 }}
      />
      {/* Center line */}
      <motion.div
        className="absolute h-0.5 bg-white w-full top-1/2 -translate-y-1/2"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1, ease: "circInOut", delay: 0.5 }}
        onAnimationComplete={onFinish}
      />
    </div>
  );
}
