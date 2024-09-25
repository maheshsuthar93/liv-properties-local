'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useLayoutEffect } from 'react';
import s from '@/app/ui/home.module.css';
import sMain from '@/app/ui/main.module.css';
import '@/app/ui/index.css';

const routes = ['/', '/about', '/projects/ready', '/services', '/contact'];
const routeNameMapping: { [k: string]: string } = {
    '/': 'Home',
    '/about': 'About',
    '/projects/ready': 'Properties',
    '/services': 'Services',
    '/contact': 'Contact'
};
const isRouteActive = (route: string, path: string): boolean => {
    if (path === '/' && route === '/') return true;
    if (route !== '/' && path.includes(route)) return true;
    if (route === '/projects/ready' && path.includes('project')) return true;
    return false;
};

const useMenuState = () => {
    const [isOpen, setIsOpen] = useState(false);
    const body =
        typeof window === 'undefined' ? null : document.querySelector('body');
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        body?.classList.toggle('overflow-hidden');
        if (typeof window !== 'undefined') {
            const relatives = document.querySelectorAll("[class*='relative']");
            const filteredRelatives = Array.from(relatives).filter(
                (e) => !e.classList.contains('helveticaNeue')
            );
            filteredRelatives.forEach((e) => e.classList.toggle('opacity-0'));
        }
    };
    return { isOpen, toggleMenu };
};

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const stickyHeaderRef = useRef<HTMLDivElement>(null);

    const prevScrollY = useRef(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (prevScrollY.current < currentScrollY && currentScrollY > 0) {
            // Scrolling down
            setIsVisible(false);
        } else {
            // Scrolling up
            setIsVisible(true);
        }

        prevScrollY.current = currentScrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isVisible && stickyHeaderRef.current) {
            // Check both visibility and ref
            gsap.to(stickyHeaderRef.current, {
                duration: 0.5,
                y: 0,
                ease: 'power3.inOut'
            }); // Show header
        } else if (!isVisible && stickyHeaderRef.current) {
            gsap.to(stickyHeaderRef.current, {
                duration: 0.5,
                y: -stickyHeaderRef.current.offsetHeight,
                ease: 'power3.inOut'
            }); // Hide header
        }
    }, [isVisible]);

    const path = usePathname();
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const { isOpen, toggleMenu } = useMenuState();

    useLayoutEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isLargeScreen ? (
        <div
            ref={stickyHeaderRef}
            className={`${isRouteActive('/', path) ? 'fixed h-auto ' : 'sticky h-[280px] '}w-full top-0 z-[99] mb-[50px] flex px-[3vw] pt-[30px] sm:mb-0 sm:px-[85px] lg:flex-col lg:pt-[60px]`}
        >
            <Link href='/' className='w-fit'>
                <Image
                    src='/logos/logo.svg'
                    alt='LIV Squared Properties logo'
                    width={95}
                    height={87}
                    className='ml-[-4px] h-auto w-auto'
                    priority={true}
                />
            </Link>
            <nav className='z-50 mx-[-1rem] mt-[21px] flex flex-wrap gap-[1px] text-sm'>
                {routes.map((route) => (
                    <Link key={route} href={route + '/'}>
                        <div
                            className={`${isRouteActive(route, path) ? s.navActive : ''} ${sMain.headerNav} cursor-pointer rounded-xl px-4 py-2`}
                        >
                            <span>{routeNameMapping[route]}</span>
                        </div>
                    </Link>
                ))}
            </nav>
        </div>
    ) : (
        <div
            className={`mb-[50px] px-[15px] sm:mb-0 md:px-[85px] ${isRouteActive('/', path) ? 'h-auto ' : 'sm:h-[160px] '}pt-[30px] relative z-[99] flex !transform-none flex-wrap items-start justify-between !opacity-[1] lg:flex-nowrap lg:items-center lg:pt-[60px]`}
        >
            <Link href='/'>
                <Image
                    src='/logos/logo.svg'
                    alt='LIV Squared Properties logo'
                    width={142}
                    height={71}
                    className='ml-[-4px] h-[38px] w-[76px] lg:h-[71px] lg:w-[142px]'
                    priority={true}
                />
            </Link>
            <button
                className='flex h-[23px] w-[24px] items-center justify-center p-[1px] focus:outline-none lg:hidden'
                onClick={toggleMenu}
            >
                <svg
                    className='h-[26px] w-[26px] text-gray-700'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M4 6H20M4 12H20M4 18H20'
                        stroke='#EDDFD0'
                        strokeWidth='1'
                        strokeLinecap='round'
                    />
                </svg>
            </button>
            <div
                className={`z-[1000] px-[15px] py-[30px] md:px-[85px] lg:pt-[89px] ${isOpen ? 'pointer-events-auto scale-y-[100dvh]' : 'pointer-events-none scale-y-0'}
                fixed inset-0 origin-top bg-[#EDDFD0] transition duration-1000 ease-[cubic-bezier(.16,1,.3,1)]`}
            >
                <div className='flex items-center justify-between'>
                    <Link href='/'>
                        <Image
                            src='/logos/logo_dark.svg'
                            alt='LIV Squared Properties logo'
                            width={142}
                            height={71}
                            className='ml-[-4px] h-[38px] w-[76px] lg:h-[71px] lg:w-[142px]'
                            priority={true}
                        />
                    </Link>
                    <div
                        onClick={toggleMenu}
                        className='flex items-center justify-center p-1'
                    >
                        <Image
                            src='/icons/close.svg'
                            alt='Close'
                            width={14}
                            height={14}
                            className=''
                        />
                    </div>
                </div>
                <nav
                    className={`mt-[calc(25%-50px)] flex-col justify-between gap-[1px] sm:mt-[calc(25%-70px)] lg:hidden ${isOpen ? 'flex' : 'hidden'} h-[50dvh] text-center text-[20px] font-[600] text-[#827161]`}
                >
                    {routes.map((route) => (
                        <Link
                            key={route}
                            href={route + '/'}
                            onClick={toggleMenu}
                        >
                            <div
                                // className={`${isRouteActive(route, path) ? s.navMob : ''}
                                className={`${s.navMob} cursor-pointer rounded-xl p-4 transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-900 active:bg-white/60 active:text-black`}
                            >
                                <span>{routeNameMapping[route]}</span>
                            </div>
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

import styles from '@/app/ui/home.module.css';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Header2 = () => {
    const [isVisible, setIsVisible] = useState(true);
    const stickyHeaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY < 2800);

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isVisible && stickyHeaderRef.current) {
            // Check both visibility and ref
            gsap.to(stickyHeaderRef.current, {
                duration: 0.5,
                y: 0,
                ease: 'power3.inOut'
            }); // Show header
        } else if (!isVisible && stickyHeaderRef.current) {
            gsap.to(stickyHeaderRef.current, {
                duration: 0.5,
                y: -stickyHeaderRef.current.offsetHeight,
                ease: 'power3.inOut'
            }); // Hide header
        }
    }, [isVisible]);

    return (
        <div
            ref={stickyHeaderRef}
            className={`sticky top-0 h-[340px] px-[85px] pt-[89px]`}
        >
            <Image
                src='/chevalme-test/texts/slim.svg'
                alt='LIV Squared Properties logo'
                width={95}
                height={87}
                className='ml-[-4px]'
                priority={true}
            />
            <nav className='mt-[57px] flex gap-[38px] text-sm'>
                <div className={styles.navActive}>Home</div>
                <div>About</div>
                <div>Properties</div>
                <div>Services</div>
                <div>Contact</div>
            </nav>
        </div>
    );
};
