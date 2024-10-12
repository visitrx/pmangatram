import connectDB from "@/config/mongodb";
import { NextResponse } from "next/server";


export async function GET() {

    const db = await connectDB();

    try {
        const data = await db?.collection("gifts").aggregate([{ $sample: { size: 40 } }]).toArray();
        return NextResponse.json(data, { status: 200 })
    } catch (error) {
        console.log(error);

        return NextResponse.json({ error: 'Error in fetching data !' }, { status: 400 })
    }
}