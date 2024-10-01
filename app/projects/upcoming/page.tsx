import Image from 'next/image';
import s from '@/app/ui/main.module.css';
import '@/app/ui/index.css';
import { PageSearch, ListProperties } from '@/app/components';
import { Metadata } from 'next';
import { Providers } from '../../provider/Providers';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Upcoming Projects',
    description: 'Upcoming Projects',
    keywords: 'Upcoming Projects',
  };
}

export default async function UpcomingProjectsPage() {
  return (
    <div className="mb-[30px] w-full sm:mb-[60px] small:mb-[83px] 3xl:max-w-[1200px]">
      {/* <div className="flex flex-wrap gap-8">
        <div className="text-[30px] font-[700] leading-[38px] small:text-[59px] small:leading-[88px]">
          <h1 className="absolute z-[1] inline-block max-w-[220px] capitalize small:max-w-[270px]">
            Upcoming Projects
          </h1>
          <Image
            src="/images/organic-house.webp"
            alt="Home and a car"
            width={1404}
            height={885}
            className="pointer-events-none  right-0 top-[180px] z-[0] max-w-[120dvw] translate-y-[-25%] sm:top-[200px] sm:max-w-full sm:translate-y-[-45%] lg:top-[340px] lg:translate-y-[-60%]"
          />
        </div>
      </div> */}
      <div className="flex flex-row items-center text-[30px] font-[700] leading-[38px] small:text-[45px] small:leading-[60px] ">
        <div className="absolute z-[1] ">
          <h1 className="inline-block capitalize ">Upcoming Projects</h1>
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
        <PageSearch type="upcoming" />
        <ListProperties />
      </Providers>
    </div>
  );
}
