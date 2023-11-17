import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: '하위 페이지의 레이아웃',
    description: '하위 페이지의 레이아웃 설명',
}

export default function UnderLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <p>Under 폴더 내의 레이아웃 UI 입니다.</p>
                {children}
            </body>
        </html>
    )
}
