import React, { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";

const Certificates = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
                className="hidden min-h-screen flex relative overflow-hidden flex-col px-10 text-left max-w-full justify-evenly mx-auto items-center pt-24"
            >
                <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">Certificates</h3>
                <div className="flex space-x-6">
                    <img
                        className="md:w-80 w-52 shadow-lg"
                        src="https://static.vecteezy.com/system/resources/previews/002/349/754/original/modern-elegant-certificate-template-free-vector.jpg"
                    ></img>
                    <img
                        className="md:w-80 w-52 shadow-lg"
                        src="https://static.vecteezy.com/system/resources/previews/002/349/754/original/modern-elegant-certificate-template-free-vector.jpg"
                    ></img>
                </div>
            </motion.div>
        </>
    );
};

export default Certificates;
