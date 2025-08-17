"use client"
import { motion} from "framer-motion"
import GlassCard from "@/components/ui/GlassCard";

export default function Education(){

return (
  <div>
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
      <GlassCard className="w-full md:w-1/2 z-20">
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-clash text-4xl font-bold mb-8"
          >
            Education
          </motion.h1>
          <div className="flex flex-col items-start justify-center w-full border-b border-gray-400 mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.2, ease: "easeInOut" }}
              className="text-lg font-bold mb-2"
            >
              B.tech (Computer Science) | Mahakal Institute Of Technology And
              Management, Ujjain | <i> 7.55 CGPA</i>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.2, ease: "easeInOut" }}
              className="text-md text-gray-300 mb-4"
            >
              Jun 2018 - May 2022
            </motion.p>
            
          </div>
          <div className="flex flex-col items-start justify-center w-full border-b border-gray-400 mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.2, ease: "easeInOut" }}
              className="text-lg font-bold mb-2"
            >
              High School 12th (Science) | Jawahar Navodaya Vidhyalaya (JNV), Ujjain | <i> 8.0 CGPA</i>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.2, ease: "easeInOut" }}
              className="text-md text-gray-300 mb-4"
            >
              Apr 2017 - Mar 2018
            </motion.p>
          </div>
          <div className="flex flex-col items-start justify-center w-full ">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.2, ease: "easeInOut" }}
              className="text-lg font-bold mb-2"
            >
              High School 10th | Jawahar Navodaya Vidhyalaya (JNV), Ujjain |  <i>8.0 CGPA</i>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.2, ease: "easeInOut" }}
              className="text-md text-gray-300 mb-4"
            >
              Apr 2015 - Mar 2016
            </motion.p>
          </div>
        </div>
      </GlassCard>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.2, ease: "easeInOut" }}
        className="w-full md:w-1/3 h-86 md:h-[600px] flex items-center justify-center z-20"
      >
        <img src="/models/boyedu.PNG" alt="exp image" />
      </motion.div>
    </section>
  </div>
);};