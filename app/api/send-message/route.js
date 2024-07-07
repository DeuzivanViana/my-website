import { NextResponse, NextRequest } from "next/server"
import { db } from "@/db"

export const POST = async (req) => {
    const data = await req.json()

    if(data.content.length <= 64 && data.content.length > 0) {
        await db.message.create({data: {
            content: data.content
        }})
    }

    return NextResponse.json({})
}