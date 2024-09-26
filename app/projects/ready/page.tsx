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
    <div className="mb-[30px] w-full sm:mb-[60px] small:mb-[83px] 3xl:max-w-[1200px]">
      <div className="flex flex-wrap gap-8">
        <div className="text-[30px] font-[700] leading-[38px] small:text-[59px] small:leading-[88px]">
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
      </div>
      <Providers>
        <PageSearch type="ready" />
        <ListProperties />
      </Providers>
    </div>
  );
}
