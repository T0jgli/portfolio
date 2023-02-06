import { motion } from "framer-motion";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";
import BackgroundCircles from "../components/BackgroundCircles";

function Notfound() {
    return (
        <div className="base">
            <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
                <BackgroundCircles />

                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
                    className="text-4xl lg:text-5xl font-semibold px-10"
                >
                    404 page not found
                </motion.h1>

                <Link href="/" legacyBehavior>
                    <button className="herobutton flex flex-row space-x-2 items-center z-20 justify-center">
                        <HiChevronLeft />
                        <span>Go back</span>
                    </button>
                </Link>
            </div>
            <h1></h1>
        </div>
    );
}

export default Notfound;
