import React, { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import Skill from "./Skill";
import SkillsJson from "../static/skills.json";

const Skills = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
                className="min-h-screen flex relative overflow-hidden flex-col px-10 text-left max-w-full justify-evenly mx-auto items-center pt-24 motion"
            >
                <h3 className="uppercase tracking-[1rem] text-gray-500 xl:text-2xl md:text-xl text-lg">Skills</h3>
                {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">asdasd</h3> */}
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-5">
                    {SkillsJson.skills.map((e, i) => (
                        <Skill img={e.img} key={e + i} number={e.number} name={e.name} />
                    ))}
                </div>
            </motion.div>
        </>
    );
};

export default Skills;
