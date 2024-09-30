import Link from 'next/link';
import Image from 'next/image';
import { CareerCardProps } from '@/app/types';

const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
    // console.log(data);
    return (
        <div className='mt-[21px] flex flex-wrap justify-between gap-x-[30px] gap-y-[20px] border-b border-solid border-[#eddfd0] border-opacity-60 pb-[35px] sm:flex-nowrap md:gap-x-[50px] lg:gap-x-[100px]'>
            <div>
                <div className='helveticaNeue text-[30px] font-[400] leading-[39px]'>{career.heading}</div>
                <div className='mt-[7px] gothamMedium text-[20px] leading-[26px]

'>
                    {career.subheading}
                </div>
                <div
                    className='ellipse-text ellipse-text-2 mt-[10px] helveticaNeue text-[16px] font-[400] leading-[25.92px]'
                    dangerouslySetInnerHTML={{
                        __html: career.description
                    }}
                ></div>
                <div className='mt-[19px] flex gap-[15px]'>
                    {/* {career.remote && ( */}
                    <button
                        className='flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] px-[16px] pb-[10px] pl-[13px] pt-[10px]
                            helveticaNeue text-[12px] font-[400] leading-[19.44px] transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                    >
                        <Image
                            src='/icons/location.svg'
                            alt='Location icon'
                            width={17}
                            height={17}
                        />
                        100% Remote
                    </button>
                    {/* )} */}
                    {/* {career.fulltime && ( */}
                    <button
                        className='flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] px-[16px] pb-[10px] pl-[13px] pt-[10px]
                             helveticaNeue text-[12px] font-[400] leading-[19.44px] transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                    >
                        <Image
                            src='/icons/alarm.svg'
                            alt='Alarm clock icon'
                            width={17}
                            height={17}
                        />
                        Full time
                    </button>
                    {/* )} */}
                </div>
            </div>
            <Link href={`/careers/${career.id}`}>
                <div
                    className='flex h-fit flex-row items-center rounded-3xl p-2  helveticaNeue text-[25px] gothamRegular leading-[32.5px] transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700
                    active:bg-white/60 active:text-black sm:flex-col sm:items-end'
                >
                    <Image
                        src='/icons/arrow_outward.svg'
                        className='order-2 ml-[20px] w-[30px] sm:order-1 sm:ml-0 sm:w-full'
                        alt='Outward arrow'
                        width={48}
                        height={48}
                    />
                    <span className='order-1 sm:order-2'>Apply</span>
                </div>
            </Link>
        </div>
    );
};

export default CareerCard;
