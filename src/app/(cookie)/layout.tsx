// @ts-ignore
import {ChildrenProps} from "@/types/common";
import {Inter} from "next/font/google";
import {Metadata} from "next";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Cookie team title',
    description: 'Generated by create next app',
    metadataBase: new URL('https://acme.com'),
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en-US',
            'de-DE': '/de-DE',
        },
    },
    openGraph: {
        images: '/og-image.png',
    },
}

export default function CookieTeamLayout({children}: ChildrenProps) {
    return (
        <html>
            <body>
            <div>
                <p className={'p-3 text-fuchsia-800'}>this is cookie team layout</p>
                {children}
            </div>
            </body>
        </html>
    )
}