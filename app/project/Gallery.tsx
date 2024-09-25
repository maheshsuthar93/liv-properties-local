'use client';

import React from 'react';
import EmblaCarousel from '../components/gallery/Carousel';
const Gallery = ({
    images,
    stateChanger
}: {
    images: any[];
    stateChanger: any;
}) => {
    const SLIDES = Array.from(Array(images.length).keys());

    return (
        <>
            <EmblaCarousel slides={SLIDES} images={images} />
            <div
                className='close-btn fixed right-[20px] top-[20px] z-[100] h-[30px] w-[30px] cursor-pointer'
                onClick={() => stateChanger()}
            >
                <svg
                    width='30px'
                    height='30px'
                    viewBox='-0.5 0 25 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M3 21.32L21 3.32001'
                        stroke='#ffffff'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M3 3.32001L21 21.32'
                        stroke='#ffffff'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            </div>
        </>
    );
};

export default Gallery;
