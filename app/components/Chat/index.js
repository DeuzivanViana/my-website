'use client'
import { Send } from "lucide-react"
import { Layout } from "../Layout"
import { NavigationBar } from "../NavigationBar"
import { useEffect, useState } from "react"

export const Chat = () => {
    const [messages, setMessages] = useState([])
    const [content, setContent] = useState("")
    const [updateChat, setUpdateChat] = useState(0)

    useEffect(() => {
        const fetchMessages = async () => {
            const res = await (await fetch("/api/dump-messages")).json()
            setMessages(res)
        }
        fetchMessages()
    }, [updateChat])
    
    const submitMessage = async () => {
        await fetch("/api/send-message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({content: content})
        })

        setUpdateChat(updateChat + 1)
        setContent("")
    }

    return (
        <Layout className={"h-[90vh]"}>
            <NavigationBar title={`Chat Me - U${updateChat}`}/>
            <ul className="text-white m-4 flex flex-col gap-2 h-[65vh] overflow-scroll">
                {
                    messages.map((val) => {
                        return (
                            <li className="bg-neutral-900 rounded-3xl p-4" key={val.id}>
                                <p>{ val.content } </p>
                                <p className="text-neutral-500 text-sm">{ val.id }</p>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="flex justify-center items-center gap-2 bottom-2 p-4">
                <input
                    placeholder="Type here..."
                    onChange={e => setContent(e.target.value)}
                    value={content}
                    className="outline-none p-4 rounded-full block w-[80%]"
                    />
                <button
                    className="bg-neutral-800 p-4 rounded-full block"
                    onClick={submitMessage}
                    >
                    <Send className="text-white"/>
                </button>
            </div>
        </Layout>
    )
}