'use client'
import { useRef, useEffect, useState } from "react"
import { Layout } from "../Layout"
import { useRouter } from "next/navigation"

export const FromOut = () => {
    const audioRef = useRef()
    const [isPlaying, setIsPlaying] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const l = localStorage.getItem('once')

        if(l === 'true') {
            router.push('/');
        }
    }, [router])

    const ended = () => {
        localStorage.setItem('once', 'true')
        router.push('/')
    }

    const play = () => {
        if (audioRef.current) {
            setIsPlaying(false)
            audioRef.current.play()
            audioRef.current.addEventListener('ended', () => {
                ended()
            });
        } else {

        }
    }

    return (
        <Layout className="flex h-[100vh]">
            {isPlaying ? 
                <div className="max-w-[500px] bg-neutral-900 w-80 h-60 rounded-xl p-8 m-auto mt-40 flex flex-col justify-between">
                    <p>Quando você olha muito tempo para um abismo, o abismo olha para você.</p>
                    <button className="bg-green-400 text-neutral-950 text-sm p-2 w-20 rounded-xl relative left-[73%] block" onClick={play}>Sair</button>
                </div> : <></>
            }
            
            <audio ref={audioRef} src='/song.mp3'/>
        </Layout>
    )
}