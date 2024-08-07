import { AnimatePresence, domAnimation, LayoutGroup, LazyMotion, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skill from "../components/Skill";
import Skills from "../components/Skills";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Certificates from "../components/Certficates";

export default function Home() {
    useEffect(() => {}, []);

    return (
        <LazyMotion features={domAnimation}>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

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

                <section id="certifications" className="snap-start">
                    <Certificates />
                </section>

                <section id="contact" className="snap-end">
                    <Contact />
                </section>
            </div>
        </LazyMotion>
    );
}
