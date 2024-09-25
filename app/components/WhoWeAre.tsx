'use client';

import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { InvestmentAdvisory, Loading, MeetTheTeam } from '@/app/components';
import { AboutUs, TeamMember } from '@/app/types';
import { fetchGeneral } from '../constants';

const tabsState = {
    who: true,
    mission: false,
    vision: false,
    meet: false
};

export const WhoWeAre = (props: { data: AboutUs }) => {
    const [activeTab, setActiveTab] = useState('who');

    return (
        <>
            <div className='mt-[100px] flex flex-wrap text-xs xl:mt-[50px] msm:flex-nowrap mdlap:mt-[136px]'>
                <h2
                    className={`w-[93px] cursor-pointer border-b border-solid border-[#eddfd0] border-opacity-60 py-[10px] text-center ${activeTab === 'who' ? 'border-b-[4px]' : ''}`}
                    onClick={() => setActiveTab('who')}
                >
                    {props.data?.aboutussection2[2].field_value}
                </h2>
                <h2
                    className={`w-[93px] cursor-pointer border-b border-solid border-[#eddfd0] border-opacity-60 py-[10px] text-center ${activeTab === 'mission' ? 'border-b-[4px]' : ''}`}
                    onClick={() => setActiveTab('mission')}
                >
                    {props.data?.aboutusmission[4].field_value}
                </h2>
                <h2
                    className={`w-[83px] cursor-pointer border-b border-solid border-[#eddfd0] border-opacity-60 py-[10px] text-center ${activeTab === 'vision' ? 'border-b-[4px]' : ''}`}
                    onClick={() => setActiveTab('vision')}
                >
                    {props.data?.aboutusvision[6].field_value}
                </h2>
                <h2
                    className={`w-[103px] cursor-pointer border-b border-solid border-[#eddfd0] border-opacity-60 py-[10px] text-center ${activeTab === 'meet' ? 'border-b-[4px]' : ''}`}
                    onClick={() => setActiveTab('meet')}
                >
                    {props.data?.meettheteam[13].field_value}
                </h2>
            </div>
            {console.log(props.data)}
            {/* Who we are */}
            {activeTab === 'who' && (
                <div className='mt-[47px] flex w-full flex-wrap gap-[26px] border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[37px] text-xs'>
                    <div
                        className='who-desc'
                        dangerouslySetInnerHTML={{
                            __html: props.data?.aboutussection2[3]
                                .field_value as string
                        }}
                    ></div>
                </div>
            )}
            {/* Misson & Vision */}
            {(activeTab === 'mission' || activeTab === 'vision') && (
                <div className='mb-[33px] mt-[33px] flex w-full flex-wrap gap-[25px] text-xs'>
                    <div className='lg:w-[calc(50%-13px)]'>
                        <h3 className='mb-[11px] text-[20px] leading-[120%]'>
                            {props.data?.aboutusmission[4].field_value}
                        </h3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: props.data?.aboutusmission[5]
                                    .field_value as string
                            }}
                        ></div>
                    </div>
                    <div className='lg:w-[calc(50%-13px)]'>
                        <h3 className='mb-[11px] text-[20px] leading-[120%]'>
                            {props.data?.aboutusvision[6].field_value}
                        </h3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: props.data?.aboutusvision[7]
                                    .field_value as string
                            }}
                        ></div>
                    </div>
                </div>
            )}
            {(activeTab === 'mission' || activeTab === 'vision') && (
                <InvestmentAdvisory
                    data={props.data?.personalisedinvestmentadvisory}
                />
            )}
            {activeTab === 'meet' && (
                <div className='mt-[36px]'>
                    <h3 className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
                        {props.data?.meettheteam[13].field_value}
                    </h3>
                    <div className='mt-[47px] flex flex-wrap gap-[14px]'>
                        <MeetTheTeam />
                    </div>
                </div>
            )}
        </>
    );
};
