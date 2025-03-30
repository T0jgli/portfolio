import React, { useState } from "react";
import { AnimateSharedLayout, LayoutGroup, m } from "framer-motion";

const Skill = ({ img, number, name }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        // <div className="relative mx-auto w-20 h-20">
        //     <LayoutGroup id={name}>
        //         {isExpanded ? (
        //             <>
        //                 <motion.div
        //                     className="group overflow-hidden relative cursor-pointer expanded z-50"
        //                     layoutId="expandable-card"
        //                     onClick={() => setIsExpanded(false)}
        //                 >
        //                     <motion.img
        //                         layoutId="expandable-img"
        //                         alt={"Skill image "}
        //                         className="rounded-full absolute object-cover w-40 h-40 border-transparent border"
        //                         src={`/imgs/skills/${img}`}
        //                     />
        //                 </motion.div>
        //                 <motion.div
        //                     className="z-50 overflow-hidden relative cursor-pointer expanded text-black rounded-xl shadow-lg text-center bg-white h-4 p-2 ml-4 mt-8 secondary"
        //                     onClick={() => setIsExpanded(false)}
        //                     transition={{ delay: 0.3 }}
        //                     initial={{ opacity: 0, top: "6rem" }}
        //                     animate={{ opacity: 1, top: "3rem" }}
        //                 >
        //                     <p className="text-xl font-medium">{name}</p>
        //                     <p className="text-sm">{number}</p>
        //                 </motion.div>
        //             </>
        //         ) : (
        //             <>
        //                 <motion.div layoutId="expandable-card" className="w-20 h-20 z-40 flex cursor-pointer" onClick={() => setIsExpanded(true)}>
        //                     <motion.img
        //                         layoutId="expandable-img"
        //                         alt={"Skill image "}
        //                         className="rounded-full border border-gray-500 object-cover w-20 h-20 transition duration-300 ease-in-out"
        //                         src={`/imgs/skills/${img}`}
        //                     />
        //                 </motion.div>
        //             </>
        //         )}
        //     </LayoutGroup>
        // </div>

        <div className="group relative flex cursor-pointer" onClick={() => setIsExpanded(true)}>
            <m.img
                layoutId="expandable-img"
                alt={"Skill image " + name}
                className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out motion"
                src={`/imgs/skills/${img}`}
            />
            <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0">
                <div className="flex flex-col space-y-1 items-center justify-center h-full">
                    {/* <p className="text-3xl font-bold text-black opacity-100">{number}</p>
                    <div className="w-4/5 relative h-1.5 bg-gray-500 shadow-xl rounded-lg shadow-black">
                        <div className="bg-emerald-500 absolute top-0 h-1.5 rounded-lg" style={{ width: number }} />
                    </div> */}
                    <p className="text-xl text-wrap break-words text-center font-medium text-black opacity-100">{name}</p>
                </div>
            </div>
        </div>
    );
};

export default Skill;
