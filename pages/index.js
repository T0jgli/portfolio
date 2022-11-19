import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skill from "../components/Skill";
import Skills from "../components/Skills";
import { analytics } from "../lib/firebase";

export default function Home() {
    useEffect(() => {}, []);

    return (
        <div className="base">
            <Header />

            <section id="hero" className="snap-center">
                <Hero />
            </section>

            <section id="about" className="snap-end">
                <About />
            </section>

            <section id="experience" className="snap-center">
                <Experience />
            </section>

            <section id="skills" className="snap-start">
                <Skills />
            </section>

            <section id="contact" className="snap-end">
                <Contact />
            </section>
        </div>
    );
}
