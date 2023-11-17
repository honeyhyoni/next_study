import {Suspense} from "react";
import FetchingComponent from "@/app/(cake)/contents/fetching-component";
import Under from "@/app/(cookie)/under/page";

export default async function Contents() {
    return (
        <div>
            <p>here are contents</p>
            <Suspense fallback={<Under/>}>
                <FetchingComponent/>
            </Suspense>
        </div>
    )
}