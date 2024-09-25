import Image from 'next/image';
import { Metadata } from 'next';
import { EnquireForm } from '@/app/components';
import { SellYourProperty } from '@/app/types';
import { fetchData, getFieldValueByName } from '@/app/constants';

const sellYourProperty: SellYourProperty = await fetchData(4);

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: sellYourProperty.header[0].metatitle,
        description: sellYourProperty.header[0].metadescription,
        keywords: sellYourProperty.header[0].metakeyword
    };
}

export default async function SellPage() {
    return (
        <div className='mx-auto mb-[30px] w-full sm:mb-[60px] xl:mb-[84px] 3xl:max-w-[1200px]'>
            <div className='relative mb-[82px]'>
                <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
                    <h1 className='inline-block max-w-[220px] capitalize small:max-w-[300px] z-[1] relative'>
                        {sellYourProperty?.['sell-your-property-section-1'][0]
                            .field_value ?? ''}
                    </h1>
                    <div className='pointer-events-none absolute top-[50%] z-[0] translate-y-[-30%] scale-[1.4] sm:translate-y-[-60%] md:translate-y-[-60%]  md:scale-[1.3] lg:scale-[1.3] xl:translate-y-[-80%] 2xl:scale-[1.4] msm:translate-y-[-55%] mdlap:translate-y-[-70%]'>
                        <Image
                            src={
                                (sellYourProperty?.[
                                    'sell-your-property-section-1'
                                ][1].field_value as string) ??
                                '/images/sell_hero.webp'
                            }
                            alt={sellYourProperty.header[0].metadescription}
                            width={1384}
                            height={736}
                        />
                    </div>
                </div>
            </div>
            <div
                className='two-col-desc flex flex-col flex-nowrap gap-[30px] lg:flex-row lg:flex-wrap'
                dangerouslySetInnerHTML={{
                    __html: sellYourProperty?.[
                        'sell-your-property-section-1'
                    ][2].field_value as string
                }}
            ></div>
            <div className='flex flex-col flex-nowrap gap-[0px] lg:flex-row lg:flex-wrap lg:gap-[30px]'>
                <Image
                    src='/images/sell1.webp'
                    alt='Building in snow'
                    width={790}
                    height={480}
                    className='mt-[50px] w-full lg:w-[calc(70%-15px)]'
                />
                <Image
                    src='/images/sell2.webp'
                    alt='Building in snow'
                    width={395}
                    height={480}
                    className='mt-[50px] w-full lg:w-[calc(30%-15px)]'
                />
            </div>
            <div className='mt-[72px]'>
                <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
                    <h2 className='inline-block max-w-[220px] capitalize small:max-w-[270px]'>
                        {getFieldValueByName(
                            sellYourProperty?.['sell-your-property-section-1'],
                            'Form Heading'
                        )}
                    </h2>
                </div>
                <EnquireForm />
            </div>
        </div>
    );
}
