import '@/app/ui/global.css';
import Image from 'next/image';
import { Metadata } from 'next';
import { Header, Footer, SmoothScrolling } from '@/app/components';

export const metadata: Metadata = {
    title: {
        template: '%s | Liv Squared Properties',
        default: 'Liv Squared Properties'
    },
    description: 'The ultimate real estate agency in UAE.',
    metadataBase: new URL('https://ivang71.github.io')
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>
                <div className='helveticaNeue relative overflow-hidden bg-[#827161] bg-[url(/images/bg.jpg)] bg-contain bg-repeat font-[200] text-[#eddfd0]'>
                    <Header />
                    {/* <Image
                        src='/images/bg.jpg'
                        alt='Background'
                        width={1934}
                        height={1154}
                        className='fixed top-0 z-[0] h-full w-full'
                    /> */}
                    <main>
                        <div className='flex flex-col items-center px-[3vw] sm:px-[85px]'>
                            <SmoothScrolling>{children}</SmoothScrolling>
                        </div>
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
