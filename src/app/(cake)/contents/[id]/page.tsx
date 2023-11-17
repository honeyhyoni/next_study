import {Metadata, ResolvedMetadata} from "next";

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvedMetadata): Promise<Metadata> {
    const id = params.id;
    const content = await fetch(`http://localhost:3000/api/contents/${id}`).then(res => res.json());

    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: content.title,
        description: content.content,
        openGraph: {
            images: [`some-thing.jpg`, ...previousImages],
            description: '다르게 나올 수 있어? 웅!',
        }
    }
}
export default function Content({ params, searchParams }: Props) {
    return (
        <div>
            <p>this is {params.id} content</p>
            <div>contents here</div>
        </div>
    )
}