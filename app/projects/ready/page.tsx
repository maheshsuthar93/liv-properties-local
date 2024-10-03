import Image from 'next/image';
import s from '@/app/ui/main.module.css';
import '@/app/ui/index.css';
import { PageSearch, ListProperties } from '@/app/components';
import { Metadata } from 'next';
import { Providers } from '../../provider/Providers';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Luxury Properties for Sale',
    description: 'Luxury Properties for Sale',
    keywords: 'Luxury Properties for Sale',
  };
}
export default async function ReadyProjectsPage() {
  return (
    <div className="mb-[30px] mt-[50px] w-full sm:mb-[60px] small:mb-[83px] 3xl:max-w-[1200px]">
      {/* <div className="flex flex-wrap gap-8">
        <div className="text-[30px] font-[700] leading-[38px] small:text-[45px] small:leading-[60px]">
          <h1 className="relative z-[1] inline-block max-w-[220px] capitalize small:max-w-[270px]">
            Luxury Properties for Sale
          </h1>
          <Image
            src="/images/organic-house.webp"
            alt="Home and a car"
            width={1404}
            height={885}
            className="pointer-events-none absolute right-0 top-[180px] z-[0] max-w-[120dvw] translate-y-[-25%] sm:top-[200px] sm:max-w-full sm:translate-y-[-45%] lg:top-[340px] lg:translate-y-[-60%]"
          />
        </div>
      </div> */}
      <div className="flex flex-row items-center text-[30px] font-[700] leading-[38px] small:text-[45px] small:leading-[60px] ">
        <div className="absolute z-[1] ">
          <h1 className="inline-block capitalize ">
            Luxury Properties for Sale
          </h1>
        </div>
        <Image
          src="/images/organic-house.webp"
          alt="Home and a car"
          className="max-[1366px]:w-[90dvw] w-[100dvw] 4xlh:w-[100dvw] 4xlh:origin-bottom-right 4xlh:scale-[1.5]"
          width={1100}
          height={885}
        />
      </div>
      <Providers>
        <div className="gradient-from bg-gradient-to-r  small:p-[20px]">
          {/* <div className=" max-[639px]:mx-[3vw] max-[639px]:w-full max-[639px]:text-center  gotham mb-[10px] flex px-[3vw] text-[35px] font-[700] leading-[398px] sm:px-0 sm:text-[35px] sm:leading-[42.3px] ">
            <h2 className="inline-block capitalize">
              Luxury Properties for Sale
            </h2>
          </div> */}
          <PageSearch type="ready" />
        </div>
        <ListProperties />
      </Providers>
    </div>
  );
}
