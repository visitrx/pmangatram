import RegisterSchema from "@/config/models/register";
import connectDB from "@/config/mongodb";
import { NextResponse } from "next/server";


export async function POST(req: Request) {

    // await connectDB();

    const formData = await req.formData();

    const name = formData.get('name')?.toString()?.trim();
    const number = formData.get('number')?.toString()?.trim();
    const gender = formData.get('gender')?.toString()?.trim();
    const company = formData.get('company')?.toString()?.trim();

    // Check if the email and password are provided
    if (!name || !number || !gender ) {
        return NextResponse.json({ error: 'Please fill all the fields' }, { status: 400 })
    }

    const RegisterData = {
        name,
        number,
        gender,
        company
    }

    //db query for existing user
    const existingUser = await RegisterSchema.findOne({
        number: number,
    })
    if (existingUser) {
        return NextResponse.json({ error: 'Phone number already exists!' }, { status: 400 })
    }

    // Create a new user in the database
    try {
        await RegisterSchema.create(RegisterData);
        // console.log('Registered successfully!', newUser);
    }
    catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ error: 'Error in registering !' }, { status: 400 })
    }

    return NextResponse.json({ success: 'Registered successfully!' });
}