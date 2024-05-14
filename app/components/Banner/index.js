'use client'
import { motion } from "framer-motion"

export const Banner = () => {
    return (
        <motion.div className="text-white p-4"
            initial={{opacity: 0, x: -300}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
        >
            <h1 className="text-3xl">Hey there, i&apos;m <span className="text-[#BFD7EA]">Deuzivan</span>!</h1>
            <h2 className="text-[#BFD7EA] text-xl py-2">About Me</h2>
            <p className="text-sm text-neutral-400">I&apos;ve been passionate about programming since I was 14 years old, I&apos;ve been trying my whole life to evolve and learn with each new project.</p>
            <h2 className="text-[#BFD7EA] text-xl py-2">Languages</h2>
            <ul>
                <li className="text-sm">- Portuguese (Native)</li>
                <li className="text-sm">- English (Basic)</li>
            </ul>
        </motion.div>
    )
}