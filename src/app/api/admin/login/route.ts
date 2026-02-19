import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { username, password } = await request.json();

        if (
            username === process.env.ADMIN_USERNAME &&
            password === process.env.ADMIN_PASSWORD
        ) {
            const token = Buffer.from(`${username}:${password}`).toString("base64");
            return NextResponse.json({
                success: true,
                message: "Login successful",
                token: `Basic ${token}`,
            });
        }

        return NextResponse.json(
            { success: false, error: "Invalid username or password" },
            { status: 401 }
        );
    } catch {
        return NextResponse.json(
            { success: false, error: "Invalid request body" },
            { status: 400 }
        );
    }
}
