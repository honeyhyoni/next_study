export async function getData(): Promise<string[]> {
    return await new Promise(resolve => setTimeout(resolve, 3000)).then(() => ['1','2','3']);
}

export default async function FetchingComponent() {
    const data: string[] = await getData();
    return (
        <ul>
            {data.map((content) => (
                <li key={content}>{content}</li>
            ))}
        </ul>
    )
}