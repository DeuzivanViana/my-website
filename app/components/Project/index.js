"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "../Badge";

export const Project = ({
  title,
  description,
  src_list,
  href = "#",
  techs = ["Git", "Makefile"],
}) => {
  const [img_index, setIMG_Index] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      img_index < src_list.length - 1
        ? setIMG_Index(img_index + 1)
        : setIMG_Index(0);
    }, 2500);
    return () => clearInterval(timerId);
  }, [img_index, src_list]);

  return (
    <motion.div
      className="text-white bg-neutral-900 rounded-[4px] border-neutral-800 border-[1px] m-4 shadow-lg relative pb-6 p-4 overflow-hidden z-10 grid"
      initial={{ opacity: 0, scale: 0.01 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        <motion.div
          className="flex overflow-hidden absolute"
          key={src_list[img_index]}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        >
          <Image
            className="object-cover object-center h-[240px] w-[100]"
            src={src_list[img_index]}
            width={700}
            alt="image about project"
            height={700}
          />
        </motion.div>
      </AnimatePresence>

      <h1 className="text-xl ml-2 mt-2 pt-[15rem] text-neutral-300">{title}</h1>
      <p className="text-sm ml-2 pb-4 text-neutral-500 mt-3">
        {description}
      </p>

      <div className="flex items-center gap-2 ml-2 mr-2 pb-8">
        {techs.map((tech, techIndex) => (
          <Badge key={techIndex} content={tech} />
        ))}
      </div>

      <Link
        href={href}
        className="bg-neutral-700 self-end p-3 flex justify-center items-center rounded-[4px] mt-2 text-center text-[8pt] hover:bg-neutral-300 hover:text-black ml-2 mr-2 text-white"
      >
        View Project <ExternalLink className="ml-2 h-4 w-4" />
      </Link>
    </motion.div>
  );
};
