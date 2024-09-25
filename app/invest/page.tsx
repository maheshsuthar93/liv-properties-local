import Image from 'next/image';
import { Metadata } from 'next';
import { EnquireForm, Loading } from '@/app/components';
import { Investment } from '@/app/types';
import { fetchData, getFieldValueByName } from '@/app/constants';

const investment: Investment = await fetchData(5);

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: investment.header[0].metatitle,
        description: investment.header[0].metadescription,
        keywords: investment.header[0].metakeyword
    };
}

export default async function InvestPage() {
    if (!investment || investment === undefined) {
        return <Loading />;
    }
    return (
        <div className='mx-auto mb-[30px] w-full sm:mb-[60px] xl:mb-[84px] 3xl:max-w-[1200px]'>
            <div className='relative mb-[82px]'>
                <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
                    <h1 className='inline-block max-w-[220px] capitalize small:max-w-[270px] z-[1] relative'>
                        {investment?.['investment-section-1'][0].field_value ??
                            ''}
                    </h1>
                    <div className='origin-center-right pointer-events-none absolute top-[50%] z-[0] translate-x-[10%] translate-y-[-55%] scale-[1.1] md:translate-x-[20%] md:scale-[1.1] lg:translate-x-[15%] lg:translate-y-[-75%] lg:scale-[1.1] xl:translate-x-[5%] 2xl:scale-[1.3] mdlap:translate-y-[-60%]'>
                        <Image
                            src={
                                (investment?.['investment-section-1'][1]
                                    .field_value as string) ??
                                '/images/invest_building.webp'
                            }
                            alt={investment.header[0].metadescription}
                            width={1384}
                            height={736}
                        />
                    </div>
                </div>
            </div>
            <div
                className='two-col-desc mt:[50px] flex flex-col flex-nowrap gap-[30px] sm:mt-[150px] lg:mt-[80px] lg:flex-row lg:flex-wrap xl:mt-[220px]'
                dangerouslySetInnerHTML={{
                    __html: investment?.['investment-section-1'][2]
                        .field_value as string
                }}
            ></div>
            <div className='mt-[72px]'>
                <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
                    <h2 className='inline-block max-w-[220px] capitalize small:max-w-[270px]'>
                        {investment?.['investment-section-1'][3].field_value ??
                            ''}
                    </h2>
                </div>
                <EnquireForm />
            </div>
        </div>
    );
}
