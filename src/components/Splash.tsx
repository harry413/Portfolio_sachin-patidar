"use client";
import { motion } from "framer-motion";
import { useSound } from "use-sound";
import Hanging from "@/components/ui/Hanging"

export default function Splash({ onFinish }: { onFinish: () => void }) {
  const [play] = useSound("/sounds/swoosh.aiff", { volume: 0.3 });

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-slate-700 via-slate-100 to-slate-700 z-50 flex items-center justify-center overflow-hidden">
      <Hanging />
      {/* Left curtain */}
      <motion.div
        className="absolute top-0 left-0 z-20 h-full w-1/2 bg-gradient-to-r from-slate-950 to-slate-400"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1, ease: "circInOut", delay: 0.5 }}
        onAnimationStart={() => play()}
      />
      {/* Right curtain */}
      <motion.div
        className="absolute top-0 z-20 right-0 h-full w-1/2 bg-gradient-to-l from-slate-950 to-slate-400 "
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1, ease: "circInOut", delay: 0.5 }}
      />
      <motion.span 
      onAnimationComplete={onFinish}
      initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        
        transition={{ duration: 1, ease: "circInOut", delay: 0.5 }}
      className="text-6xl font-bold bg-gradient-to-b from-black/10 to-black/10 bg-clip-text text-transparent p-4 ">Loading....</motion.span><br/>
    </div>
  );
}
