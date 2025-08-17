"use client";
import GlassCard from "@/components/ui/GlassCard";
import data from "@/data/sachin.json";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-clash text-5xl text-center mb-12 font-bold z-20"
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
            <GlassCard>
              <h3 className="font-orbitron text-2xl mb-2">{p.name}</h3>
              <p className="text-sm text-slate-400 mb-3">
                {p.stack.join(" • ")}
              </p>
              <p>{p.desc}</p>
            </GlassCard>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
