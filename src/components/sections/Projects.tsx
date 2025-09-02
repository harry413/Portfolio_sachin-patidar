"use client";
import GlassCard from "@/components/ui/GlassCard";
import data from "@/data/sachin.json";
import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";

export default function Projects() {
  return (
    <section className="py-20 px-4 z-20 relative flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="google text-5xl text-center mb-12 font-bold z-20 bg-gradient-to-br from-orange-600 via-orange-50 to-orange-600 bg-clip-text text-transparent"
      >
        My Work
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 z-20">
        {data.projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <GlassCard className="z-10">
              <div className="overflow-hidden rounded-tl-lg rounded-tr-lg">
                <img src={p.src} alt={p.name} className="w-full h-auto" />
              </div>
              <h3 className="font-orbitron text-2xl mb-2 mt-2">{p.name}</h3>
              <p className="text-sm text-slate-400 mb-3">
                {p.stack.join(" • ")}
              </p>
              <p>{p.desc}</p>
            </GlassCard>
          </motion.a>
        ))}
      </div>
      <div className="z-10 flex items-center justify-center w-50 rounded-full mt-4 bg-gradient-to-br from-orange-300 via-orange-50 to-orange-400 px-2 py-4 hover:bg-gradient-to-bl cursor-pointer shadow-md">
        <a href={data.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 font-bold hover:underline text-black text-lg">
           For more {" "} 
           <IoLogoGithub className="text-2xl text-black" />
          </a>
      </div>
    </section>
  );
}
