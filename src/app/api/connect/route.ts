import connectDB from "@/config/mongodb";
import { NextResponse } from "next/server";


export async function GET() {
    const db = await connectDB();

    if (!db) {
        return NextResponse.json({ error: 'Internal Server Error' });
    }

    console.log('Connected to MongoDB');
    

    return NextResponse.json({ success: 'Connected' })

};