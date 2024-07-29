import React from "react";
import { m } from "framer-motion";

const ExperienceCard = ({ role, company, tasks, dates, img, skills }) => {
    return (
        <article
            onMouseMove={(e) => {
                for (const card of document.getElementsByClassName("card")) {
                    const rect = card.getBoundingClientRect(),
                        x = e.clientX - rect.left,
                        y = e.clientY - rect.top;

                    card.style.setProperty("--mouse-x", `${x}px`);
                    card.style.setProperty("--mouse-y", `${y}px`);
                }
            }}
            className="flex hover:opacity-100 
        opacity-80 transition-opacity duration-500 
        overflow-hidden relative flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#222222] p-10 card"
        >
            <m.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{ once: true }}
                src={`/imgs/${img}`}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center motion"
                alt={img + " company"}
            />
            <div className="px-0 md:px-10">
                <h4 className="text-2xl md:text-4xl font-light">{company}</h4>
                <p className="font-bold text-xl md:text-2xl mt-2">{role}</p>
                <div className="flex flex-wrap items-center gap-2 my-3">
                    {skills.map((s, i) => (
                        <img
                            alt={"Experience img " + i}
                            className="md:h-10 md:w-10 w-8 h-8 rounded-full object-cover"
                            key={s + i}
                            src={`/imgs/skills/${s}`}
                        />
                    ))}
                </div>
                <p className="uppercase md:text-base text-sm py-5 text-gray-300">{dates}</p>

                <ul className="list-disc space-y-1 md:space-y-2 ml-5 text-sm md:text-base">
                    {tasks.map((t, i) => (
                        <li key={t + i}>{t}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default ExperienceCard;
