'use client';

import Image from 'next/image';
import s from '@/app/ui/main.module.css';
import { useState, useEffect } from 'react';
import { useAPI } from '@/app/context/APIContext';
import { Select } from '@/app/components';
import { useRouter, useSearchParams } from 'next/navigation';
import PriceRange from './PriceRange';

type BedroomOption = 'Bedroom' | 'Studio' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '7+';
type BathroomOption = 'Bathroom' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '7+';
type HomeTypeOption = 'Home Type' | 'Villa' | 'Apartment' | 'Pentouse' | 'Townhouse' | 'Duplex';
type SelectedOption = 'Price low to high' | 'Price high to low';

export const PageSearch = ({ type = 'ready' }) => {
    const [projType, setProjType] = useState<'rent' | 'buy' | ''>('');
    const [pr, setPr] = useState('');
    const [bedroom, setBedroom] = useState<BedroomOption>('Bedroom');
    const [bathroom, setBathroom] = useState<BathroomOption>('Bathroom');
    const [location, setLocation] = useState('');
    const [hometype, setHometype] = useState<HomeTypeOption>('Home Type');
    const [selectedOption, setSelectedOption] =
        useState<SelectedOption>('Price low to high');
    const [textSearch, setTextSearch] = useState('');
    const [visible, setVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const router = useRouter();
    const { setSearchParameters } = useAPI();

    const handleLocation = () => {
        if (location) setLocation('');
    };

    const handlePriceClick = () => {
        setVisible((prevCheck) => !prevCheck);
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        const availableFor = params.get('availablefor') as 'rent' | 'buy' | '';
        if (availableFor) setProjType(availableFor);

        const priceRange = params.get('price_range');
        if (priceRange) setPr(priceRange);

        const numberOfBedroom = params.get('number_of_bedroom') as BedroomOption;
        if (numberOfBedroom && numberOfBedroom !== 'Bedroom')
            setBedroom(numberOfBedroom);

        const numberOfBathroom = params.get('number_of_bathroom') as BathroomOption;
        if (numberOfBathroom && numberOfBathroom !== 'Bathroom')
            setBathroom(numberOfBathroom);

        const propertyType = params.get('property_type') as HomeTypeOption;
        if (propertyType && propertyType !== 'Home Type')
            setHometype(propertyType);

        const locationParam = params.get('location');
        if (locationParam) setLocation(locationParam);

        const textSearchParam = params.get('search_text');
        if (textSearchParam) setTextSearch(textSearchParam);

        // const orderOption = params.get('order_option') as SelectedOption;
        // if (orderOption) setSelectedOption(orderOption);

        if (params.toString()) setSearchQuery(`?${params.toString()}`);
    }, []);

    // Update the searchQuery state when the URL changes
    useEffect(() => {
        if (searchQuery) {
            router.push(searchQuery, { scroll: false });
            setSearchParameters(searchQuery);
        }
    }, [searchQuery]);

    // set all the search parameters based on the selection
    useEffect(() => {
        const params = new URLSearchParams();

        if (projType) params.set('availablefor', projType);
        if (pr) params.set('price_range', pr);
        if (bedroom !== 'Bedroom') params.set('number_of_bedroom', bedroom);
        if (bathroom !== 'Bathroom') params.set('number_of_bathroom', bathroom);
        if (hometype !== 'Home Type') params.set('property_type', hometype);
        type === 'ready'
            ? params.set('construction_status', type)
            : params.set('construction_status', 'upcoming');
        if (location) params.set('location', location);
        if (textSearch) params.set('search_text', textSearch);

        const paramString = params.toString();
        const newSearchQuery = paramString ? `?${paramString}` : '';

        setSearchQuery(newSearchQuery);
    }, [
        projType,
        pr,
        bedroom,
        bathroom,
        hometype,
        selectedOption,
        location,
        textSearch
    ]);

    if (type === 'ready')
        return (
            <div className='mt-[80px] text-[12px] lg:mt-[50px]'>
                <div className='flex flex-col gap-4 sm:flex-row sm:flex-wrap'>
                    <div
                        className={`!py-3 ${s.propFilter} ${s.hoverable} min-w-[calc(33.333%-0.8rem)] lg:min-w-[auto]`}
                    >
                        {visible && (
                            <PriceRange
                                setPr={setPr}
                                pr={pr}
                                setVisible={setVisible}
                                keyPrefix='page'
                                className='absolute bottom-[calc(100%-30px)] z-[10] sm:bottom-[calc(100%-10px)] sm:left-[-50%]'
                            />
                        )}
                        <button
                            className='mt-[30px] flex w-full flex-row items-center justify-start px-[16px]
                            py-3 pl-[13px] text-xs transition duration-200 ease-in-out sm:mt-0 sm:min-w-[150px] sm:justify-center lg:w-auto'
                            onClick={handlePriceClick}
                        >
                            {!pr ? 'Price Range' : pr}
                        </button>
                    </div>
                    <Select
                        options={[
                            {
                                value: 'Bedroom',
                                label: 'Bedroom'
                            },
                            {
                                value: 'studio',
                                label: 'Studio'
                            },
                            {
                                value: '1',
                                label: '1'
                            },
                            {
                                value: '2',
                                label: '2'
                            },
                            {
                                value: '3',
                                label: '3'
                            },
                            {
                                value: '4',
                                label: '4'
                            },
                            {
                                value: '5',
                                label: '5'
                            },
                            {
                                value: '6',
                                label: '6'
                            },
                            {
                                value: '7',
                                label: '7'
                            },
                            {
                                value: '7+',
                                label: '7+'
                            }
                        ]}
                        value={bedroom}
                        className={`page-search ${s.propFilter} mt-[-12px] min-w-[calc(33.333%-0.5rem)] sm:mt-0 lg:min-w-[150px]`}
                        onChange={(b) => setBedroom(b as BedroomOption)}
                    />
                    <Select
                        options={[
                            {
                                value: 'Bathroom',
                                label: 'Bathroom'
                            },
                            {
                                value: '1',
                                label: '1'
                            },
                            {
                                value: '2',
                                label: '2'
                            },
                            {
                                value: '3',
                                label: '3'
                            },
                            {
                                value: '4',
                                label: '4'
                            },
                            {
                                value: '5',
                                label: '5'
                            },
                            {
                                value: '6',
                                label: '6'
                            },
                            {
                                value: '7',
                                label: '7'
                            },
                            {
                                value: '7+',
                                label: '7+'
                            }
                        ]}
                        value={bathroom}
                        className={`page-search ${s.propFilter} mt-[-12px] min-w-[calc(33.333%-0.5rem)] sm:mt-0 lg:min-w-[150px]`}
                        onChange={(bt) => setBathroom(bt as BathroomOption)}
                    />
                    <Select
                        options={[
                            {
                                value: 'Home Type',
                                label: 'Home Type'
                            },
                            {
                                value: 'Villa',
                                label: 'Villa'
                            },
                            {
                                value: 'Apartment',
                                label: 'Apartment'
                            },
                            {
                                value: 'Pentouse',
                                label: 'Pentouse'
                            },
                            {
                                value: 'Townhouse',
                                label: 'Townhouse'
                            },
                            {
                                value: 'Duplex',
                                label: 'Duplex'
                            }
                        ]}
                        value={hometype}
                        className={`page-search ${s.propFilter} mt-[-12px] min-w-[calc(33.333%-0.5rem)] sm:mt-0 lg:min-w-[150px]`}
                        onChange={(v) => setHometype(v as HomeTypeOption)}
                    />
                    {/* <Select
                        options={[
                            {
                                value: 'Price low to high',
                                label: 'Price low to high'
                            },
                            {
                                value: 'Price hig to low',
                                label: 'Price high to low'
                            }
                        ]}
                        value={selectedOption}
                        className={`page-search ${s.propFilter} mt-[-12px] min-w-[calc(33.333%-0.5rem)] sm:mt-0 lg:min-w-[150px]`}
                        onChange={(v) => setSelectedOption(v as SelectedOption)}
                    /> */}
                </div>
                <div className='mt-[17px] flex flex-row flex-wrap text-center lg:flex-nowrap'>
                    <div
                        className={`max-[639px]:flex-1 min-w-[50%] py-3 lg:min-w-[160px] ${projType === 'rent' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable} cursor-pointer`}
                        onClick={() => setProjType('rent')}
                    >
                        Rent
                    </div>
                    <div
                        className={`max-[639px]:flex-1 min-w-[50%] py-3 lg:min-w-[160px] ${projType === 'buy' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable} cursor-pointer`}
                        onClick={() => setProjType('buy')}
                    >
                        Buy
                    </div>
                    {location && (
                        <button
                            className='mt-[30px] flex w-[180px] flex-row items-center justify-between gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] px-[16px] py-3 pl-[13px]
                            text-xs transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black sm:w-auto sm:min-w-[150px] lg:ml-[30px] lg:mt-0'
                            onClick={handleLocation}
                        >
                            <div>{location}</div>
                            <span>X</span>
                        </button>
                    )}
                </div>
            </div>
        );
    return (
        <div className='mt-[130px] sm:mt-[80px] text-[12px] small:mt-[50px]'>
            <div className='flex flex-wrap gap-4'>
                <div
                    className={`${s.upcomingSearch} ${s.hoverable} flex !w-full justify-between sm:!w-[291px]`}
                >
                    <input
                        type='text'
                        name='search_text'
                        id='search_input'
                        value={textSearch}
                        onChange={(e) => setTextSearch(e.target.value)}
                        maxLength={40}
                        className={`mr-[20px] block h-full w-full border-0 bg-transparent
                        py-1.5 text-[100%] placeholder-[#eddfd0] ring-0 ring-inset ring-transparent transition duration-200
                        ease-in-out hover:ring-[#EDDFD0]/50 focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] sm:leading-6`}
                        placeholder='Type Here'
                    />
                    <Image
                        src='/icons/search.svg'
                        alt='Search icon'
                        width={0}
                        height={0}
                        className='inline=block ml-[-20px] h-[16px] w-[16px]'
                    />
                </div>
            </div>
        </div>
    );
};
