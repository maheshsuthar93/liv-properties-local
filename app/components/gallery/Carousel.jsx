import React, { useState, useEffect, useCallback } from 'react';
// import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react';
import { Thumb } from './CarouselThumbsButton';

// type PropType = {
//   slides: number[]
//   options?: EmblaOptionsType
// }

const Carousel = ({ slides, images }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        selectedClass: '',
        dragFree: true
    });

    const onThumbClick = useCallback(
        (index) => {
            if (!embla || !emblaThumbs) return;
            embla.scrollTo(index);
        },
        [embla, emblaThumbs]
    );

    const onSelect = useCallback(() => {
        if (!embla || !emblaThumbs) return;
        setSelectedIndex(embla.selectedScrollSnap());
        emblaThumbs.scrollTo(embla.selectedScrollSnap());
    }, [embla, emblaThumbs, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        embla.on('select', onSelect);
    }, [embla, onSelect]);

    const props = { width: 400, height: 250, zoomWidth: 500, img: '1.jpg' };

    return (
        <>
            <div className='gallery-images'>
                <div className='embla'>
                    <div className='embla__viewport' ref={mainViewportRef}>
                        <div className='embla__container'>
                            {slides.map((index) => (
                                <div className='embla__slide' key={index}>
                                    <div className='embla__slide__inner'>
                                        <img
                                            className='embla__slide__img'
                                            src={images[index]}
                                            alt='Photo of a property'
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='embla embla--thumb'>
                    <div className='embla__viewport' ref={thumbViewportRef}>
                        <div className='embla__container embla__container--thumb'>
                            {slides.map((index) => (
                                <Thumb
                                    onClick={() => onThumbClick(index)}
                                    selected={index === selectedIndex}
                                    imgSrc={images[index]}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;
