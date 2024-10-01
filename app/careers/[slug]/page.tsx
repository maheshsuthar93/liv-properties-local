'use client';

import { EnquireForm, Loading } from '@/app/components';
import Link from 'next/link';
import Image from 'next/image';
import { Career, CareerDetailProps, Careers } from '@/app/types';
import { fetchData, fetchGeneral, getFieldValueByName } from '@/app/constants';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CareerDetail({ params }: CareerDetailProps) {
  const { slug } = useParams();

  const [careers, setCareers] = useState<Careers | null>(null);
  const [careersData, setCareersData] = useState<Careers | null>(null);
  const [career, setCareer] = useState<Career | null>(null);

  useEffect(() => {
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    if (slug) {
      fetchGeneral('careers').then((data) => {
        setCareersData(data);

        const foundItem = data.find(
          (item: Career) => item.id === parseInt(slugString, 10),
        );
        setCareer(foundItem || null);
      });
      fetchData(3).then((data) => setCareers(data));
    }
  }, [slug]);
  console.log(careersData);

  if (!career) {
    return (
      <div className="mt-[20px] w-full md:mt-[43px]">
        <Loading />
      </div>
    );
  }
  return (
    <div className="mb-[30px] mt-[200px] w-full sm:mb-[60px] xl:mb-[70px] 3xl:max-w-[1200px]">
      <div
        className="gotham w-full border-b border-solid border-[#eddfd0] border-opacity-60 pb-[30px] text-start text-[40px] font-[700] leading-[39px] sm:text-[45px] sm:leading-[42.3px]
            md:pb-[50px] xl:pb-[79px] "
      >
        <div className="inline-block max-w-[220px] capitalize small:max-w-[300px]">
          {careers?.['careers-section-1'][0].field_value ?? 'Careers'}
        </div>
      </div>
      <div className="mt-[21px] flex flex-wrap justify-between gap-x-[30px] gap-y-[20px] sm:flex-nowrap md:gap-x-[50px] lg:gap-x-[100px]">
        <div>
          <div className="helveticaNeue text-[30px] font-[400] leading-[39px]">
            {career?.heading}
          </div>
          <div className="gothamMedium mt-[7px] text-[20px] leading-[26px]">
            {career?.subheading}
          </div>
          <div className="mt-[38px] flex gap-[15px]">
            {/* {career?.remote && ( */}
            <button
              className="helveticaNeue flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] px-[16px] pb-[10px] pl-[13px]
                            pt-[10px] text-[12px] font-[400] leading-[19.44px] transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black"
            >
              <Image
                src="/icons/location.svg"
                alt="Location icon"
                width={17}
                height={17}
              />
              100% Remote
            </button>
            {/* )}
                        {career?.fulltime && ( */}
            <button
              className="helveticaNeue flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] px-[16px] pb-[10px] pl-[13px]
                            pt-[10px] text-[12px] font-[400] leading-[19.44px] transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black"
            >
              <Image
                src="/icons/alarm.svg"
                alt="Alarm clock icon"
                width={17}
                height={17}
              />
              Full time
            </button>
            {/* )} */}
          </div>
          <div
            className="helveticaNeue mt-[10px] text-[16px] font-[400] leading-[25.92px]"
            dangerouslySetInnerHTML={{
              __html: career?.description,
            }}
          ></div>
        </div>
        <Link href={`#apply-now`} className="hidden sm:block">
          <div
            className="helveticaNeue flex h-fit flex-row items-center rounded-3xl p-2 text-[12px] font-[400] leading-[19.44px] transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700
                active:bg-white/60 active:text-black sm:flex-col sm:items-end"
          >
            <Image
              src="/icons/arrow_outward.svg"
              className="order-2 ml-[20px] w-[30px] sm:order-1 sm:ml-0 sm:w-full"
              alt="Outward arrow"
              width={48}
              height={48}
            />
            <span className="order-1 sm:order-2">Apply</span>
          </div>
        </Link>
      </div>
      <div
        className="gotham mt-[30px] w-full text-[44px] font-[700] leading-[39px] sm:text-[50px] sm:leading-[47px]"
        id="apply-now"
      >
        <h2>
          {getFieldValueByName(
            careers?.['careers-section-1'] || [],
            'Form Heading',
          )}
        </h2>
      </div>
      <EnquireForm hasUploadField />
    </div>
  );
}
