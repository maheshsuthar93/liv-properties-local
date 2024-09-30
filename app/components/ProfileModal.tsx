import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { TeamMember } from '@/app/types';

interface ProfileModalProps {
  setVisible: (arg0: boolean) => void;
  visible: boolean;
  member: TeamMember;
}
export default function ProfileModal({
  visible,
  setVisible,
  member,
}: ProfileModalProps) {
  return (
    <Dialog open={visible} onClose={setVisible} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="profile-modal flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="gotham relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div style={{ textAlign: 'end' }}>
                <button type="button" onClick={() => setVisible(false)}>
                  <XMarkIcon
                    aria-hidden="true"
                    className="icon-color h-6 w-6"
                  />
                </button>
              </div>

              <div
                className="sm:flex sm:items-start"
                style={{ flexDirection: 'row' }}
              >
                <Image
                  src={member.image}
                  alt="LIV Squared Properties logo"
                  width={142}
                  height={71}
                  className="ml-[-4px] h-auto w-auto"
                  priority={false}
                />
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
                  <div className="mt-2">
                    <p className="profile-modal-header text-[30px] gothamBold leading-[32.7px] ">
                      {member.heading}
                    </p>
                    <p className="profile-modal-subheader text-[18px] gothamMedium leading-[19.62px]">
                      {member.subheading}
                    </p>
                    <p className="profile-modal-desc helveticaNeue text-[16px] font-[400] leading-[32.4px]">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum
                      comes from sections 1.10.32 and 1.10.33 of "de Finibus
                      Bonorum et Malorum" (The Extremes of Good and Evil) by
                      Cicero, written in 45 BC. This book is a treatise on the
                      theory of ethics, very popular during the Renaissance. The
                      first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                      comes from a line in section 1.10.32. Contrary to popular
                      belief, Lorem Ipsum is not simply random text. It has
                      roots in a piece of classical Latin literature from 45 BC,
                      making it over 2000 years old. Richard McClintock, a Latin
                      professor at Hampden-Sydney College in Virginia, looked up
                      one of the more obscure Latin words, consectetur, from a
                      Lorem Ipsum passage, and going through the cites of the
                      word in classical
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
