"use client"
import { motion } from "framer-motion"
import GlassCard from "@/components/ui/GlassCard";

export default function Experience(){

return(
     <div>
            <section className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
                <GlassCard className="w-full md:w-1/2 z-20">
               <div className="flex flex-col items-center justify-center w-full">
                  <motion.h1 
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: 2, duration: 0.2, ease: "easeInOut" }}
                     className="font-clash text-4xl font-bold mb-8">
                        Experience
                  </motion.h1>
                     <div className="flex flex-col items-start justify-center">
                        <motion.h1 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.2, ease: "easeInOut" }}
                        className="text-lg font-bold mb-2">
                           Frontend Developer | Impetrosys Software Solution Pvt Ltd
                        </motion.h1>
                        <motion.p
                        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.2, ease: "easeInOut" }} 
                        className="text-md text-gray-300 mb-4">Duration: 2 Years(Jan-2023 to Dec-2024)</motion.p>
                        <motion.p
                        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.2, ease: "easeInOut" }}
                        >
                           I served as a Frontend Developer at Impetrosys Software Solution, Where i was responsible
                           for developing and maintaining high-performance, user-centric web applications. My core expertise
                           lies in React and Next.js, which i leveraged to build scalable and reusable components.
                        </motion.p>
                        <motion.p
                        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.2, ease: "easeInOut" }}
                        >
                           <strong>I focused on:</strong><br/>
                           Building and developing front-end solution that could grow and adapt to envolving buisness requirments
                           <br/>
                           Designing and implimenting intutive and engaging user experiences through mordern front-end practices.
                           <br/>
                           Performance optimization to identify and resolving bottlenecks and improve application speed and efficiency.
                        </motion.p>
                        <br/>
                        <motion.p
                        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.2, ease: "easeInOut" }}
                        >
                           This role gave me hand-on experience in the full development lifecycle, from initial design to
                           deployment and optimization.
                        </motion.p>
                     </div>
               </div>
               </GlassCard>
               <motion.div 
               initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.2, ease: "easeInOut" }}
               className="w-full md:w-1/3 h-86 md:h-[600px] flex items-center justify-center z-20">
                  <img src="/models/boyexp.PNG" alt="exp image" />
               </motion.div>
            </section>
     </div>
)}