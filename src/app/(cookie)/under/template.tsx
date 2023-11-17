import {ChildrenProps} from "@/types/common";
import {useEffect} from "react";

export default function UnderTemplate({children}: ChildrenProps) {
    return (
        <div className={'underTemplate'}>
            <p className={'text-orange-300'}>under's template</p>
            {children}
        </div>
    )
}