'use client'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const Project = ( { title, description, src_list, href = "#"} ) => {
    const [img_index, setIMG_Index] = useState(0)

    useEffect(() => {
        const timerId = setInterval(()=> {
          img_index < src_list.length - 1 ?
            setIMG_Index(img_index + 1) :
            setIMG_Index(0)
        }, 2500);
        return () => clearInterval(timerId);
    }, [img_index, src_list]);

    return (
        <motion.div className="text-white bg-neutral-900 rounded-xl m-4 shadow-sm relative pb-6 p-2 overflow-hidden z-10 grid"
            initial={{opacity: 0, scale: 0.01}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.3}}
        >
            <AnimatePresence>
                <motion.div className="flex overflow-hidden absolute p-4"
                    key={src_list[img_index]}
                    initial={{ x: 300, opacity: 0}}
                    animate={{ x: 0, opacity: 1}}
                    exit={{ x: -300, opacity: 0}}
                >
                    <Image
                        className="rounded-xl object-cover object-center h-[180px] w-[100]"
                        src={src_list[img_index]}
                        width={700}
                        alt="image about project"
                        height={700}/>
                </motion.div>
            </AnimatePresence>

            <h1 className="text-lg text-center pt-[13.5rem] text-neutral-300">{ title }</h1>
            <p className="text-sm p-4 text-neutral-500">{ description }</p>

            <Link href={href} className="bg-neutral-700 self-end p-3 block rounded-xl text-center text-sm hover:bg-neutral-300 hover:text-black ml-4 mr-4 text-white">VIEW</Link>
        </motion.div>
    )
}