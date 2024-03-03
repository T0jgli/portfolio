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
                className="min-h-screen flex relative overflow-hidden flex-col px-10 text-left max-w-full justify-evenly mx-auto items-center pt-24"
            >
                <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">Certifications</h3>
                <div className="flex space-x-6">
                    <a
                        aria-label="AWS Certified Cloud Practitioner"
                        title="AWS Certified Cloud Practitioner"
                        href="https://www.credly.com/badges/fc8a7154-688e-42ae-bb7b-f25a6d8ecbe8/public_url"
                        target="_blank"
                        rel="noopener norefereer"
                    >
                        <img
                            className="md:w-80 w-52 hover:opacity-90 duration-300"
                            alt="AWS Certified Cloud Practitioner"
                            src="https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
                        ></img>
                    </a>
                    <a
                        aria-label="AWS Certified Developer - Associate"
                        title="AWS Certified Developer - Associate"
                        href="https://www.credly.com/badges/ceb26feb-7cde-41bb-9b97-a33da42e39ef/public_url"
                        target="_blank"
                        rel="noopener norefereer"
                    >
                        <img
                            className="md:w-80 w-52 hover:opacity-90 duration-300"
                            alt="AWS Certified Developer - Associate"
                            src="https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png"
                        ></img>
                    </a>
                </div>
            </motion.div>
        </>
    );
};

export default Certificates;
