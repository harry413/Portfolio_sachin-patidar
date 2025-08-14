"use client";
import { motion } from "framer-motion";
import data from "@/data/sachin.json";

export default function Skills() {
  return (
    <section className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-clash text-5xl text-center mb-12 font-bold"
      >
        Skills
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-4">
      <div className="w-full md:w-1/3 h-86  flex items-center justify-center">
        <img src="/models/boypo.PNG" alt="skills image" />
      </div>
      <div className="flex flex-wrap gap-4 justify-center w-full md:w-1/2">
        {data.skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass px-6 py-3 rounded-full"
          >
            {skill}
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
