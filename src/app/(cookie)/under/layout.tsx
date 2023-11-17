import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {ChildrenProps} from "@/types/common";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: '하위 페이지의 레이아웃',
    description: '하위 페이지의 레이아웃 설명',
}

export default function UnderLayout({children}: ChildrenProps) {
    return (
        <>
            <section className={'underLayout'}>
                <p className={'text-blue-800'}>Under 폴더 내의 레이아웃 UI 입니다. 해당 부분에 주로 헤더, 사이드바가 추가됨</p>
                <nav></nav>
                {children}
            </section>
        </>
    )
}
