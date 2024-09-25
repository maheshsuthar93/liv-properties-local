import '@/app/ui/index.css';
import s from '@/app/ui/main.module.css';
import { Metadata } from 'next';
import Image from 'next/image';
import { InvestmentAdvisory, Instagram, Loading } from '@/app/components';
import { OurServices } from '@/app/types';
import { fetchData, getFieldValueByName } from '@/app/constants';

export async function generateMetadata(): Promise<Metadata> {
    const ourServices: OurServices = await fetchData(7);

    return {
        title: ourServices.header[0].metatitle,
        description: ourServices.header[0].metadescription,
        keywords: ourServices.header[0].metakeyword
    };
}

export default async function ServicesPage() {
    const ourServices: OurServices = await fetchData(7);

    if (!ourServices || ourServices === undefined) {
        return <Loading />;
    }
    return (
        <div className='mx-auto mb-[30px] w-full sm:mb-[60px] xl:mb-[84px] 3xl:max-w-[1200px]'>
            <div className='min-[1630px]:min-w-[1440px] max-[1629px]:w-full relative mb-[82px]'>
                <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
                    <h1 className='capitalize z-[1] relative'>
                        {ourServices?.['our-services-section-1'][0]
                            .field_value ?? ''}
                    </h1>
                    <div className='pointer-events-none absolute top-[50%] z-[0] translate-y-[-55%] scale-[1.4] sm:translate-y-[-60%] md:translate-y-[-60%] md:scale-[1.3] lg:scale-[1.3] xl:translate-y-[-70%] 2xl:scale-[1.4]'>
                        <Image
                            src={
                                ourServices?.['our-services-section-1'][1]
                                    .field_value ??
                                '/images/services_building.webp'
                            }
                            alt='Home'
                            width={1404}
                            height={885}
                        />
                    </div>
                </div>
            </div>
            <div className='gotham'>
                <div className='mt-[11px] text-[25px] font-[200] leading-[120%] sm:w-[480px]'>
                    <h3>
                        {ourServices?.['our-services-section-1']?.[2]
                            ?.field_value ?? ''}
                    </h3>
                </div>
            </div>
            <div className='mb-[48px] max-w-[100%]'>
                <div className='investment-experience xs mb-[35px] mt-[35px] flex flex-col flex-wrap justify-between gap-y-[20px] border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[30px] sm:gap-x-[30px] sm:pb-[37px] md:flex-row md:gap-y-14 xl:justify-normal xl:gap-x-[60px] 3xl:gap-x-2'>
                    <div
                        className={`${s.serviceBlock} relative flex-1 3xl:max-w-[380px] 3xl:flex-[auto]`}
                    >
                        <h2 className='text-[20px]'>
                            {ourServices?.['our-services-section-2']?.[3]
                                ?.field_value ?? ''}
                        </h2>
                        <div className='mt-[20px] text-xs leading-[170%] text-white'>
                            <p>
                                {ourServices?.['our-services-section-2']?.[4]
                                    ?.field_value ?? ''}
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${s.serviceBlock} relative flex-1 3xl:max-w-[380px] 3xl:flex-[auto]`}
                    >
                        <h2 className='text-[20px]'>
                            {ourServices?.['our-services-section-2']?.[5]
                                ?.field_value ?? ''}
                        </h2>
                        <div
                            className='mt-[20px] text-xs leading-[170%] text-white'
                            dangerouslySetInnerHTML={{
                                __html: ourServices[
                                    'our-services-section-2'
                                ]?.[6]?.field_value as string
                            }}
                        ></div>
                    </div>
                    <div className={`flex-1 3xl:max-w-[380px] 3xl:flex-[auto]`}>
                        <h2 className='text-[20px]'>
                            {ourServices?.['our-services-section-2']?.[7]
                                ?.field_value ?? ''}
                        </h2>
                        <p className='mt-[20px] text-xs leading-[170%] text-white'>
                            {ourServices?.['our-services-section-2']?.[8]
                                ?.field_value ?? ''}
                        </p>
                    </div>
                </div>
                <InvestmentAdvisory
                    data={ourServices?.personalisedinvestmentadvisory}
                />
            </div>
            <Instagram />
        </div>
    );
}
