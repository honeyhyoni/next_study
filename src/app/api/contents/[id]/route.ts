import {wait} from "@/util/promise";

export async function GET(req: Request, {params}: {params: {id: string}}) {
    await wait(3000);
    return Response.json({id: params.id, content: 'Hello World!', title: `${params.id}의 게시글`})
}