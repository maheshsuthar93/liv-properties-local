'use client';

import {
    InvestmentAdvisory,
    InvestmentExperience,
    Loading
} from '@/app/components';
import '@/app/ui/index.css';
import { fetcher, apiUrl } from '../constants';
import useSWR from 'swr';

export const OurServices = () => {
    const {
        data: ourServices,
        error,
        isLoading
    } = useSWR(`${apiUrl}/api/cms-pages?page_id=7`, fetcher);
    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!ourServices) {
        return <div>No property found</div>;
    }
    return (
        <div className='verticalPanelInner services flex max-w-[100%] flex-col gap-[30px] px-[3vw] sm:px-0 small:px-[85px]'>
            <div className='home-sec_title'>
                <div className='text-[40px] font-[700] leading-[94%] small:text-[69px]'>
                    <h2>
                        {ourServices?.['our-services-section-1'][0]
                            .field_value ?? ''}
                    </h2>
                </div>
                <div className='mt-[11px] text-[25px] font-[200] leading-[120%] small:w-[480px]'>
                    <h3>
                        {ourServices?.['our-services-section-1']?.[2]
                            ?.field_value ?? ''}
                    </h3>
                </div>
            </div>
            <InvestmentExperience ourServices={ourServices} />
            <InvestmentAdvisory
                data={ourServices?.personalisedinvestmentadvisory}
            />
        </div>
    );
};
