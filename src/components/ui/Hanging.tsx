"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hanging() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // show only first time site loads
    const alreadyShown = sessionStorage.getItem("entryShown");

    if (!alreadyShown) {
      setVisible(true);
      sessionStorage.setItem("entryShown", "true");

      const timer = setTimeout(() => {
        setVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 flex justify-center items-start pointer-events-none z-50">
          
          {/* Rope */}
          {/* <div className="absolute top-0 w-[2px] h-24 bg-gray-400" /> */}

          {/* Hanging Object */}
          <motion.img
            src="/hanging.png"   // 👈 replace with your image path
            alt="Hanging"
            className="w-80 h-80 select-none"
            
            initial={{ y: -200, opacity: 0, rotate: 0 }}
            animate={{
              y: -20,
              opacity: 1,
              rotate: [0, 8, -8, 6, -6, 3, -3, 0], // natural swing
            }}
            exit={{ opacity: 0, scale: 0 }}
            
            transition={{
              y: { type: "spring", stiffness: 120, damping: 12 },
              opacity: { duration: 0.8 },
              rotate: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }
            }}

            style={{
              transformOrigin: "top center"
            }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
