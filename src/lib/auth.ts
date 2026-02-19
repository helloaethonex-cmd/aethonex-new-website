import { NextRequest } from "next/server";

export function verifyAdmin(request: NextRequest): boolean {
    const authHeader = request.headers.get("authorization");

    if (!authHeader?.startsWith("Basic ")) return false;

    const credentials = Buffer.from(authHeader.split(" ")[1], "base64").toString("utf-8");
    const [username, password] = credentials.split(":");

    return (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
    );
}

export function unauthorizedResponse() {
    return new Response(
        JSON.stringify({ success: false, error: "Unauthorized" }),
        {
            status: 401,
            headers: {
                "Content-Type": "application/json",
                "WWW-Authenticate": 'Basic realm="Admin Panel"',
            },
        }
    );
}
