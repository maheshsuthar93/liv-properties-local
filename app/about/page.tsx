import '@/app/ui/index.css';
import { Instagram, WhoWeAre, Loading } from '@/app/components';
import { AboutUs, TeamMember } from '@/app/types';
import { fetchData, fetchGeneral } from '@/app/constants';
import { Metadata } from 'next';
import SubHeader from './SubHeader';

const aboutUs: AboutUs = await fetchData(2);

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: aboutUs.header[0].metatitle,
        description: aboutUs.header[0].metadescription,
        keywords: aboutUs.header[0].metakeyword
    };
}

const AboutPage = async () => {
    const aboutUs: AboutUs = await fetchData(2);

    if (!aboutUs || aboutUs === undefined) {
        return <Loading />;
    } else {
        return (
            <div className='mx-auto w-full 3xl:max-w-[1200px]'>
                <div className='relative mx-auto w-full 3xl:max-w-[1200px]'>
                    <SubHeader data={aboutUs} />
                </div>
                <WhoWeAre data={aboutUs} />

                <div className='mb-[30px] mt-[50px] flex flex-wrap sm:mb-[60px]'>
                    <Instagram />
                </div>
            </div>
        );
    }
};

export default AboutPage;
