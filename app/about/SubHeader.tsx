import Image from 'next/image';
import { AboutUs } from '@/app/types';

const SubHeader = (props: { data: AboutUs }) => {
  if (!props) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <h3>No Data Found</h3>
      </div>
    );
  }
  return (
    <div className="  text-[20px] font-[700] leading-[38px] small:text-[35px] small:leading-[60px]">
      <div className="flex flex-row items-center text-[30px] font-[700] leading-[38px] small:text-[45px] small:leading-[60px] ">
        <div className="absolute z-[1] ">
          <h1 className="inline-block max-w-[220px] capitalize small:max-w-[270px]">
            {props.data?.asdf[0].field_value}
          </h1>
        </div>
        <Image
          src={
            (props.data?.asdf[1].field_value as string) ??
            '/images/aboutus-building.webp'
          }
          alt={props.data?.header[0].metadescription}
          className="max-[1366px]:w-[90dvw] w-[100dvw] 4xlh:w-[100dvw] 4xlh:origin-bottom-right 4xlh:scale-[1.5]"
          width={1100}
          height={885}
        />
      </div>
      {/* <h1 className="relative z-[1] inline-block max-w-[220px] capitalize small:max-w-[270px]">
        {props.data?.asdf[0].field_value}
      </h1>
      <div className="pointer-events-none absolute top-[50%] z-[0] translate-y-[-25%] scale-[1.4] sm:translate-y-[-45%] md:scale-[1.3] lg:translate-y-[-60%] lg:scale-[1.2]">
        <Image
          src={
            (props.data?.asdf[1].field_value as string) ??
            '/images/aboutus-building.webp'
          }
          alt={props.data?.header[0].metadescription}
          width={1404}
          height={885}
        />
      </div> */}
    </div>
  );
};

export default SubHeader;
