import Image from 'next/image';
import s from '@/app/ui/main.module.css';
import Link from 'next/link';

export const Instagram = () => {
    return (
        <div className='verticalPanelInner instagram-sec flex flex-col px-[3vw] sm:px-[0px]'>
            <div className='home-sec_title'>
                <div className='text-[40px] font-[700] leading-[94%] small:text-[69px]'>
                    <h2>Instagram</h2>
                </div>
            </div>
            <div className='text-sm font-[200] leading-[177%] small:mt-[13px]'>
                <Link href='/' className='flex items-start'>
                    <Image
                        src='/icons/instagram.svg'
                        alt='Instagram icon'
                        width={20}
                        height={20}
                        className='mr-[9px]'
                    />
                    <h5 className='inline'>Livproperties</h5>
                </Link>
            </div>
            <div className='grid max-w-[1200px] grid-cols-[repeat(2,1fr)] grid-rows-[2fr] gap-x-0 sm:grid-cols-[repeat(4,1fr)] sm:grid-rows-[1fr] small:mt-[30px]'>
                <div className='overflow-hidden'>
                    <Image
                        src='/images/1_inst.jpg'
                        alt='Photo of a property'
                        width={300}
                        height={300}
                        className='duration-200 ease-in-out hover:scale-110 hover:transition'
                    />
                </div>
                <div className='overflow-hidden'>
                    <Image
                        src='/images/2_inst.jpg'
                        alt='Photo of a property'
                        width={300}
                        height={300}
                        className='duration-200 ease-in-out hover:scale-110 hover:transition'
                    />
                </div>
                <div className='max-[639px]:hidden overflow-hidden'>
                    <Image
                        src='/images/3_inst.jpg'
                        alt='Photo of a property'
                        width={300}
                        height={300}
                        className='duration-200 ease-in-out hover:scale-110 hover:transition'
                    />
                </div>
                <div className={`max-[639px]:hidden ${s.lastProperty}`}>
                    <Image
                        src='/images/property.jpg'
                        alt='Photo of a property'
                        width={300}
                        height={300}
                    />
                    <Link href='/'>
                        <div className={`${s.backdrop} text-[14px]`}>
                            Explore All
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
