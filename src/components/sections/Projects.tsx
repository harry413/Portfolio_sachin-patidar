"use client";
import GlassCard from "@/components/ui/GlassCard";
import data from "@/data/sachin.json";
import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 z-20 relative flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="google text-5xl text-center mb-4 font-bold z-20 font-orbitron text-slate-100/60 "
      >
        My Work
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-slate-200/30 font-bold mb-8 z-20"
      >
        Some of the my best cup of coffee
      </motion.h2>
      <div className="grid grid-col-1 gap-8 z-20">
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
            <GlassCard className="z-10 md:mx-20">
              <div className="flex flex-col md:flex-row items-start justify-start w-full">
                <div className="overflow-hidden rounded-lg px-2 md:px-10 w-full lg:w-1/2 flex items-center justify-center">
                  <img
                    src={p.src}
                    alt={p.name}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="py-4 flex flex-col items-start justify-start w-full lg:w-1/2 px-2 md:px-10 gap-4">
                  <h3 className="font-orbitron text-2xl md:text-4xl text-slate-100/30 hover:text-slate-100/60 font-bold mb-2 mt-2">
                    {p.name}
                  </h3>
                  <p className="text-sm text-slate-300 mb-3">
                    {p.stack.join(" • ")}
                  </p>
                  <p className="text-slate-200 ">{p.desc}</p>
                </div>
              </div>
            </GlassCard>
          </motion.a>
        ))}
      </div>
      <div className="z-10 flex items-center justify-center w-50 rounded-full mt-4  bg-slate-200/60 px-2 py-4 hover:bg-slate-300/80 cursor-pointer shadow-md">
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 font-bold hover:underline text-black text-lg"
        >
          For more <IoLogoGithub className="text-2xl text-black" />
        </a>
      </div>
    </section>
  );
}
