import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { verifyAdmin, unauthorizedResponse } from "@/lib/auth";
import type { ContactStats } from "@/types";

export async function GET(request: NextRequest) {
    if (!verifyAdmin(request)) return unauthorizedResponse();

    try {
        await connectDB();

        const { searchParams } = request.nextUrl;
        const status = searchParams.get("status");
        const page = parseInt(searchParams.get("page") || "1", 10);
        const limit = parseInt(searchParams.get("limit") || "20", 10);
        const skip = (page - 1) * limit;

        const validStatuses = ["new", "read", "replied", "closed"];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filter: Record<string, any> = {};
        if (status && validStatuses.includes(status)) {
            filter.status = status;
        }

        const [contacts, total, aggregatedStats] = await Promise.all([
            Contact.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
            Contact.countDocuments(filter),
            Contact.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }]),
        ]);

        const stats: ContactStats = { total: 0, new: 0, read: 0, replied: 0, closed: 0 };
        for (const s of aggregatedStats) {
            const key = s._id as keyof ContactStats;
            if (key in stats) {
                stats[key] = s.count;
                stats.total += s.count;
            }
        }

        return NextResponse.json({
            success: true,
            data: contacts,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
            stats,
        });
    } catch (error) {
        console.error("Admin contacts list error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to fetch contacts" },
            { status: 500 }
        );
    }
}
