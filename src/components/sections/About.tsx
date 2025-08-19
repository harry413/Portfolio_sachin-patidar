"use client";
import { motion } from "framer-motion"
import GlassCard from "@/components/ui/GlassCard";
import data from "@/data/sachin.json";
import SplitText from "@/components/ui/SplitText";
import { TypeAnimation } from "react-type-animation"
import {FloatingShape} from "@/components/FloatingShape"

import SplashCursor from "@/components/SplashCursor"

export default function About() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-4 relative overflow-hidden">
      
      <FloatingShape />
      <SplashCursor />
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.2, ease: "easeInOut" }}
        className="w-full md:w-1/3 h-86  flex items-center justify-center relative z-20">
        <img src="/models/avatar.webp" alt="hero image" />
      </motion.div>

      {/* Text Card */}
      <GlassCard className="w-full md:w-1/2 relative z-20">
        <motion.h1 
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.2, ease: "easeInOut" }}
        className="font-orbitron text-xl md:text-4xl mb-4 font-bold">
          Hi, I’m {data.name}
        </motion.h1>
          <SplitText
          text="Frontend Developer"
          className="text-start text-2xl md:text-5xl mb-4 font-bold "
          delay={100}
          duration={1.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <p>
        <TypeAnimation
        sequence={[
          'I craft intuitive, high-performance web experiences with React, Next js and the whole modern stack. Let’s build something amazing together.',
          1000
        ]} 
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-md md:text-lg text-center"
        />
        </p>
      </GlassCard>
    </section>
  );
}