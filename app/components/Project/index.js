'use client'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export const Project = ( { title, description, src_list, href = "#" } ) => {
    const [img_index, setIMG_Index] = useState(0)

    useEffect(() => {
        const timerId = setInterval(()=> {
          img_index < src_list.length - 1 ?
            setIMG_Index(img_index + 1) :
            setIMG_Index(0)
        }, 1500);
        return () => clearInterval(timerId);
    }, [img_index, src_list]);

    return (
        <div className="text-white bg-neutral-900 p-4 m-4 rounded-xl shadow-sm">
            <Image
                className="rounded-xl w-full"
                src={src_list[img_index]}
                width={700}
                height={700}/>

            <h1 className="pt-4 text-xl text-center">{ title }</h1>
            <p className="text-sm p-4 text-neutral-500">{ description }</p>
            <Link href={href} className="bg-indigo-500 p-3 block rounded-xl text-center text-sm">VIEW</Link>
        </div>
    )
}