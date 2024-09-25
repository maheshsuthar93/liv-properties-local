import '@/app/ui/index.css';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Home } from '@/app/types';
import { fetchData, getFieldValueByName } from '@/app/constants';
import { ScrollingSections } from '@/app/components';

const home: Home = await fetchData(1);

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: home.header[0].metatitle,
        description: home.header[0].metadescription,
        keywords: home.header[0].metakeyword
    };
}

export default async function Page() {
    return (
        <div className='relative flex w-[100dvw] flex-col items-center gap-[59px] overflow-hidden px-[3vw] sm:static sm:w-full sm:gap-[160px] sm:overflow-auto sm:px-[0]'>
            <Link
                href='/'
                className='fixed bottom-[30px] right-[30px] z-20 small:bottom-[40px] small:right-[64px]'
            >
                <Image
                    src='/icons/whatsapp.svg'
                    alt='Whatsapp icon'
                    width={50}
                    height={50}
                    className='rounded-full p-1 transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                />
            </Link>
            <ScrollingSections />
        </div>
    );
}
