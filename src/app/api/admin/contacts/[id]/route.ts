import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { verifyAdmin, unauthorizedResponse } from "@/lib/auth";
import mongoose from "mongoose";
import type { ContactStatus } from "@/types";

function isValidObjectId(id: string): boolean {
    return mongoose.Types.ObjectId.isValid(id);
}

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    if (!verifyAdmin(request)) return unauthorizedResponse();

    const { id } = await params;
    if (!isValidObjectId(id)) {
        return NextResponse.json({ success: false, error: "Invalid contact ID" }, { status: 400 });
    }

    try {
        await connectDB();
        const contact = await Contact.findById(id).lean();
        if (!contact) {
            return NextResponse.json({ success: false, error: "Contact not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: contact });
    } catch (error) {
        console.error("Get contact error:", error);
        return NextResponse.json({ success: false, error: "Failed to fetch contact" }, { status: 500 });
    }
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    if (!verifyAdmin(request)) return unauthorizedResponse();

    const { id } = await params;
    if (!isValidObjectId(id)) {
        return NextResponse.json({ success: false, error: "Invalid contact ID" }, { status: 400 });
    }

    try {
        const { status } = await request.json();
        const validStatuses: ContactStatus[] = ["new", "read", "replied", "closed"];

        if (!status || !validStatuses.includes(status)) {
            return NextResponse.json(
                { success: false, error: `Status must be one of: ${validStatuses.join(", ")}` },
                { status: 400 }
            );
        }

        await connectDB();
        const contact = await Contact.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        ).lean();

        if (!contact) {
            return NextResponse.json({ success: false, error: "Contact not found" }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            message: `Status updated to "${status}"`,
            data: contact,
        });
    } catch (error) {
        console.error("Update contact error:", error);
        return NextResponse.json({ success: false, error: "Failed to update contact" }, { status: 500 });
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    if (!verifyAdmin(request)) return unauthorizedResponse();

    const { id } = await params;
    if (!isValidObjectId(id)) {
        return NextResponse.json({ success: false, error: "Invalid contact ID" }, { status: 400 });
    }

    try {
        await connectDB();
        const contact = await Contact.findByIdAndDelete(id).lean();

        if (!contact) {
            return NextResponse.json({ success: false, error: "Contact not found" }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            message: "Contact deleted successfully",
            data: { id: contact._id, name: contact.name },
        });
    } catch (error) {
        console.error("Delete contact error:", error);
        return NextResponse.json({ success: false, error: "Failed to delete contact" }, { status: 500 });
    }
}
