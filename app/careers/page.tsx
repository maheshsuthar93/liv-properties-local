import { Metadata } from 'next';
import { Careers } from '@/app/types';
import { fetchData } from '@/app/constants';
import { CareersContent } from './CareersContent';

const careers: Careers = await fetchData(3);

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: careers.header[0].metatitle,
    description: careers.header[0].metadescription,
    keywords: careers.header[0].metakeyword,
  };
}

export default async function CareersPage() {
  return (
    <div className="mb-[30px] mt-[200px] w-full sm:mb-[60px] xl:mb-[70px] 3xl:max-w-[1200px]">
      <div
        className="w-full border-b border-solid border-[#eddfd0] border-opacity-60 text-start  text-[20px]
                font-[700] leading-[38px]    small:text-[35px] small:leading-[88px]"
      >
        <div className="inline-block max-w-[220px] capitalize small:max-w-[300px]">
          {careers?.['careers-section-1'][0].field_value ?? ''}
        </div>
      </div>
      <CareersContent />
    </div>
  );
}
