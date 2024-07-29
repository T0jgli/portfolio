import React from "react";
import { m } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import experiencesJson from "../static/experiences.json";
import ScrollContainer from "react-indiana-drag-scroll";

const Experience = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="min-h-screen flex relative overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center pt-24 motion"
        >
            <h3 className="uppercase tracking-[1rem] text-gray-500 xl:text-2xl md:text-xl text-lg">Experience</h3>

            <ScrollContainer
                horizontal
                hideScrollbars={false}
                draggingClassName="cursor-grabbing"
                className="w-full flex space-x-5 p-10 scrollbar-thin md:scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-secondary/80 cursor-grab"
                id="cards"
            >
                {experiencesJson.experiences.map((e, i) => (
                    <ExperienceCard
                        role={e.role}
                        skills={e.skills}
                        company={e.company}
                        key={e.company + i}
                        img={e.img}
                        tasks={e.tasks}
                        dates={e.dates}
                    />
                ))}
            </ScrollContainer>
        </m.div>
    );
};

export default Experience;
