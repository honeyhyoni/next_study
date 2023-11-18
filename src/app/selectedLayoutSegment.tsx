'use client'

import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation'

export default function SelectedLayoutSegmentComponent() {
    const segment = useSelectedLayoutSegment()
    const segments = useSelectedLayoutSegments()

    console.log(segment, 'segment')
    console.log(segments, 'segments')

    return (
        <div>
            <p>Active segments: useSelectedLayoutSegments -</p>
            <p>{segments.join('/')} (원래는 string 배열이라 join(&apos;/&apos;) 해 줌</p>
            <br/>
            <p>Active segment: useSelectedLayoutSegment - {segment}</p>
            <br/>
        </div>
    )
}
