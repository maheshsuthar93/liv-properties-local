'use client';

import Link from 'next/link';
import Image from 'next/image';
import s from '@/app/ui/main.module.css';
import { useState, useLayoutEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { PropertyCardProps } from '@/app/types';

export const PropertyCard: React.FC<PropertyCardProps> = ({
    id = 1,
    uniqueId = '',
    imageUrl = '',
    altText = 'alt text',
    title = 'Title',
    description = 'Description',
    location = 'Location',
    bedrooms = 2,
    bathrooms = '2',
    area = '1273',
    price = 99123000
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useLayoutEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 640);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            className={`${isLargeScreen ? s.propPic : ''} property-card mt-[20px] w-full flex-1 md:mt-[43px] smlap:w-[300px] smlap:flex-none`}
        >
            <Link href={`/project?unique_id=${uniqueId}`} className='relative'>
                <div className='relative block h-[293px] w-full min-w-[300px] overflow-hidden smlap:w-[300px]'>
                    <Image
                        src={imageUrl || ''}
                        alt={altText}
                        width={300}
                        height={293}
                        onLoad={() => setImageLoaded(true)}
                        className={`property-card_img absolute h-[293px] w-full object-cover transition-opacity smlap:w-[300px] ${!imageLoaded ? 'opacity-0' : 'opacity-100'}}`}
                    />
                    <Skeleton
                        className={`absolute top-[-5px] w-full transition-opacity smlap:w-[300px] ${imageLoaded ? 'loaded opacity-0' : ''}`}
                        width={300}
                        height={293}
                        baseColor='#948270'
                        highlightColor='#baa791'
                    />
                </div>
            </Link>
            <div className='ml-[10px] mt-[15px]'>
                <div className=' text-[15px] font-[700]'>{title}</div>
                <div className='text-xs'>{location}</div>
                {/* <div className='text-xs'>{description}</div> */}
                <div className='mt-[4px] flex gap-[17px] text-xs'>
                    <div>
                        <Image
                            src='/icons/bed.svg'
                            alt='Bed icon'
                            width={17}
                            height={17}
                            className='mr-[2px] inline'
                        />
                        {bedrooms}
                    </div>
                    <div>
                        <Image
                            src='/icons/bathtub.svg'
                            alt='Bathtub icon'
                            width={17}
                            height={17}
                            className='mr-[2px] inline'
                        />
                        {bathrooms}
                    </div>
                    <div>
                        <Image
                            src='/icons/crop_free.svg'
                            alt='Area icon'
                            width={17}
                            height={17}
                            className='mr-[2px] inline'
                        />
                        {area} sqft
                    </div>
                </div>
                <div className='mt-[3px] text-[15px] font-[700]'>
                    AED{' '}
                    {price.toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        maximumFractionDigits: 2
                    }) + '.000'}
                </div>
            </div>
        </div>
    );
};
