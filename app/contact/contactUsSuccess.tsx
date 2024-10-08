import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface ContactUsSuccessProps {
  setVisible: (arg0: boolean) => void;
  visible: boolean;
}
export default function ContactUsSuccess({
  visible,
  setVisible,
}: ContactUsSuccessProps) {
  return (
    <Dialog open={visible} onClose={setVisible} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
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

              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
                  {/* <DialogTitle
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    Deactivate account
                  </DialogTitle> */}

                  <button type="button">
                    <Image
                      src="./images/tickcircle.svg"
                      alt="LIV Squared Properties logo"
                      width={142}
                      height={71}
                      className="ml-[-4px] h-auto w-auto"
                      priority={false}
                    />
                  </button>

                  <div className="mt-2">
                    <p className="modal-header text-[30px] ">
                      Thank you for your enquiry
                    </p>
                    <div style={{ marginTop: '30px' }} />
                    <p className="modal-desc text-[16px]">
                      Your form was successfully submitted and one our experts
                      will be in touch with you shortly
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
