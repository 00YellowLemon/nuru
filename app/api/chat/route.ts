import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { message, userId } = body;

        let data;
        try {
            const response = await fetch("https://my-fastapi-service-339827130138.us-central1.run.app/invoke", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: message,
                    userid: userId
                }),
            });

            if (!response.ok) {
                throw new Error(`External API returned ${response.status}`);
            }

            data = await response.json();
        } catch (error) {
            console.error("External API failed, using fallback:", error);
            // Fallback mock response
            data = {
                response: `I am currently in demo mode because I couldn't reach the server. You said: "${message}"`
            };
        }

        return NextResponse.json(data);

    } catch (error: any) {
        console.error("Route Handler Error:", error.message);
        return NextResponse.json(
            { response: "I encountered an internal error. Please try again." },
            { status: 200 } // Return 200 so the UI displays the message instead of crashing
        );
    }
}
