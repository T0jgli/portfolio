import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
    return (
        <header className="sticky headerbg top-0 z-20 overflow-hidden">
            <div className="flex items-start justify-between max-w-7xl mx-auto p-5 xl:items-center ">
                <motion.div
                    initial={{
                        x: -500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1,
                        ease: [0.6, -0.05, 0.01, 0.99],
                    }}
                    className="flexbox"
                >
                    <SocialIcon
                        rel="noopener norefereer"
                        target="_blank"
                        className="cursor-pointer duration-500 hover:opacity-70"
                        url="https://github.com/T0jgli"
                        fgColor="gray"
                        bgColor="transparent"
                        aria-label="Github"
                        title="Github"
                    />
                    <SocialIcon
                        className="cursor-pointer duration-500 hover:opacity-70"
                        url="https://www.linkedin.com/in/kovalikadam/"
                        rel="noopener norefereer"
                        target="_blank"
                        fgColor="gray"
                        bgColor="transparent"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                    />
                </motion.div>
                <motion.div
                    onClick={() => {
                        document.querySelector(`#contact`).scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1,
                        ease: [0.6, -0.05, 0.01, 0.99],
                    }}
                    className="flexbox text-gray-300 cursor-pointer"
                >
                    <div className="flex items-center hover:opacity-70 duration-500">
                        <SocialIcon
                            as="button"
                            aria-label="Contact link"
                            className="cursor-pointer"
                            network="email"
                            fgColor="gray"
                            bgColor="transparent"
                        />
                        <p className="uppercase hidden md:inline-flex text-sm text-gray-300">Get In Touch</p>
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;
