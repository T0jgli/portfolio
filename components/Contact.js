import React from "react";
import { useForm } from "react-hook-form";
import { HiMail, HiChevronUp } from "react-icons/hi";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    async function emailSend(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "content-type": "application/json",
                    },
                });
                const json = response.json();
                if (response.status !== 200) {
                    reject(json);
                }
                resolve(json);
            } catch (error) {
                console.log(error);
                reject(error.toString());
            } finally {
                reset();
            }
        });
    }

    const onSubmit = (formData) => {
        toast.promise(() => emailSend(formData), {
            pending: "Loading...",
            success: "Successfully sent the message",
            error: {
                render({ data }) {
                    console.log(data);
                    try {
                        return data["errors"]["msg"];
                    } catch (error) {
                        return "An error happened, see on console";
                    }
                },
            },
        });
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
                className="h-screen flex relative overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center pt-24"
            >
                <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>

                <div className="flex space-x-5 items-center justify-center">
                    <HiMail className="text-secondary h-7 w-7 animate-pulse" />
                    <p className="text-2xl text-gray-200">kovalik@kvlk.hu</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 md:space-x-2">
                        <input {...register("name")} className="contactinput" placeholder="Name" type="text" />
                        <input {...register("email")} className="contactinput" placeholder="Email" type="email" />
                    </div>
                    <input {...register("subject")} placeholder="Subject" className="contactinput" type="text" />

                    <textarea {...register("message")} placeholder="Message" className="contactinput" rows={5} />
                    <button
                        type="submit"
                        className="bg-secondary py-4 px-8 rounded-md text-white font-bold text-lg duration-300 ease-in-out hover:brightness-110"
                    >
                        Submit
                    </button>
                </form>
            </motion.div>
            <button
                onClick={() => {
                    document.querySelector(`#hero`).scrollIntoView({
                        behavior: "smooth",
                    });
                }}
                className="sticky botton-5 w-full cursor-pointer snap-end"
            >
                <div className="flex items-center justify-center">
                    <HiChevronUp className="w-10 animate-bounce h-10 rounded-full filter grayscale hover:grayscale-0" />
                </div>
            </button>
        </>
    );
};

export default Contact;
