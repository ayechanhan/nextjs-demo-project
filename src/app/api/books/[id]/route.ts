import { books } from "../../db";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const books = await request.json();

    const index = books.findIndex((b: any) => b.id === id);
    if (index === -1) {
        return new Response("Book not found", { status: 404 });
    }

    books[index] = { ...books[index], ...books };
    return new Response(JSON.stringify(books[index]), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const books = await request.json();

    const index = books.findIndex((b: any) => b.id === id);
    if (index === -1) {
        return new Response("Book not found", { status: 404 });
    }

    const deletedBook = books.splice(index, 1);
    return new Response(JSON.stringify(deletedBook[0]), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}