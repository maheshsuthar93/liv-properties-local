import React, { useEffect } from 'react';

import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
export const MediaPopup = ({
  url,
  isVideo,
  stateChanger,
}: {
  url: any;
  isVideo: boolean;
  stateChanger: any;
}) => {
  return (
    <>
      <div className="gallery-images flex items-center justify-center">
        <div className="embla">
          <div className="embla__viewport">
            <div className="embla__container">
              <div className="embla__slide">
                <div className="embla__slide__inner">
                  {isVideo ? (
                    <iframe
                      className="h-[600px] w-[1066px]"
                      src={url}
                      title="Video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <ReactPhotoSphereViewer
                      src={url}
                      height={'500px'}
                      width={'1000px'}
                    ></ReactPhotoSphereViewer>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="close-btn fixed right-[20px] top-[20px] z-[100] h-[30px] w-[30px] cursor-pointer"
        onClick={() => stateChanger()}
      >
        <svg
          width="30px"
          height="30px"
          viewBox="-0.5 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 21.32L21 3.32001"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 3.32001L21 21.32"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};
