'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { TeamMember } from '@/app/types';
import { fetchGeneral } from '../constants';
import { Loading } from './Loading';
import { log } from 'console';
import ProfileModal from './ProfileModal';

export const MeetTheTeam = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[] | null>(null);
  const [teamMember, setTeamMember] = useState<TeamMember | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetchGeneral('teams').then((data) => setTeamMembers(data));
  }, []);
  if (teamMembers === null || teamMembers === undefined) {
    return (
      <div className="flex w-full items-center justify-center">
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
            <div
              key={member.id}
              onClick={() => {
                setVisible(true);
                setTeamMember(member);
              }}
            >
              <Image
                src={member.image}
                alt="Photo of Tim"
                width={280}
                height={319}
                className="border border-solid border-[#EDDFD0] border-opacity-50"
              />
              <div
                className="helveticaNeue mt-[11px] text-[22px] font-[700] leading-[26.51px]"
                onClick={() => {
                  setVisible(true);
                  setTeamMember(member);
                }}
              >
                {member.heading}
              </div>
              <div
                className="helveticaNeue text-[18px] font-[400] leading-[21.69px]"
                onClick={() => {
                  setVisible(true);
                  setTeamMember(member);
                }}
              >
                {member.subheading}
              </div>
              <div className="mt-[10px] h-[3px] w-[28px] bg-[#EDDFD0]" />
            </div>
          ))}
        {visible && (
          <ProfileModal
            setVisible={setVisible}
            member={teamMember!}
            visible={visible}
          />
        )}
      </>
    );
  }
};
