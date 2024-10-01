import RegisterSchema from "@/config/models/register";
import { NextResponse } from "next/server";

import connectDB from "@/config/mongodb";
// import sendSMS from "@/config/sms/sms";


export async function POST(req: Request) {

    await connectDB();

    const formData = await req.formData();

    const name = formData.get('name')?.toString()?.trim();
    const number = formData.get('number')?.toString()?.trim();
    const gender = formData.get('gender')?.toString()?.trim();
    const company = formData.get('company')?.toString()?.trim();

    // Check if the email and password are provided
    if (!name || !number || !gender) {
        return NextResponse.json({ error: 'Please fill all the fields' }, { status: 400 })
    }

    // REgex for 6-9 10 digit indian number
    const indianMobileRegex = /^[6-9]\d{9}$/;
    if (!indianMobileRegex.test(number)) {
        return NextResponse.json({ error: 'Invalid Phone Number' }, { status: 400 });
        // return NextResponse.json({ error: 'Invalid number. Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.' });
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

        // await sendSMS(number)
    }
    catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ error: 'Error in registering !' }, { status: 400 })
    }

    return NextResponse.json({ success: 'Registered successfully!', number: number });
}