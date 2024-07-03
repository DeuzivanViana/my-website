'use client'
import { motion } from "framer-motion"
import styles from "./index.module.scss"

export const Banner = () => {
    return (
        <motion.div className={`${styles.container} text-white p-4 max-w-[1500px] m-auto`}
            initial={{opacity: 0, x: -300}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
        >
            <h1 className="text-6xl font-bold">Hey there, i&apos;m <span className="text-[#CC2936]">Deuzivan</span>!</h1>
            <h2 className="text-white text-4xl py-2 font-bold">About Me</h2>
            <p className="text-2xl text-neutral-400 font-light">I&apos;ve been passionate about programming since I was 14 years old, I&apos;ve been trying my whole life to evolve and learn with each new project.</p>
            <h2 className="text-white text-4xl py-2 font-bold">Languages</h2>
            <ul className="text-neutral-400">
                <li className="text-1xl font-light">- Portuguese (Native)</li>
                <li className="text-1xl font-light">- English (Basic)</li>
            </ul>
        </motion.div>
    )
}