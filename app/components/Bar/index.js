'use client'
import { motion } from "framer-motion"

export const Bar = ({ title, progress }) => {
    return (
        <>
            <h2 className="text-neutral-400 text-sm ml-4">{ title }</h2>
            <div className="bg-[#508CA4] m-4 rounded-full text-sm text-neutral-900 mt-2">
                <motion.span className={`bg-[#BFD7EA]  p-2 pl-4 block rounded-full`}
                    initial={{width: 0}}
                    whileInView={{width: `${progress}%`}}
                    transition={{duration: 100 / progress}}
                >{ progress }%</motion.span>
            </div>
        </>
    )
}