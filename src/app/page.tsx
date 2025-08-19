"use client";
import { useState, useEffect } from "react";
import Splash from "@/components/Splash";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import { fairyDustCursor } from "cursor-effects";


export default function Home() {
  const [show, setShow] = useState(false);
   useEffect(() => {
    fairyDustCursor();
    return () => {};
   }, [])
   
  return (
    <>
      {!show && <Splash onFinish={() => setShow(true)} />}
      {show && (
        <main className="animated-gradient min-h-screen">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
      )}
    </>
  );
}
