import { books } from "../db";

export async function GET() {
    return new Response(JSON.stringify(books), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export async function POST(request: Request) {
    const newBok = await request.json();
    books.push(newBok);
    return new Response(JSON.stringify(newBok), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    });
}