import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { connectToDatabase } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing email or password" },
        { status: 400 }
      );
    }
    await connectToDatabase();
    const exitingUser = await User.findOne({ email });
    if (exitingUser) {
      return NextResponse.json(
        { error: "User already registered" },
        { status: 400 }
      );
    }
    await User.create({ email, password });
    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Register error", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
