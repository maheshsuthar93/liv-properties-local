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

type ProjectStatusType = 'ready' | 'upcoming' | 'status';
type PropertyType =
  | 'propertyType'
  | 'villa'
  | 'apartment'
  | 'pentouse'
  | 'townhouse';

export const HomeSearch = () => {
  const router = useRouter();

  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [projType, setProjType] = useState<ProjType>('');
  const [pr, setPr] = useState('');
  const [bedroomRange, setBedroomRange] = useState('');
  const [location, setLocation] = useState('');
  // const [propertyType, setPropertyType] = useState<'ready' | 'upcoming'>(
  //   'ready',
  // );
  const [propertyType, setPropertyType] =
    useState<PropertyType>('propertyType');
  const [projectStatus, setProjectStatus] =
    useState<ProjectStatusType>('status');

  const [textSearch, setTextSearch] = useState('');
  const [emirate, setEmirate] = useState('');

  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState(false);
  const [visibleNoOfBedrooms, setVisibleNoOfBedrooms] = useState(false);

  const handlePriceClick = () => {
    setVisible((prevCheck) => !prevCheck);
  };
  const handleBedroomsClick = () => {
    setVisibleNoOfBedrooms((prevCheck) => !prevCheck);
  };
  // Handler for onChange event
  const handleProjTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setProjType(event.target.value as ProjType);
  };

  const handlePropertyTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPropertyType(event.target.value as PropertyType);
  };
  const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setProjectStatus(event.target.value as ProjectStatusType);
  };

  const buildQueryString = (params: Record<string, string | undefined>) => {
    const queryString = Object.entries(params)
      .filter(([key, value]) => value && value.trim() !== '')
      .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
      .join('&');
    return queryString ? `?${queryString}` : '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params: HomeSearchText = {
      construction_status:
        projectStatus == 'status' ? undefined : projectStatus,
      // availablefor: projType,
      emirate: emirate,
      property_type: propertyType == 'propertyType' ? undefined : propertyType,
      price_range: pr,
      location: location,
      search_text: textSearch,
    };
    const queryString = buildQueryString(params);
    console.log(`Query ${queryString}`);
    //const page = params.construction_status ?? 'ready';

    // router.push(`/projects/${page}${queryString}`);
    router.push(`/projects/ready${queryString}`);
  };

  useLayoutEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // small:px-[85px]
  return isLargeScreen ? (
    <div className="home-search z-[3] mt-[250px] md:mt-[300px] small:mt-[30px]  ">
      <div className="gradient-from  bg-gradient-to-r small:p-[20px]">
        <div className=" max-[639px]:mx-[3vw] max-[639px]:w-full max-[639px]:text-center  gotham mb-[10px] flex text-[35px] font-[700] leading-[65px] sm:text-[35px] sm:leading-[42.3px]">
          <div className="inline-block capitalize">
            Luxury Properties for Sale
          </div>
        </div>
        {/* <div className="max-[639px]:mx-[3vw] max-[639px]:w-full max-[639px]:text-center flex px-[3vw] text-sm sm:px-0 ">
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
        </div> */}
        <div className="max-[639px]:w-full  helveticaNeue ml-[-10px] mt-[15px] flex flex-wrap items-center justify-evenly gap-2 text-[16px] font-[500] font-[500] leading-[32px] sm:text-[16px] sm:leading-[35.55px]">
          {/* <select
            value={projType}
            onChange={handleProjTypeChange}
            className={`custom-select relative flex  max-w-[calc(33%-11px)] cursor-pointer flex-row items-center justify-between border-0 border-[#eddfd0] bg-transparent py-3 pl-[0] text-[#eddfd0] focus:border-0  focus:outline-none focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] small:min-w-[100px] small:max-w-[auto]`}
          >
            <option className="border-[#eddfd0]" value="">
              Available For
            </option>
            <option className="border-[#eddfd0]" value="buy">
              Buy
            </option>
            <option className="border-[#eddfd0]" value="rent">
              Rent
            </option>
          </select> 
          
          
          */}
          <Select
            value={projectStatus}
            //onChange={handleStatusChange}

            onChange={(v) => setProjectStatus(v as ProjectStatusType)}
            className={`page-search  mt-[-12px] min-w-[calc(33.333%-0.5rem)] sm:mt-0 lg:min-w-[75px]`}
            //className={`custom-select relative  flex max-w-[calc(40%-11px)]  cursor-pointer flex-row items-center justify-between border-0 border-[#eddfd0] bg-transparent py-3 pl-[0] text-sm text-[#eddfd0] focus:border-0  focus:outline-none focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] small:min-w-[70px] small:max-w-[auto]`}
            options={[
              {
                value: 'status',
                label: 'Status',
              },
              {
                value: 'ready',
                label: 'Ready',
              },
              {
                value: 'upcoming',
                label: 'New',
              },
            ]}
          >
            {/* <option className="border-[#eddfd0]" value="">
              Status
            </option>
            <option className="border-[#eddfd0]" value="ready">
              Ready
            </option>
            <option className="border-[#eddfd0]" value="upcoming">
              New
            </option> */}
          </Select>
          <div className={`${s.line}`} />
          <div
            className={`${s.hoverable} max-w-[calc(40%-11px)] small:min-w-[75px] small:max-w-[auto]`}
          >
            {/* <input
              type="text"
              name="textSearch"
              id="textSearch_input"
              value={emirate}
              onChange={(e) => setEmirate(e.target.value)}
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
              placeholder="Emirate"
            /> */}

            <input
              type="text"
              name="textSearch"
              id="textSearch_input"
              value={emirate}
              onChange={(e) => setEmirate(e.target.value)}
              className={`block h-full border-0 bg-transparent py-1.5 text-center
                    text-[100%] placeholder-[#eddfd0] ring-0 ring-inset ring-transparent transition duration-200 ease-in-out
                    hover:ring-[#EDDFD0]/50 focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] sm:leading-6 small:w-[110px] ${s.hoverable}`}
              placeholder="Emirate"
            />
          </div>
          <div className={`${s.line}`} />
          <div
            // className={` ${s.hoverable} flex max-w-[calc(25%-11px)] justify-center small:min-w-[75px] small:max-w-[auto]`}
            className={` ${s.hoverable} flex max-w-[calc(25%-11px)] justify-center small:min-w-[75px] small:max-w-[auto]`}
          >
            <input
              type="text"
              name="location"
              id="location_input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={`block h-full border-0 bg-transparent py-1.5 text-center
                    text-[100%] placeholder-[#eddfd0] ring-0 ring-inset ring-transparent transition duration-200 ease-in-out
                    hover:ring-[#EDDFD0]/50 focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] sm:leading-6 small:w-[110px] ${s.hoverable}`}
              placeholder="Location"
            />
            {/* <input
              type="text"
              name="location"
              id="location_input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={`block h-full w-full border-0 bg-transparent py-1.5 text-center
                    text-[100%] placeholder-[#eddfd0] ring-0 ring-inset ring-transparent transition duration-200 ease-in-out
                    hover:ring-[#EDDFD0]/50 focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] sm:leading-6 small:w-[110px] ${s.hoverable}`}
              placeholder="Location"
            /> */}
          </div>
          <div className={`${s.line}`} />
          <div
            className={` ${s.hoverable} max-w-[calc(40%-11px)] small:min-w-[70px] small:max-w-[auto]`}
          >
            {/* <input
              type="text"
              name="textSearch"
              id="textSearch_input"
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
              placeholder="Community"
            /> */}

            <input
              type="text"
              name="textSearch"
              id="textSearch_input"
              value={textSearch}
              onChange={(e) => setTextSearch(e.target.value)}
              className={`block h-full border-0 bg-transparent py-1.5 text-center
                    text-[100%] placeholder-[#eddfd0] ring-0 ring-inset ring-transparent transition duration-200 ease-in-out
                    hover:ring-[#EDDFD0]/50 focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] sm:leading-6 small:w-[120px] ${s.hoverable}`}
              placeholder="Community"
            />
          </div>
          <div className={`${s.line}`} />
          <Select
            value={propertyType}
            //onChange={handleStatusChange}

            onChange={(v) => setPropertyType(v as PropertyType)}
            className={`page-search  mt-[-12px] min-w-[calc(33.333%-0.5rem)] sm:mt-0 lg:min-w-[75px] small:min-w-[75px]`}
            //className={`custom-select relative  flex max-w-[calc(40%-11px)]  cursor-pointer flex-row items-center justify-between border-0 border-[#eddfd0] bg-transparent py-3 pl-[0] text-sm text-[#eddfd0] focus:border-0  focus:outline-none focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] small:min-w-[70px] small:max-w-[auto]`}
            options={[
              {
                value: 'propertyType',
                label: 'Property Type',
              },
              {
                value: 'villa',
                label: 'Villa',
              },
              {
                value: 'apartment',
                label: 'Apartment',
              },
              {
                value: 'pentouse',
                label: 'Pentouse',
              },
              {
                value: 'townhouse',
                label: 'Townhouse',
              },
              {
                value: 'duplex',
                label: 'Duplex',
              },
            ]}
          >
            {/* <option className="border-[#eddfd0]" value="">
              Status
            </option>
            <option className="border-[#eddfd0]" value="ready">
              Ready
            </option>
            <option className="border-[#eddfd0]" value="upcoming">
              New
            </option> */}
          </Select>

          {/* <select
            value={projType}
            onChange={handlePropertyTypeChange}
            className={`custom-select  mx-[11px] max-w-[calc(33.333%-11px)]  cursor-pointer flex-row items-center justify-between border-0 border-[#eddfd0] bg-transparent text-sm focus:ring-0 focus:ring-inset small:min-w-[70px] small:max-w-[auto] `}
            //className={`custom-select relative flex  max-w-[calc(40%-11px)] cursor-pointer flex-row items-center justify-between border-0 border-[#eddfd0] bg-transparent py-3 pl-[0] text-[#eddfd0] focus:border-0  focus:outline-none focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] small:min-w-[100px] small:max-w-[auto] `}
          >
            <option className="border-[#eddfd0]" value="">
              Property Type
            </option>
            <option className="border-[#eddfd0]" value="buy">
              Villa
            </option>
            <option className="border-[#eddfd0]" value="rent">
              Apartment
            </option>
          </select> */}
          <div className={`${s.line}`} />
          <div
            className={` ${s.hoverable} max-w-[calc(33.333%-11px)] small:min-w-[75px] small:max-w-[auto]`}
          >
            {visibleNoOfBedrooms && (
              <PriceRange
                setPr={setBedroomRange}
                pr={bedroomRange}
                rangeType="other"
                maxPlaceholder={'Max bedrooms'}
                minPlaceholder={'Min bedrooms'}
                setVisible={setVisibleNoOfBedrooms}
                keyPrefix="home"
                className="absolute bottom-[calc(100%-30px)] left-[-40%] z-[10] sm:bottom-[calc(100%+20px)] md:left-[-50%] msmall:left-[unset] msmall:right-[-20px] small:left-[-50%] small:right-[unset]"
              />
            )}
            <button
              className="mt-[30px] flex h-full w-full flex-row items-center justify-start px-[16px]
                            py-[6px] pl-[13px] transition duration-200 ease-in-out sm:mt-0 sm:min-w-[85px] sm:justify-center lg:w-auto"
              onClick={handleBedroomsClick}
            >
              {!bedroomRange ? 'Bedrooms' : bedroomRange}
            </button>
          </div>
          <div className={`${s.line}`} />
          <div
            className={`${s.hoverable} max-w-[calc(33.333%-11px)] small:min-w-[75px] small:max-w-[auto]`}
          >
            {visible && (
              <PriceRange
                setPr={setPr}
                pr={pr}
                rangeType="price"
                setVisible={setVisible}
                maxPlaceholder={undefined}
                minPlaceholder={undefined}
                keyPrefix="home"
                className="absolute bottom-[calc(100%-30px)] left-[-40%] z-[10] sm:bottom-[calc(100%+20px)] md:left-[-50%] msmall:left-[unset] msmall:right-[-20px] small:left-[-50%] small:right-[unset]"
              />
            )}
            <button
              className="mt-[30px] flex h-full w-full flex-row items-center justify-start px-[16px]
                            py-[6px] pl-[13px] transition duration-200 ease-in-out sm:mt-0 sm:min-w-[85px] sm:justify-center lg:w-auto"
              onClick={handlePriceClick}
            >
              {!pr ? 'Price Range' : pr}
            </button>
          </div>
          <div className={`${s.line}`} />
          <button
            type="button"
            onClick={handleSubmit}
            className={`ml-[18px] mr-[0px] grid max-w-[calc(33.333%-11px)] grid-cols-2 place-items-center gap-1 py-3 pl-2 small:mx-[18px] small:min-w-[75px] small:max-w-[auto] ${s.hoverable}`}
          >
            <Image
              src="/images/search.svg"
              alt="Search icon"
              width={0}
              height={0}
              className="h-[41px] w-[41px]"
            />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="mt-[100px] flex w-full px-[3vw] text-center text-sm xl:mt-[200px] ">
        {/* <div
          className={`min-w-[132px] flex-1 ${projectStatus === 'ready' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] pb-[8px]`}
          onClick={() => setProjectStatus('ready')}
        >
          Ready
        </div>
        <div
          className={`min-w-[132px] flex-1 ${projectStatus === 'upcoming' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] pb-[8px]`}
          onClick={() => setProjectStatus('upcoming')}
        >
          New Projects
        </div> */}
      </div>
      <div className="mt-[15px] flex flex-col px-[3vw] text-sm ">
        <Select
          value={projectStatus}
          onChange={(v) => setProjectStatus(v as ProjectStatusType)}
          className={`page-search ${s.propFilter} mt-[-12px] min-w-[calc(33.333%-0.5rem)] sm:mt-0 lg:min-w-[150px]`}
          options={[
            {
              value: 'Status',
              label: 'Status',
            },
            {
              value: 'ready',
              label: 'Ready',
            },
            {
              value: 'upcoming',
              label: 'New',
            },
          ]}
        >
          {/* <option className="border-[#eddfd0]" value="">
              Status
            </option>
            <option className="border-[#eddfd0]" value="ready">
              Ready
            </option>
            <option className="border-[#eddfd0]" value="upcoming">
              New
            </option> */}
        </Select>
        <Select
          value={propertyType}
          onChange={(v) => setPropertyType(v as PropertyType)}
          className={`page-search ${s.propFilter} mt-[-12px] min-w-[calc(33.333%-0.5rem)] sm:mt-0 lg:min-w-[75px] small:min-w-[80px]`}
          options={[
            {
              value: 'propertyType',
              label: 'Property Type',
            },
            {
              value: 'villa',
              label: 'Villa',
            },
            {
              value: 'apartment',
              label: 'Apartment',
            },
            {
              value: 'pentouse',
              label: 'Pentouse',
            },
            {
              value: 'townhouse',
              label: 'Townhouse',
            },
            {
              value: 'duplex',
              label: 'Duplex',
            },
          ]}
        ></Select>

        {/* <select
          value={projType}
          onChange={handleProjTypeChange}
          className={`custom-select relative flex w-full cursor-pointer flex-row items-center justify-between border-0 border-b-[1px] border-[#eddfd0] border-opacity-60 bg-transparent py-3 pl-[0]  text-[#eddfd0] focus:border-0 focus:border-b-[1px] focus:border-[#eddfd0] focus:outline-none focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0]`}
        >
          <option className="border-[#eddfd0]" value="">
            Available For
          </option>
          <option className="border-[#eddfd0]" value="buy">
            Buy
          </option>
          <option className="border-[#eddfd0]" value="rent">
            Rent
          </option>
        </select> */}
        <input
          type="text"
          name="textSearch"
          id="textSearch_input"
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
          placeholder="Community"
        />
        <div className="relative">
          <input
            type="text"
            name="location"
            id="location_input"
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
            placeholder="Location"
          />
          <Image
            src="/icons/location_round.svg"
            alt="Location"
            width={24}
            height={24}
            className="absolute right-[0px] top-[calc(50%-10px)] mr-[5px]"
          />
        </div>
        <div className={`relative`}>
          {visibleNoOfBedrooms && (
            <PriceRange
              setPr={setBedroomRange}
              pr={bedroomRange}
              rangeType="other"
              maxPlaceholder={'Max bedrooms'}
              minPlaceholder={'Min bedrooms'}
              setVisible={setVisibleNoOfBedrooms}
              keyPrefix="home"
              className="absolute bottom-[50px] left-[0%] z-[10]"
            />
          )}
          <button
            className="w-full border-b border-solid border-[#eddfd0] border-opacity-60 pb-[15px] pt-[24px] text-left"
            onClick={handleBedroomsClick}
          >
            {!bedroomRange ? 'Bedrooms' : bedroomRange}
          </button>
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
              keyPrefix="homemob"
              rangeType="price"
              minPlaceholder={undefined}
              maxPlaceholder={undefined}
              className="absolute bottom-[50px] left-[0%] z-[10]"
            />
          )}
          <button
            className="w-full border-b border-solid border-[#eddfd0] border-opacity-60 pb-[15px] pt-[24px] text-left"
            onClick={handlePriceClick}
          >
            {!pr ? 'Price Range' : pr}
          </button>
        </div>
        <button
          className="mx-auto mt-[26px] flex w-[114px] gap-1 rounded-3xl bg-[#EDDFD0] px-[30px] py-[10px] text-[#916940] transition
                    duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black"
          type="button"
          onClick={handleSubmit}
        >
          Search
          <Image
            src="/icons/search_brown.svg"
            alt="Search icon"
            width={13}
            height={13}
            className="mt-[2px]"
          />
        </button>
      </div>
    </>
  );
};
