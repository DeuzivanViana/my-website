import { NextResponse, NextRequest } from "next/server"
import { db } from "@/db"

export const POST = async (req) => {
    const data = await req.json()

    await db.message.create({data: {
        content: data.content
    }})

    return NextResponse.json({})
}