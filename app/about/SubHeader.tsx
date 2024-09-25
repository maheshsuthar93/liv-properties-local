import Image from 'next/image';
import { AboutUs } from '@/app/types';

const SubHeader = (props: { data: AboutUs }) => {
    if (!props) {
        return (
            <div className='flex min-h-[300px] items-center justify-center'>
                <h3>No Data Found</h3>
            </div>
        );
    }
    return (
        <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
            <h1 className='inline-block max-w-[220px] capitalize small:max-w-[270px] z-[1] relative'>
                {props.data?.asdf[0].field_value}
            </h1>
            <div className='pointer-events-none absolute top-[50%] z-[0] translate-y-[-25%] scale-[1.4] sm:translate-y-[-45%] md:scale-[1.3] lg:translate-y-[-60%] lg:scale-[1.2]'>
                <Image
                    src={
                        (props.data?.asdf[1].field_value as string) ??
                        '/images/aboutus-building.webp'
                    }
                    alt={props.data?.header[0].metadescription}
                    width={1404}
                    height={885}
                />
            </div>
        </div>
    );
};

export default SubHeader;
