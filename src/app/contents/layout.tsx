import {ChildrenProps} from "@/types/common";
import SelectedLayoutSegmentComponent from "@/app/selectedLayoutSegment";

export default function ContentsLayout({children}: ChildrenProps) {
    return (
        <>
            <SelectedLayoutSegmentComponent/>
            {children}
        </>
    )
}