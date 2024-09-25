import s from '@/app/ui/main.module.css';
import Link from 'next/link';
import { OurServices } from '@/app/types';

interface OurServicesProps {
    ourServices: OurServices;
}

export const InvestmentExperience: React.FC<OurServicesProps> = ({
    ourServices
}) => {
    return (
        <div className='investment-experience flex flex-col flex-wrap justify-between gap-y-[20px] sm:flex-row sm:gap-x-[30px] sm:gap-y-14 xl:justify-normal xl:gap-x-[60px] 3xl:gap-x-2'>
            <div
                className={`${s.serviceBlock} relative flex-1 3xl:max-w-[380px] 3xl:flex-[auto]`}
            >
                <h4 className='text-[20px]'>
                    {ourServices?.['our-services-section-2']?.[3]
                        ?.field_value ?? ''}
                </h4>
                <div className='mt-[20px] text-xs font-[200] leading-[170%] text-white'>
                    <p className='ellipse-text'>
                        {ourServices?.['our-services-section-2']?.[4]
                            ?.field_value ?? ''}
                    </p>
                </div>
                <Link href='/services' className='block w-fit'>
                    <div
                        className={`${s.readMore} mt-[5px] w-fit pb-[8px] pt-[10px] text-xs ${s.hoverable}`}
                    >
                        Read More
                    </div>
                </Link>
            </div>
            <div
                className={`${s.serviceBlock} relative flex-1 3xl:max-w-[380px] 3xl:flex-[auto]`}
            >
                <h4 className='text-[20px]'>
                    {ourServices?.['our-services-section-2']?.[5]
                        ?.field_value ?? ''}
                </h4>

                <div className='mt-[20px] text-xs font-[200] leading-[170%] text-white'>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: ourServices?.['our-services-section-2']?.[6]
                                ?.field_value as string
                        }}
                    ></div>
                </div>
            </div>
            <div className={`flex-1 3xl:max-w-[380px] 3xl:flex-[auto]`}>
                <h4 className='text-[20px]'>
                    {ourServices?.['our-services-section-2']?.[7]
                        ?.field_value ?? ''}
                </h4>
                <p className='ellipse-text mt-[20px] text-xs font-[200] leading-[170%] text-white'>
                    {ourServices?.['our-services-section-2']?.[8]
                        ?.field_value ?? ''}
                </p>
                <Link href='/services' className='block w-fit'>
                    <div
                        className={`${s.readMore} mt-[5px] w-fit pb-[8px] pt-[10px] text-xs ${s.hoverable}`}
                    >
                        Read More
                    </div>
                </Link>
            </div>
        </div>
    );
};
