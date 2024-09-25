'use client';

import Image from 'next/image';
import { useState, useLayoutEffect, ChangeEvent } from 'react';
import { Select } from '@/app/components';
import '@/app/ui/index.css';
import s from '@/app/ui/main.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PriceRange from './PriceRange';
import { HomeSearchText } from '@/app/types';

type ProjType = 'buy' | 'rent' | '';

export const HomeSearch = () => {
    const router = useRouter();

    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [projType, setProjType] = useState<ProjType>('');
    const [pr, setPr] = useState('');
    const [location, setLocation] = useState('');
    const [propertyType, setPropertyType] = useState<'ready' | 'upcoming'>(
        'ready'
    );
    const [textSearch, setTextSearch] = useState('');
    const [visible, setVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState(false);

    const handlePriceClick = () => {
        setVisible((prevCheck) => !prevCheck);
    };

    // Handler for onChange event
    const handleProjTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setProjType(event.target.value as ProjType);
    };

    const buildQueryString = (params: Record<string, string | undefined>) => {
        const queryString = Object.entries(params)
            .filter(([key, value]) => value && value.trim() !== '')
            .map(
                ([key, value]) =>
                    `${key}=${encodeURIComponent(value as string)}`
            )
            .join('&');
        return queryString ? `?${queryString}` : '';
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const params: HomeSearchText = {
            construction_status: propertyType,
            availablefor: projType,
            price_range: pr,
            location: location,
            search_text: textSearch
        };
        const queryString = buildQueryString(params);
        console.log(queryString);
        const page = params.construction_status ?? 'ready';

        router.push(`/projects/${page}${queryString}`);
    };

    useLayoutEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 640);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isLargeScreen ? (
        <div className='home-search z-[3] mt-[250px] md:mt-[300px] small:mt-[30px]'>
            <div className='max-[639px]:mx-[3vw] max-[639px]:w-full max-[639px]:text-center flex px-[3vw] text-sm sm:px-0 small:px-[85px]'>
                <div
                    className={`max-[639px]:flex-1 w-full max-w-[calc(50%%-11px)] pb-[8px] pl-[5px] small:w-[auto] small:min-w-[132px] small:max-w-[auto] ${propertyType === 'ready' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable} cursor-pointer`}
                    onClick={() => setPropertyType('ready')}
                >
                    Ready
                </div>
                <div
                    className={`max-[639px]:flex-1 w-full max-w-[calc(50%%-11px)] pb-[8px] pl-[5px] sm:min-w-[132px] small:w-[auto] small:max-w-[auto] ${propertyType === 'upcoming' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable} cursor-pointer`}
                    onClick={() => setPropertyType('upcoming')}
                >
                    New Projects
                </div>
            </div>
            <div className='max-[639px]:w-full mt-[15px] flex flex-wrap justify-evenly px-[3vw] text-sm sm:px-0 small:justify-normal small:px-[85px]'>
                <select
                    value={projType}
                    onChange={handleProjTypeChange}
                    className={`custom-select relative flex  max-w-[calc(33%-11px)] cursor-pointer flex-row items-center justify-between border-0 border-[#eddfd0] bg-transparent py-3 pl-[0] text-[#eddfd0] focus:border-0  focus:outline-none focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] small:min-w-[130px] small:max-w-[auto]`}
                >
                    <option className='border-[#eddfd0]' value=''>
                        Available For
                    </option>
                    <option className='border-[#eddfd0]' value='buy'>
                        Buy
                    </option>
                    <option className='border-[#eddfd0]' value='rent'>
                        Rent
                    </option>
                </select>

                <div
                    className={`mx-[11px] ${s.hoverable} max-w-[calc(40%-11px)] small:min-w-[130px] small:max-w-[auto]`}
                >
                    <input
                        type='text'
                        name='textSearch'
                        id='textSearch_input'
                        value={textSearch}
                        onChange={(e) => setTextSearch(e.target.value)}
                        className={`block 
                            h-full 
                            w-full border-0 
                            bg-transparent 
                            py-1.5 text-center
                    text-[100%] 
                    placeholder-[#eddfd0] ring-0 ring-inset ring-transparent transition duration-200 ease-in-out
                    hover:ring-[#EDDFD0]/50 focus:ring-0 focus:ring-inset 
                     focus:ring-[#EDDFD0] 
                     sm:leading-6 small:min-w-[150px]`}
                        placeholder='Community or Building'
                    />
                </div>
                <div className={`${s.line}`} />
                <div
                    className={`mx-[11px] ${s.hoverable} flex max-w-[calc(25%-11px)] justify-center small:min-w-[130px] small:max-w-[auto]`}
                >
                    <input
                        type='text'
                        name='location'
                        id='location_input'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className={`block h-full w-full border-0 bg-transparent py-1.5 text-center
                    text-[100%] placeholder-[#eddfd0] ring-0 ring-inset ring-transparent transition duration-200 ease-in-out
                    hover:ring-[#EDDFD0]/50 focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] sm:leading-6 small:w-[110px] ${s.hoverable}`}
                        placeholder='Location'
                    />
                </div>
                <div className={`${s.line}`} />
                <div
                    className={`mx-[11px] ${s.hoverable} max-w-[calc(33.333%-11px)] small:min-w-[130px] small:max-w-[auto]`}
                >
                    {visible && (
                        <PriceRange
                            setPr={setPr}
                            pr={pr}
                            setVisible={setVisible}
                            keyPrefix='home'
                            className='absolute bottom-[calc(100%-30px)] left-[-40%] z-[10] sm:bottom-[calc(100%+20px)] md:left-[-50%] msmall:left-[unset] msmall:right-[-20px] small:left-[-50%] small:right-[unset]'
                        />
                    )}
                    <button
                        className='mt-[30px] flex h-full w-full flex-row items-center justify-start px-[16px]
                            py-[6px] pl-[13px] transition duration-200 ease-in-out sm:mt-0 sm:min-w-[150px] sm:justify-center lg:w-auto'
                        onClick={handlePriceClick}
                    >
                        {!pr ? 'Price Range' : pr}
                    </button>
                </div>
                <div className={`${s.line}`} />
                <button
                    type='button'
                    onClick={handleSubmit}
                    className={`ml-[18px] mr-[0px] grid max-w-[calc(33.333%-11px)] grid-cols-2 place-items-center gap-1 py-3 pl-2 small:mx-[18px] small:min-w-[130px] small:max-w-[auto] ${s.hoverable}`}
                >
                    Search
                    <Image
                        src='/icons/search.svg'
                        alt='Search icon'
                        width={0}
                        height={0}
                        className='ml-[-20px] h-[17px] w-[17px]'
                    />
                </button>
            </div>
        </div>
    ) : (
        <>
            <div className='mt-[300px] flex w-full px-[3vw] text-center text-sm xl:mt-[200px] '>
                <div
                    className={`min-w-[132px] flex-1 ${propertyType === 'ready' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] pb-[8px]`}
                    onClick={() => setPropertyType('ready')}
                >
                    Ready
                </div>
                <div
                    className={`min-w-[132px] flex-1 ${propertyType === 'upcoming' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] pb-[8px]`}
                    onClick={() => setPropertyType('upcoming')}
                >
                    New Projects
                </div>
            </div>
            <div className='mt-[15px] flex flex-col px-[3vw] text-sm'>
                <select
                    value={projType}
                    onChange={handleProjTypeChange}
                    className={`custom-select relative flex w-full cursor-pointer flex-row items-center justify-between border-0 border-b-[1px] border-[#eddfd0] border-opacity-60 bg-transparent py-3 pl-[0]  text-[#eddfd0] focus:border-0 focus:border-b-[1px] focus:border-[#eddfd0] focus:outline-none focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0]`}
                >
                    <option className='border-[#eddfd0]' value=''>
                        Available For
                    </option>
                    <option className='border-[#eddfd0]' value='buy'>
                        Buy
                    </option>
                    <option className='border-[#eddfd0]' value='rent'>
                        Rent
                    </option>
                </select>
                <input
                    type='text'
                    name='textSearch'
                    id='textSearch_input'
                    value={textSearch}
                    onChange={(e) => setTextSearch(e.target.value)}
                    className={`block w-full 
                            border-0 border-b-[1px] border-[#eddfd0] border-opacity-60
                            bg-transparent
                            px-0 pb-[15px] pt-[24px]  
                    text-sm 
                    placeholder-[#eddfd0] ring-0 ring-inset ring-transparent transition duration-200 ease-in-out
                    hover:ring-[#EDDFD0]/50 focus:border-0 focus:border-b-[1px] focus:border-[#eddfd0] focus:outline-none focus:ring-0 focus:ring-inset 
                    focus:ring-[#EDDFD0] 
                    sm:leading-6`}
                    placeholder='Community or Building'
                />
                <div className='relative'>
                    <input
                        type='text'
                        name='location'
                        id='location_input'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className={`block w-full 
                            border-0 border-b-[1px] border-[#eddfd0] border-opacity-60
                            bg-transparent
                            px-0 pb-[15px] pt-[24px]  
                    text-sm 
                    placeholder-[#eddfd0] ring-0 ring-inset ring-transparent transition duration-200 ease-in-out
                    hover:ring-[#EDDFD0]/50 focus:border-0 focus:border-b-[1px] focus:border-[#eddfd0] focus:outline-none focus:ring-0 focus:ring-inset 
                    focus:ring-[#EDDFD0] 
                    sm:leading-6`}
                        placeholder='Location'
                    />
                    <Image
                        src='/icons/location_round.svg'
                        alt='Location'
                        width={24}
                        height={24}
                        className='absolute right-[0px] top-[calc(50%-10px)] mr-[5px]'
                    />
                </div>
                {/* <button
                    className='flex border-b border-solid border-[#eddfd0] border-opacity-60 pb-[15px] pt-[24px] transition duration-200 ease-in-out
                    hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                >
                    Price
                </button> */}
                <div className={`relative`}>
                    {visible && (
                        <PriceRange
                            setPr={setPr}
                            pr={pr}
                            setVisible={setVisible}
                            keyPrefix='homemob'
                            className='absolute bottom-[50px] left-[0%] z-[10]'
                        />
                    )}
                    <button
                        className='w-full border-b border-solid border-[#eddfd0] border-opacity-60 pb-[15px] pt-[24px] text-left'
                        onClick={handlePriceClick}
                    >
                        {!pr ? 'Price Range' : pr}
                    </button>
                </div>
                <button
                    className='mx-auto mt-[26px] flex w-[114px] gap-1 rounded-3xl bg-[#EDDFD0] px-[30px] py-[10px] text-[#916940] transition
                    duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                    type='button'
                    onClick={handleSubmit}
                >
                    Search
                    <Image
                        src='/icons/search_brown.svg'
                        alt='Search icon'
                        width={13}
                        height={13}
                        className='mt-[2px]'
                    />
                </button>
            </div>
        </>
    );
};
