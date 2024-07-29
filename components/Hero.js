import Link from "next/link";
import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import { m } from "framer-motion";

const Hero = () => {
    const click = (id) => {
        document.querySelector(`#${id}`).scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className="pt-24 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <m.img
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
                src="/imgs/me.png"
                className="relative rounded-full h-32 w-32 mx-auto object-cover motion"
                alt="me"
            />
            <div className="z-20">
                <m.h2
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
                    className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] motion"
                >
                    System Administrator
                </m.h2>
                <m.h1
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
                    className="text-4xl lg:text-5xl font-semibold px-10 motion"
                >
                    Hi! The Name&apos;s Adam Kovalik
                </m.h1>
                <div className="pt-7 flex flex-wrap space-x-2 justify-center">
                    <button className="herobutton" onClick={() => click("about")}>
                        About
                    </button>
                    <button className="herobutton" onClick={() => click("experience")}>
                        Experience
                    </button>
                    <button className="herobutton" onClick={() => click("skills")}>
                        Skills
                    </button>
                    <button className="herobutton" onClick={() => click("certifications")}>
                        Certifications
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
