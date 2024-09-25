'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import '@/app/ui/index.css';
import { Loading, PropertyCard } from '@/app/components';
import Link from 'next/link';
import s from '@/app/ui/main.module.css';
import { useState, useLayoutEffect, Fragment } from 'react';
import { FeaturedParameters, Property } from '@/app/types';
import { apiUrl, fetcher } from '../constants';
import useSWR from 'swr';

export const FeaturedProperties = () => {
    const [action, setAction] = useState<'rent' | 'buy' | 'sell'>('buy');
    const [propType, setPropType] = useState<'villa' | 'apartment' | 'all'>(
        'all'
    );

    const [parameters, setParameters] = useState<FeaturedParameters>({
        propType: 'all',
        action: 'buy'
    });
    const fetchUrl =
        parameters.propType === 'all'
            ? `${apiUrl}/api/get-featured-properties`
            : `${apiUrl}/api/get-featured-properties?property_type=${parameters.propType}&availablefor=${parameters.action}`;

    const {
        data: featuredData,
        error: featuredPropertiesError,
        isLoading: featuredPropertiesisLoading
    } = useSWR<Property[]>(fetchUrl, fetcher);

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        setParameters({ action, propType });
    }, [action, propType, setParameters]);

    useLayoutEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 640);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='verticalPanelInner featured-properties flex flex-col px-[3vw] sm:px-0 small:h-[100vh] small:px-[85px]'>
            <div className='max-[1024px]:justify-between mb-[30px] flex flex-wrap items-end justify-normal gap-8 small:mb-0'>
                <div className='home-sec_title text-[40px] font-[700] leading-[94%] small:text-[69px]'>
                    <h2 className='inline-block max-w-[250px] capitalize small:max-w-[330px]'>
                        Featured Properties
                    </h2>
                </div>
                {isLargeScreen ? (
                    <div className='mt-[39px] flex-wrap text-[12px] sm:mb-[15px] sm:mt-0'>
                        <div className='flex'>
                            <div
                                className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${propType === 'villa' ? 'border-b-[3px]' : 'border-b'}`}
                                onClick={() => setPropType('villa')}
                            >
                                Villas
                            </div>
                            <div
                                className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${propType === 'apartment' ? 'border-b-[3px]' : 'border-b'}`}
                                onClick={() => setPropType('apartment')}
                            >
                                Apartments
                            </div>
                            <div
                                className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${propType === 'all' ? 'border-b-[3px]' : 'border-b'}`}
                                onClick={() => setPropType('all')}
                            >
                                View All
                            </div>
                        </div>
                        <div className='mt-[17px] flex'>
                            <div
                                className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${action === 'rent' ? 'border-b-[3px]' : 'border-b'}`}
                                onClick={() => setAction('rent')}
                            >
                                Rent
                            </div>
                            <div
                                className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${action === 'buy' ? 'border-b-[3px]' : 'border-b'}`}
                                onClick={() => setAction('buy')}
                            >
                                Buy
                            </div>
                            <div
                                className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${action === 'sell' ? 'border-b-[3px]' : 'border-b'}`}
                                onClick={() => setAction('sell')}
                            >
                                Sell
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='flex w-full items-stretch text-center text-sm'>
                            <div
                                className={`min-w-[100px] flex-1 pb-[8px] sm:min-w-[132px] ${s.prop} ${s.hoverable} ${propType === 'villa' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable}`}
                                onClick={() => setPropType('villa')}
                            >
                                Villas
                            </div>
                            <div
                                className={`min-w-[100px] flex-1 pb-[8px] sm:min-w-[132px] ${s.prop} ${s.hoverable} ${propType === 'apartment' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable}`}
                                onClick={() => setPropType('apartment')}
                            >
                                Apartments
                            </div>
                            <div
                                className={`min-w-[100px] flex-1 pb-[8px] sm:min-w-[132px] ${s.prop} ${s.hoverable} ${propType === 'all' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable}`}
                                onClick={() => setPropType('all')}
                            >
                                View All
                            </div>
                        </div>
                        <div className='flex w-full text-center text-sm'>
                            <div
                                className={`min-w-[100px] flex-1 pb-[8px] sm:min-w-[132px] ${s.prop} ${s.hoverable} ${action === 'rent' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable}`}
                                onClick={() => setAction('rent')}
                            >
                                Rent
                            </div>
                            <div
                                className={`min-w-[100px] flex-1 pb-[8px] sm:min-w-[132px] ${s.prop} ${s.hoverable} ${action === 'buy' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable}`}
                                onClick={() => setAction('buy')}
                            >
                                Buy
                            </div>
                            <div
                                className={`min-w-[100px] flex-1 pb-[8px] sm:min-w-[132px] ${s.prop} ${s.hoverable} ${action === 'sell' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable}`}
                                onClick={() => setAction('sell')}
                            >
                                Sell
                            </div>
                        </div>
                    </>
                )}
            </div>
            {featuredPropertiesisLoading && (
                <div className='self-center'>
                    <div className='mt-[20px] w-full md:mt-[43px]'>
                        <Loading />
                    </div>
                </div>
            )}

            {featuredPropertiesError && (
                <div className='mt-[20px] w-full md:mt-[43px]'>
                    Error loading featured properties:{' '}
                    {featuredPropertiesError.message}
                </div>
            )}

            {!featuredPropertiesisLoading &&
                Array.isArray(featuredData) &&
                featuredData.length <= 0 && (
                    <div className='mb-[20px] mt-[20px] w-full text-center md:mt-[43px]'>
                        No data available for the selected filter
                    </div>
                )}

            <div className='featured-properties_grid flex'>
                {Array.isArray(featuredData) &&
                    featuredData.slice(0, 3).map((p: Property) => (
                        <Fragment key={p.id}>
                            <PropertyCard
                                id={p.id}
                                uniqueId={p.unique_id ?? ''}
                                imageUrl={p.main_image}
                                altText={`Photo of ${p.property_name}`}
                                title={p.property_name}
                                location={p.location}
                                bedrooms={p.number_of_bedroom}
                                bathrooms={p.number_of_bathroom}
                                area={p.area_in_sqft}
                                price={p.price}
                            />
                        </Fragment>
                    ))}
                {isLargeScreen ? (
                    <div className='property-card explore-all mt-[43px] w-full sm:w-[304px]'>
                        <div className={`${s.lastProperty}`}>
                            <Image
                                src='/images/property.jpg'
                                alt='Photo of a property'
                                width={304}
                                height={293}
                                className='property-card_img w-full'
                            />
                            <Link href='/projects/ready'>
                                <div className={`${s.backdrop} text-[14px]`}>
                                    Explore All
                                </div>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <button
                        className='mx-auto w-[114px] rounded-3xl bg-[#EDDFD0] px-[30px] py-[8px] text-sm text-[#916940] transition
                        duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                    >
                        View&nbsp;All
                    </button>
                )}
            </div>
        </div>
    );
};
