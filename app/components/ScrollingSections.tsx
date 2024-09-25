'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { useGSAP } from '@gsap/react';
import s from '@/app/ui/scrollSection.module.css';
import '@/app/ui/index.css';
import {
    HomeHero,
    FeaturedProperties,
    OurServices,
    Instagram
} from '@/app/components';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(Observer, useGSAP);
}

export const ScrollingSections = () => {
    const verticalSection = useRef(null);
    const sectionsRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        let sections = sectionsRefs.current,
            currentIndex = 0,
            animating = false,
            lastSection = false;

        function isViewportAbove920px() {
            const viewportWidth = Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0
            );
            return viewportWidth > 919;
        }

        function gotoSection(index: number) {
            if (
                !isViewportAbove920px() ||
                index < 0 ||
                index >= sections.length
            ) {
                animating = false;
                return;
            }
            animating = true;
            let tl = gsap.timeline({
                defaults: { duration: 0.65, ease: 'power1.inOut' },
                onComplete: () => {
                    animating = false;
                }
            });

            if (currentIndex >= 0) {
                gsap.set(sections[currentIndex], { zIndex: 0 });
                tl.to(sections[currentIndex], { opacity: 0, autoAlpha: 0 });
            }

            gsap.set(sections[index], { zIndex: 1 });
            tl.fromTo(
                sections[index],
                { opacity: 0, autoAlpha: 0 },
                { opacity: 1, autoAlpha: 1 }
            );

            currentIndex = index;

            // Control overflow based on section index
            let overflowTimeline = gsap.timeline({ duration: 0.5 });
            if (index === sections.length - 1) {
                overflowTimeline.to('.verticalSection', {
                    minHeight: 'auto',
                    ease: 'power1.inOut'
                });
                overflowTimeline.to('body > div', {
                    overflow: '',
                    height: 'auto'
                });
                if (
                    window.innerHeight + Math.round(window.scrollY) >=
                    document.body.offsetHeight
                ) {
                    lastSection = true;
                }
            } else {
                overflowTimeline.to('.verticalSection', {
                    minHeight: '100dvh'
                });
                overflowTimeline.to('body > div', {
                    overflow: 'hidden',
                    height: '100vh'
                });
                lastSection = false;
            }
        }

        // Create the Observer for scroll handling
        const observer = Observer.create({
            type: 'wheel,touch,pointer',
            wheelSpeed: -1,
            onDown: () => {
                if (isViewportAbove920px() && !animating && currentIndex > 0) {
                    if (lastSection) {
                        gotoSection(currentIndex);
                        lastSection = false;
                    } else {
                        gotoSection(currentIndex - 1);
                    }
                }
            },
            onUp: () => {
                if (
                    isViewportAbove920px() &&
                    !animating &&
                    currentIndex < sections.length - 1
                ) {
                    gotoSection(currentIndex + 1);
                }
            },
            tolerance: 10,
            preventDefault: isViewportAbove920px()
        });

        // Initially go to the first section if above 920px
        if (isViewportAbove920px()) {
            gotoSection(0);
        }

        // Add resize event listener to handle viewport changes
        function handleResize() {
            if (!isViewportAbove920px()) {
                observer.disable(); // Disable observer on small devices
                const bodyDiv = document.querySelector('body > div') as HTMLElement | null;
                if (bodyDiv) {
                    bodyDiv.style.overflow = '';
                    bodyDiv.style.height = 'auto';
                }
            } else {
                observer.enable(); // Enable observer on large devices
                gotoSection(currentIndex); // Ensure correct section is shown
            }
        }
        window.addEventListener('resize', handleResize);

        // Clean up the observer and resize listener on component unmount
        return () => {
            observer.kill();
            window.removeEventListener('resize', handleResize);
            const bodyDivCleanup = document.querySelector('body > div') as HTMLElement | null;
            if (bodyDivCleanup) {
                bodyDivCleanup.style.overflow = '';
                bodyDivCleanup.style.height = 'auto';
            }
        };
    }, []);

    return (
        <>
            <div
                className='verticalSection section w-full flex-col'
                ref={verticalSection}
            >
                <div
                    className='verticalPanel'
                    ref={(el) => (sectionsRefs.current[0] = el!)}
                >
                    <HomeHero />
                </div>
                <div
                    className='verticalPanel'
                    ref={(el) => (sectionsRefs.current[1] = el!)}
                >
                    <FeaturedProperties />
                </div>
                <div
                    className='verticalPanel'
                    ref={(el) => (sectionsRefs.current[2] = el!)}
                >
                    <OurServices />
                </div>
                <div
                    className='verticalPanel'
                    ref={(el) => (sectionsRefs.current[3] = el!)}
                >
                    <Instagram />
                </div>
            </div>
        </>
    );
};
