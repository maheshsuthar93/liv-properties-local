'use client';

import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Instagram,
  InvestmentAdvisory,
  Loading,
  MeetTheTeam,
} from '@/app/components';
import { AboutUs, TeamMember } from '@/app/types';
import { fetchGeneral } from '../constants';

const tabsState = {
  who: true,
  mission: false,
  vision: false,
  meet: false,
};

export const WhoWeAre = (props: { data: AboutUs }) => {
  const [activeTab, setActiveTab] = useState('who');

  return (
    <>
      <div className="helveticaNeue mt-[100px] flex flex-wrap text-[16px] font-[500] leading-[35.55px] xl:mt-[50px] msm:flex-nowrap ">
        <div
          className={`w-[100px] cursor-pointer border-b border-solid border-[#eddfd0] border-opacity-60 py-[10px] text-center ${activeTab === 'who' ? 'border-b-[4px]' : ''}`}
          onClick={() => setActiveTab('who')}
        >
          {props.data?.aboutussection2[2].field_value}
        </div>
        <div
          className={`w-[155px] cursor-pointer border-b border-solid border-[#eddfd0] border-opacity-60 py-[10px] text-center ${activeTab === 'mission' ? 'border-b-[4px]' : ''}`}
          onClick={() => setActiveTab('mission')}
        >
          {props.data?.aboutusmission[4].field_value}
          {' & '}
          {props.data?.aboutusvision[6].field_value}
        </div>
        {/* <div
          className={`w-[83px] cursor-pointer border-b border-solid border-[#eddfd0] border-opacity-60 py-[10px] text-center ${activeTab === 'vision' ? 'border-b-[4px]' : ''}`}
          onClick={() => setActiveTab('vision')}
        >
          {props.data?.aboutusvision[6].field_value}
        </div> */}
        <div
          className={`w-[150px] cursor-pointer border-b border-solid border-[#eddfd0] border-opacity-60 py-[10px] text-center ${activeTab === 'meet' ? 'border-b-[4px]' : ''}`}
          onClick={() => setActiveTab('meet')}
        >
          {props.data?.meettheteam[13].field_value}
        </div>
      </div>
      {/* Who we are */}
      {/* Who we are */}
      {activeTab === 'who' && (
        <>
          <div className="helveticaNeue mt-[47px] flex w-full flex-wrap gap-[26px] border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[37px] text-[16px] font-[400] leading-[25.92px] ">
            <div
              className="who-desc"
              dangerouslySetInnerHTML={{
                __html: props.data?.aboutussection2[3].field_value as string,
              }}
            ></div>
          </div>
          <div className="mb-[30px] mt-[50px] flex flex-wrap sm:mb-[60px]">
            <Instagram />
          </div>
        </>
      )}
      {/* Misson & Vision */}
      {(activeTab === 'mission' || activeTab === 'vision') && (
        <div className="helveticaNeue mb-[33px] mt-[33px] flex w-full flex-wrap gap-[25px] small:text-[16px]">
          <div className="lg:w-[calc(50%-13px)]">
            <div className="mb-[11px] text-[30px] font-[500] leading-[36.15px]">
              {props.data?.aboutusmission[4].field_value}
            </div>
            <div
              className="text-[16px] font-[400] leading-[25.92px]"
              dangerouslySetInnerHTML={{
                __html: props.data?.aboutusmission[5].field_value as string,
              }}
            ></div>
          </div>
          <div className="lg:w-[calc(50%-13px)]">
            <h3 className="mb-[11px] text-[30px] font-[500] leading-[36.15px]">
              {props.data?.aboutusvision[6].field_value}
            </h3>
            <div
              className="text-[16px] font-[400] leading-[25.92px]"
              dangerouslySetInnerHTML={{
                __html: props.data?.aboutusvision[7].field_value as string,
              }}
            ></div>
          </div>
        </div>
      )}
      {(activeTab === 'mission' || activeTab === 'vision') && (
        <InvestmentAdvisory data={props.data?.personalisedinvestmentadvisory} />
      )}
      {activeTab === 'meet' && (
        <div className="mt-[36px]">
          <div className="text-[20px] font-[700] leading-[38px] small:text-[40px] small:leading-[88px]">
            {props.data?.meettheteam[13].field_value}
          </div>
          <div className="mt-[47px] flex flex-wrap gap-[20px]">
            <MeetTheTeam />
          </div>
        </div>
      )}
    </>
  );
};
