"use client";
import GlassCard from "@/components/ui/GlassCard";
import data from "@/data/sachin.json";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { BiLogoGmail } from "react-icons/bi";
import { FcPhoneAndroid } from "react-icons/fc";


export default function Contact() {
  return (
    <section className="py-20 flex flex-col md:flex-row items-center justify-center ">
      <div className="w-full md:w-1/3 h-86 py-8 flex items-center justify-center mb-8 md:mb-0 z-20">
        <img src="/models/boycon.PNG" alt="contact image" />
      </div>
      <GlassCard className="max-w-xl mx-auto text-center z-20">
        <h2 className="font-clash text-4xl mb-4 border-b border-gray-200">Get In Touch</h2>
        <p className="mb-6">
          Feel free to drop an e-mail or call me. Let’s create something great!
        </p>
        <div className="flex items-center justify-center">
          <a href={data.github} target="_blank" rel="noopener noreferrer" className="mx-2">
            <IoLogoGithub className="text-2xl hover:text-black" />
          </a>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2">
            <TbBrandLinkedinFilled className="text-2xl hover:text-blue-500" />
          </a>
          <a href={`mailto:${data.email}`} className="mx-2">
            <BiLogoGmail className="text-2xl hover:text-red-500" />
          </a>
        </div>
      </GlassCard>
    </section>
  );
}
