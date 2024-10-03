import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface InfoModalProps {
  setVisible: (arg0: boolean) => void;
  visible: boolean;
  title: string;
  description: string;
}
export default function InfoModal(props: InfoModalProps) {
  const { title, description, visible, setVisible } = props;
  return (
    <Dialog open={visible} onClose={setVisible} className=" relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 ">
          <DialogPanel
            transition
            className="modal gotham relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="info-modal bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
              <div style={{ textAlign: 'end' }}>
                <button type="button" onClick={() => setVisible(false)}>
                  <XMarkIcon
                    aria-hidden="true"
                    className="icon-color h-6 w-6"
                  />
                </button>
              </div>

              <div className="overflow-auto sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-start">
                  {/* <DialogTitle
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    {title}
                  </DialogTitle> */}

                  <div className="mt-2">
                    <p className="modal-header gotham text-[28px] font-[700] leading-[30px] sm:text-[30px] sm:leading-[32.7px] ">
                      {title}
                    </p>
                    <div style={{ marginTop: '10px' }} />
                    <p className="modal-desc helveticaNeue text-[16px] font-[400] leading-[32.4px]">
                      {description}
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
