"use client";
import { motion } from "framer-motion";
import styles from "./index.module.scss";
import { Github, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export const Banner = () => {
  return (
    <motion.div
      className={`${styles.container} text-white p-4 max-w-[1500px] m-auto`}
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl font-bold">
        Hey there, i&apos;m <span className="text-[#797979]">Deuzivan</span>!
      </h1>
      <h2 className="text-white text-3xl py-2 font-bold">About Me</h2>
      <p className="text-1xl text-neutral-400 font-light">
        I&apos;ve been passionate about programming since I was 14 years old,
        I&apos;ve been trying my whole life to evolve and learn with each new
        project.
        <br />
        You can see my some projects bellow!
      </p>
      <h2 className="text-white text-3xl py-2 font-bold">Languages</h2>
      <ul className="text-neutral-400">
        <li className="text-1xl font-light">- Portuguese (Native)</li>
        <li className="text-1xl font-light">- English (Basic)</li>
      </ul>

      <div className="flex justify-center pt-6 gap-4">
        <Link href="#">
          <Instagram strokeWidth={1.5} size={32} />
        </Link>
        <Link href="https://github.com/DeuzivanLima">
          <Github strokeWidth={1.5} size={32} />
        </Link>
        <Link href="#">
          <Linkedin strokeWidth={1.5} size={32} />
        </Link>
        <Link href="#">
          <Youtube strokeWidth={1.5} size={32} />
        </Link>
      </div>
    </motion.div>
  );
};
