import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(request: NextRequest) {
    try {
        const { name, email, service, message } = await request.json();

        if (!name || !email || !service || !message) {
            return NextResponse.json(
                { success: false, error: "All fields are required: name, email, service, message" },
                { status: 400 }
            );
        }

        await connectDB();

        const ipAddress =
            request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            request.headers.get("x-real-ip") ||
            "unknown";
        const userAgent = request.headers.get("user-agent") || "unknown";

        const contact = await Contact.create({ name, email, service, message, ipAddress, userAgent });

        return NextResponse.json(
            {
                success: true,
                message: "Contact form submitted successfully",
                data: {
                    id: contact._id,
                    name: contact.name,
                    email: contact.email,
                    service: contact.service,
                    createdAt: contact.createdAt,
                },
            },
            { status: 201 }
        );
    } catch (error: unknown) {
        console.error("Contact submission error:", error);

        if (error instanceof Error && error.name === "ValidationError") {
            return NextResponse.json(
                { success: false, error: "Validation failed", details: error.message },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
