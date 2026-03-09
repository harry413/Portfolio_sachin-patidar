"use client";
import { motion } from "framer-motion";
import { useSound } from "use-sound";
import Hanging from "@/components/ui/Hanging";

export default function Splash({ onFinish }: { onFinish: () => void }) {
  const [play] = useSound("/sounds/swoosh.aiff", { volume: 0.3 });

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-b from-slate-700 via-slate-100 to-slate-700 z-50 flex items-center justify-center overflow-hidden"
      style={{ perspective: 1400 }}
      initial={{ scale: 1 }}
      animate={{ scale: 1.05 }} // 🎥 Slow camera zoom-in
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <Hanging />

      {/* 🎭 Curtain Rod */}
      <div className="absolute top-0 left-0 w-full h-6 bg-slate-950 shadow-2xl z-30" />

      {/* LEFT CURTAIN */}
      <motion.div
        className="absolute top-0 left-0 z-20 h-full w-1/2 origin-top-left"
        style={{
          background:
            "repeating-linear-gradient(90deg, #020617 0px, #334155 30px, #020617 60px)",
        }}
        initial={{ x: 0, rotateY: 0, scaleY: 1 }}
        animate={{
          x: "-100%",
          rotateY: -18,
          scaleY: 1.02,
        }}
        transition={{
          duration: 1.4,
          delay: 0.5,
          type: "spring",
          stiffness: 70,
          damping: 12,
        }}
      >
        {/* Top compression overlay */}
        <div
          className="absolute top-0 left-0 w-full h-40"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)",
          }}
        />

        {/* Fabric gather effect */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 0% 100%)",
          }}
        />

        {/* Wrinkle animation */}
        <motion.div
          className="absolute inset-0"
          animate={{ skewY: [-2, 2, -1, 0] }}
          transition={{ duration: 1.4 }}
          style={{
            background:
              "radial-gradient(circle at 30% 50%, rgba(0,0,0,0.3), transparent 70%)",
          }}
        />
      </motion.div>

      {/* RIGHT CURTAIN */}
      <motion.div
        className="absolute top-0 right-0 z-20 h-full w-1/2 origin-top-right"
        style={{
          background:
            "repeating-linear-gradient(90deg, #020617 0px, #334155 30px, #020617 60px)",
        }}
        initial={{ x: 0, rotateY: 0, scaleY: 1 }}
        animate={{
          x: "100%",
          rotateY: 18,
          scaleY: 1.02,
        }}
        transition={{
          duration: 1.4,
          delay: 0.5,
          type: "spring",
          stiffness: 70,
          damping: 12,
        }}
      >
        {/* Top compression overlay */}
        <div
          className="absolute top-0 left-0 w-full h-40"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)",
          }}
        />

        {/* Fabric gather effect */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(5% 0%, 100% 0%, 100% 100%, 5% 100%)",
          }}
        />

        {/* Wrinkle animation */}
        <motion.div
          className="absolute inset-0"
          animate={{ skewY: [2, -2, 1, 0] }}
          transition={{ duration: 1.4 }}
          style={{
            background:
              "radial-gradient(circle at 70% 50%, rgba(0,0,0,0.3), transparent 70%)",
          }}
        />
      </motion.div>

      {/* LOADING TEXT */}
      <motion.span
        onAnimationComplete={onFinish}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="text-6xl font-bold bg-gradient-to-b from-black/10 to-black/10 bg-clip-text text-transparent p-4 z-10"
      >
        Loading....
      </motion.span>
    </motion.div>
  );
}
