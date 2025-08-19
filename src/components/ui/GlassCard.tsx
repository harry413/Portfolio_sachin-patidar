"use client"
import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`glass rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
