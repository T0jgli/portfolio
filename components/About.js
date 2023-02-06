import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="h-screen pt-24 md:pt-0 flex relative overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
                className="md:mb-0 mb-10 flex-shrink-0 w-48 h-48 rounded-full object-cover xl:w-[250px] xl:h-[250px] mx-auto"
                src="/imgs/ulok_pici.jpg"
                alt="me sitting"
            />
            <div className="px-2 md:px-10 space-y-4">
                <p className="text-base text-center max-w-3xl">
                    I&apos;m Adam Kovalik. My personal goal is to learn the newest cloud and containerization technologies. I have some hobby and open source
                    web projects. Currently working at evosoft, trying to master Linux operating system and DevOps culture. Besides I am studying Business
                    Informatics at Budapest Business School.
                </p>
                <p className="text-gray-200 text-center max-w-3xl">
                    Feel free to check my{" "}
                    <a href="https://github.com/T0jgli" target="_blank" rel="noopener noreferrer" className="text-gray-300 duration-500 hover:opacity-70">
                        GitHub
                    </a>{" "}
                    profile.
                </p>
            </div>
        </motion.div>
    );
};

export default About;
