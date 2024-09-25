'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { TeamMember } from '@/app/types';
import { fetchGeneral } from '../constants';
import { Loading } from './Loading';

export const MeetTheTeam = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[] | null>(null);

    useEffect(() => {
        fetchGeneral('teams').then((data) => setTeamMembers(data));
    }, []);
    if (teamMembers === null || teamMembers === undefined) {
        return (
            <div className='flex w-full items-center justify-center'>
                <Loading />
            </div>
        );
    }
    if (!teamMembers) {
        return <div>No data available</div>;
    } else {
        return (
            <>
                {Array.isArray(teamMembers) &&
                    teamMembers?.map((member) => (
                        <div key={member.id}>
                            <Image
                                src={member.image}
                                alt='Photo of Tim'
                                width={261}
                                height={319}
                                className='border border-solid border-[#EDDFD0] border-opacity-50'
                            />
                            <div className='mt-[11px] text-[23px] font-[700]'>
                                {member.heading}
                            </div>
                            <div className='text-xs'>{member.subheading}</div>
                            <div className='mt-[10px] h-[3px] w-[28px] bg-[#EDDFD0]' />
                        </div>
                    ))}
            </>
        );
    }
};
