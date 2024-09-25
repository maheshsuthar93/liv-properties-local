'use client';

import { EnquireForm, Loading } from '@/app/components';
import { Careers } from '@/app/types';
import { fetchGeneral } from '@/app/constants';
import CareerCard from '../components/CareerCard';
import { Fragment, useEffect, useState } from 'react';

export const CareersContent = () => {
    const [careersData, setCareersData] = useState<Careers | null>(null);

    useEffect(() => {
        fetchGeneral('careers').then((data) => setCareersData(data));
    }, []);

    if (careersData === null || careersData === undefined) {
        return <Loading />;
    }
    if (!careersData) {
        return <div>No news available</div>;
    } else {
        return (
            <Fragment>
                {Array.isArray(careersData) &&
                    careersData.map((career) => (
                        <CareerCard key={career.id} career={career} />
                    ))}
                <div className='mt-[30px] w-full text-[40px] font-[700] leading-[38px] lg:mt-[65px] small:text-[69px] small:leading-[88px]'>
                    <h2>Enquire Now</h2>
                </div>
                <EnquireForm />
            </Fragment>
        );
    }
};
