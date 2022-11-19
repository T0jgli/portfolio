import React, { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";

const Skill = ({ img, number, name }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="group relative flex cursor-pointer" onClick={() => setIsExpanded(true)}>
            <motion.img
                layoutId="expandable-img"
                alt={"Skill image " + name}
                className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
                src={`/imgs/skills/${img}`}
            />
            <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0">
                <div className="flex flex-col items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black opacity-100">{number}</p>
                    <p className="text-sm font-medium text-black opacity-100">{name}</p>
                </div>
            </div>
        </div>
    );
};

export default Skill;

// {isExpanded ? (
//     <>
//         <motion.div className="card expanded z-40" layoutId="expandable-card" onClick={() => setIsExpanded(false)}>
//             <motion.img
//                 layoutId="expandable-img"
//                 alt={"Skill image " + name}
//                 className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
//                 src={`/imgs/skills/${img}`}
//             />
//         </motion.div>
//     </>
// ) : (
//     <motion.div
//         className="group relative flex cursor-pointer card compact"
//         layoutId="expandable-card"
//         onClick={() => {
//             console.log("asd");
//             setIsExpanded(true);
//         }}
//     >
//         <motion.img
//             // initial={{ y: 200 }}
//             // transition={{ duration: 1.5 }}
//             // whileInView={{ opacity: 1, y: 0 }}
//             alt={"Skill image " + name}
//             className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
//             src={`/imgs/skills/${img}`}
//         />
//         <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0">
//             <div className="flex flex-col items-center justify-center h-full">
//                 <p className="text-3xl font-bold text-black opacity-100">{number}</p>
//                 <p className="text-sm font-medium text-black opacity-100">{name}</p>
//             </div>
//         </div>
//     </motion.div>
// )}
