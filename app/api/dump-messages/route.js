import { NextResponse } from "next/server"
import { db } from "@/db"

export const dynamic = "force-dynamic"

export const GET = async (req) => {
    const queries = await db.message.findMany()
    return NextResponse.json(queries.reverse())
}