'use client';

import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import s from '@/app/ui/main.module.css';
import { Suspense, useEffect, useState } from 'react';
import { gmapsApiKey, apiUrl, fetcher } from '@/app/constants';
import Link from 'next/link';
import useSWR from 'swr';
import { Loading, MediaPopup } from '../components';
import renderService from './renderService';
import Gallery from './Gallery';
import ProjectImages from './ProjectImages';
import { Tooltip as ReactTooltip, Tooltip } from 'react-tooltip';
import InfoModal from '../components/InfoModal';
import AgentContact from './agent';

export default function ProjectPage() {
  return (
    <Suspense>
      <ProjectComponent />
    </Suspense>
  );
}

function ProjectComponent() {
  const [viewGallery, setViewGallery] = useState(false);
  const [shareButton, setShareButton] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';

  const [id, setId] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [visibleReadMore, setVisibleReadMore] = useState(false);
  const router = useRouter();
  const [viewImagePopup, setViewImagePopup] = useState(false);
  const [viewVideo, setViewVideo] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('unique_id');
    setId(id);
  }, []);
  const handleImagePopup = () => {
    if (property[0].view360 != undefined) {
      setViewImagePopup((prevCheck) => !prevCheck);
    }
  };

  const handleVideoPopup = () => {
    if (property[0].video != undefined) {
      setViewVideo((prevCheck) => !prevCheck);
    }
  };
  const {
    data: property,
    error,
    isLoading,
  } = useSWR(
    isClient && id ? `${apiUrl}/api/projectdetails?unique_id=${id}` : null,
    fetcher,
  );

  if (!id) {
    return (
      <div className="mt-30px min-h-[150px] w-full">No ID found in the URL</div>
    );
  }

  if (!isClient) {
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!property) {
    return <div>No property found</div>;
  }

  let images = [];
  try {
    if (property[0].images && typeof property[0].images === 'string') {
      images = JSON.parse(property[0].images);
    } else if (property[0].images) {
      images = [property[0].images];
    }
  } catch (e) {
    images = property[0].images ? [property[0].images] : [];
  }

  if (images.length <= 0 && property[0].main_image) {
    images.push(property[0].main_image);
  }
  const maxVisibleImages = 3;

  const services = property[0].services ? JSON.parse(property[0].services) : [];

  const handlePopup = () => {
    setViewGallery((prevCheck) => !prevCheck);
  };

  const handleShare = () => {
    setShareButton((prevCheck) => !prevCheck);
  };
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="mt-[200px] w-full 3xl:max-w-[1200px]">
      <div className="mt-0 flex w-full flex-wrap gap-8 border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[37px] xl:flex-nowrap xl:gap-0">
        <div className="flex w-[100%] flex-row flex-wrap xl:w-[40%] xl:flex-col xl:flex-nowrap msm:w-[calc(40%)]">
          <div className="relative mt-[16px] flex w-full items-center justify-normal sm:w-[100%] md:mt-[40px] xl:mt-[50px] xl:w-[auto]">
            <button
              className="mr-[10px] grid grid-cols-2 place-items-center gap-[11px] rounded-3xl border border-solid border-[#EDDFD0] px-[25px] py-[9px] pl-[15px] text-sm transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black"
              onClick={handleGoBack}
            >
              <Image
                src="/images/arrow_back.svg"
                alt="back icon"
                width={25}
                height={25}
              />
              Back
            </button>
            <button
              className="grid grid-cols-2 place-items-center gap-[11px] rounded-3xl border border-solid border-[#EDDFD0] px-[25px] py-[9px] pl-[15px] text-sm transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black"
              onClick={handleShare}
            >
              <Image
                src="/icons/share.svg"
                alt="Share icon"
                width={25}
                height={25}
              />
              Share
            </button>

            {shareButton && (
              <ul
                className="share_options -top-[35px] right-0 ml-[30px] flex list-none gap-[30px] sm:absolute sm:ml-0 xl:left-0 xl:right-[unset]"
                data-title="Share"
              >
                <li>
                  <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                    target="_blank"
                  >
                    <Image
                      src="/icons/fb.svg"
                      alt="Facebook icon"
                      width={0}
                      height={0}
                      className="h-[18px] w-[18px]"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
                    target="_blank"
                  >
                    <Image
                      src="/icons/x.svg"
                      alt="X icon"
                      width={0}
                      height={0}
                      className="h-[17px] w-[17px]"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={`https://x.com/intent/tweet?url=${url}`}
                    target="_blank"
                  >
                    <Image
                      src="/icons/linkedin.svg"
                      alt="LinkedIn icon"
                      width={0}
                      height={0}
                      className="h-[18px] w-[18px]"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={`https://api.whatsapp.com/send?text=${url}`}
                    target="_blank"
                  >
                    <Image
                      src="/icons/whatsapp-2.svg"
                      alt="Whatsapp icon"
                      width={0}
                      height={0}
                      className="h-[20px] w-[20px]"
                    />
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="mt-[31px] w-[100%] text-[30px] font-[700] leading-[38px] small:text-[30px] small:leading-[30px]">
            {property[0].property_name ?? ''}
          </div>
          <div className="mt-[10px] w-[100%] text-lg">
            {property[0].location ?? ''}
          </div>

          <div className="helveticaNeue mt-[15px] flex w-full items-center justify-start gap-[10px] text-[16px]  font-[500] sm:w-[50%] xl:w-[auto]">
            <div>{property[0].property_type ?? ''}</div>
            {property[0].property_type && <div className={`${s.line2}`} />}
            <div>{property[0].construction_status}</div>
            {property[0].construction_status && (
              <div className={`${s.line2}`} />
            )}
            <div>{property[0].availability_date ?? ''}</div>
          </div>
          <div className="mt-[15px] flex w-full items-center justify-start gap-[10px] text-sm sm:w-[50%] xl:w-[auto]">
            <div>
              AED{' '}
              {(property[0].price ?? '').toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                maximumFractionDigits: 2,
              })}{' '}
            </div>
            {<div className={`${s.line2}`} />}
            <div>
              {property[0].area ?? ''} {','}
              {property[0].emirate ?? ''}
            </div>
          </div>
          <div className="mt-[15px] flex w-full items-center justify-start gap-[22px] text-sm sm:w-[50%] xl:w-[auto]">
            <div>
              <Image
                src="/icons/bed.svg"
                alt="Bed icon"
                width={17}
                height={17}
                className="mr-[2px] inline"
              />
              {property[0].number_of_bedroom ?? 0}
            </div>
            <div>
              <Image
                src="/icons/bathtub.svg"
                alt="Bed icon"
                width={17}
                height={17}
                className="mr-[2px] inline"
              />
              {property[0].number_of_bathroom ?? 0}
            </div>
            <div>
              <Image
                src="/icons/crop_free.svg"
                alt="Bed icon"
                width={17}
                height={17}
                className="mr-[2px] inline"
              />
              {property[0].area_in_sqft ?? '0'} Sqft
            </div>
          </div>

          <div className="description mt-[31px] w-full max-w-[100%] text-sm leading-[202%] xl:w-[auto] xl:max-w-[483px]">
            {property[0].description ?? ''}
          </div>
          {property[0].description && (
            <div className="relative mt-[16px] flex w-full items-center justify-normal sm:w-[100%] md:mt-[40px] xl:mt-[50px] xl:w-[auto]">
              <button
                className="place-items-center gap-[11px] rounded-3xl border border-solid border-[#EDDFD0] px-[25px] py-[9px] pl-[15px] text-sm transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black"
                onClick={() => setVisibleReadMore(true)}
              >
                Read full description
              </button>
            </div>
          )}
        </div>
        <div className="w-full msm:w-[calc(60%)]">
          {images && (
            <ProjectImages
              property={property[0]}
              stateChanger={handlePopup}
              images={images}
            />
          )}

          {images.length > 0 && viewGallery && (
            <Gallery stateChanger={handlePopup} images={images} />
          )}
        </div>
      </div>
      <div className="flex w-full flex-wrap items-center  border-b border-solid border-[#EDDFD0] border-opacity-50 py-[20px]">
        <AgentContact propert={property[0]} />
      </div>
      <div className="flex w-full flex-wrap items-center  border-b border-solid border-[#EDDFD0] border-opacity-50 ">
        <div className="flex w-[100%] flex-wrap  gap-[18px] md:w-[auto] md:w-[calc(50%)] msm:w-[calc(57%-5px)]">
          <div className="text-center">
            <button onClick={handlePopup}>
              <Image
                src="/icons/add_a_photo.svg"
                alt="Camera icon"
                width={114}
                height={114}
                className="mb-4 rounded-full border border-solid border-[#EDDFD0] p-[30px] md:p-[41px]"
              />
              Photos
            </button>
          </div>

          <Tooltip id="my-tooltip" />

          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content={
              property[0].floor_plan != undefined ? '' : 'Not Available'
            }
          >
            <div className="text-center">
              {property[0].floor_plan != undefined ? (
                <Link href={property[0].floor_plan ?? '/'} target="_blank">
                  <Image
                    src="/icons/floor_lamp.svg"
                    alt="Lamp icon"
                    width={114}
                    height={114}
                    className="mb-4 rounded-full border border-solid border-[#EDDFD0] p-[30px] md:p-[41px]"
                  />
                  Floor Plan
                </Link>
              ) : (
                <button>
                  <Image
                    src="/icons/floor_lamp.svg"
                    alt="Lamp icon"
                    width={114}
                    height={114}
                    className="mb-4 rounded-full border border-solid border-[#EDDFD0] p-[30px] md:p-[41px]"
                  />
                  Floor Plan
                </button>
              )}
            </div>
          </a>

          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content={
              property[0].video != undefined ? '' : 'Not Available'
            }
          >
            <div className="text-center">
              <button onClick={handleVideoPopup}>
                <Image
                  src="/icons/play_circle.svg"
                  alt="Play circle icon"
                  width={114}
                  height={114}
                  className="mb-4 rounded-full border border-solid border-[#EDDFD0] p-[30px] md:p-[41px]"
                />
                Video
              </button>
            </div>
          </a>

          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content={
              property[0].brochure != undefined ? '' : 'Not Available'
            }
          >
            <div className="text-center">
              {property[0].brochure != undefined ? (
                <Link href={property[0].brochure ?? '/'} target="_blank">
                  <Image
                    src="/icons/book.svg"
                    alt="Book icon"
                    width={114}
                    height={114}
                    className="mb-4 rounded-full border border-solid border-[#EDDFD0] p-[30px] md:p-[41px]"
                  />
                  Brochure
                </Link>
              ) : (
                <button>
                  <Image
                    src="/icons/book.svg"
                    alt="Book icon"
                    width={114}
                    height={114}
                    className="mb-4 rounded-full border border-solid border-[#EDDFD0] p-[30px] md:p-[41px]"
                  />
                  Brochure
                </button>
              )}
            </div>
          </a>
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content={
              property[0].view360 != undefined ? '' : 'Not Available'
            }
          >
            <div className="text-center">
              <button onClick={handleImagePopup}>
                <Image
                  src="/icons/degree.svg"
                  alt="Play circle icon"
                  width={114}
                  height={114}
                  className="mb-4 rounded-full border border-solid border-[#EDDFD0] p-[30px] md:p-[41px]"
                />
                360{'\u00b0'}
              </button>
            </div>
          </a>
        </div>
        <div className={`${s.fullHeightline}`} />
        <div className="w-full md:w-[calc(50%)] msm:w-[calc(43%)]">
          <div className="flex w-[100%] flex-wrap justify-end gap-[28px] md:w-[auto] ">
            <Image
              src="/icons/qrCode.svg"
              alt="QR Code"
              width={145}
              height={145}
            />
            <div className="grid grid-rows-[auto_1fr_auto]">
              <p className="text-[30px] font-[700] leading-[34px]">
                DLD Permit Number:
              </p>
              <p className="mt-[12px] text-[16px] font-[500] leading-[19.54px]">
                632752507835
              </p>
              <p className="row-start-3 mt-[12px] text-[16px] font-[500] leading-[22.4px]">
                This property listing has been reviewed and <br />
                verified by Dubai Land Department
              </p>
            </div>
          </div>
        </div>
        {/* <div> */}
        {/* <button className='pt-[13px] pr-[26px] pb-[17px] pl-[24px] rounded-3xl border border-solid border-[#EDDFD0] text-sm hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                        Payment Terms
                    </button> */}
        {/* </div> */}
      </div>
      <div className="mb-[44px] flex w-full flex-wrap gap-[30px] border-b border-solid border-[#EDDFD0] border-opacity-50 py-[30px] xl:gap-[65px] xl:py-[46px]">
        {property[0].map && (
          <div className="w-full xl:w-[651px]">
            {/* <GoogleMapsEmbed
                        apiKey={gmapsApiKey}
                        height={280}
                        width='100%'
                        mode='place'
                        q={property[0].location}
                    /> */}

            <div
              className="google-map"
              dangerouslySetInnerHTML={{
                __html: property[0].map,
              }}
            ></div>
          </div>
        )}
        <div className="my-auto w-full xl:w-[auto] xl:min-w-[400px]">
          <div className="text-[20px] font-[700]">Property Features</div>
          <div className="text-normal mt-[16px] grid grid-cols-2">
            {services &&
              services?.map((service: number | string) => {
                return renderService(service);
              })}
          </div>
        </div>
      </div>

      {visibleReadMore && (
        <InfoModal
          title={property[0].property_name ?? 'Property Name'}
          description={property[0].description}
          visible={visibleReadMore}
          setVisible={setVisibleReadMore}
        />
      )}
      {viewImagePopup && (
        <MediaPopup
          stateChanger={handleImagePopup}
          url={property[0].view360}
          isVideo={false}
        />
      )}
      {viewVideo && (
        <MediaPopup
          stateChanger={handleVideoPopup}
          url={property[0].video}
          isVideo={true}
        />
      )}
    </div>
  );
}
