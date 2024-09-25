import Image from 'next/image';
import { Metadata } from 'next';
import '@/app/ui/index.css';
import { GoogleMapsEmbed } from '@next/third-parties/google';
import { EnquireForm } from '@/app/components';
import { gmapsApiKey, fetchData, getFieldValueByName } from '@/app/constants';
import { ContactUs } from '@/app/types';
import Link from 'next/link';

const contactUs: ContactUs = await fetchData(6);

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: contactUs.header[0].metatitle,
        description: contactUs.header[0].metadescription,
        keywords: contactUs.header[0].metakeyword
    };
}

export default async function Contact() {
    return (
        <div className='mb-[30px] w-full sm:mb-[60px] xl:mb-[84px] 3xl:max-w-[1200px]'>
            <div className='relative w-full 3xl:max-w-[1200px]'>
                <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
                    <h1 className='relative z-[1] inline-block max-w-[220px] capitalize small:max-w-[270px]'>
                        {contactUs?.['contact-us-section-1'][0].field_value ??
                            'Contact us'}
                    </h1>
                    <div className='pointer-events-none absolute top-[50%] z-[0] translate-y-[-30%] scale-[1.6] sm:translate-y-[-60%] md:translate-y-[-60%] md:scale-[1.4] xl:translate-y-[-70%] xl:scale-[1.2] 2xl:scale-[1.1]'>
                        <Image
                            src={
                                (contactUs?.['contact-us-section-1'][1]
                                    .field_value as string) ??
                                '/images/contact_building.webp'
                            }
                            alt={contactUs.header[0].metadescription}
                            width={1404}
                            height={885}
                        />
                    </div>
                </div>
            </div>
            <div className='mb-[30px] mt-[30px] flex flex-wrap items-center justify-between gap-[50px] border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[43px] md:mt-[80px] lg:mt-[120px] lg:flex-wrap lg:gap-[0px]'>
                <div className='w-[252px] text-sm leading-[29px] lg:w-[calc(30%-25px)]'>
                    <div className='mt-[53px] sm:mt-[0px]'>
                        <p>
                            {getFieldValueByName(
                                contactUs?.['contact-us-section-1'],
                                'Address'
                            )}
                        </p>
                    </div>
                    <Link
                        href={`tel:${getFieldValueByName(
                            contactUs?.['contact-us-section-1'],
                            'Phone'
                        )}`}
                        className='mt-[6px]'
                    >
                        <p>
                            {getFieldValueByName(
                                contactUs?.['contact-us-section-1'],
                                'Phone'
                            )}
                        </p>
                    </Link>
                    <Link
                        href={`mailto:${getFieldValueByName(
                            contactUs?.['contact-us-section-1'],
                            'Email'
                        )}`}
                        className='mt-[6px]'
                    >
                        <p>
                            {getFieldValueByName(
                                contactUs?.['contact-us-section-1'],
                                'Email'
                            )}
                        </p>
                    </Link>
                    <div className='mt-[13px] flex'>
                        <Link
                            href={`${
                                getFieldValueByName(
                                    contactUs?.['contact-us-section-1'],
                                    'Facebook Url'
                                ) ?? 'https://www.facebook.com/'
                            }`}
                            target='_blank'
                        >
                            <Image
                                src='/icons/fb.svg'
                                alt='Facebook icon'
                                width={13}
                                height={13}
                                className='mr-[13px] h-[13px] w-[13px]'
                            />
                        </Link>
                        <Link
                            href={`${
                                getFieldValueByName(
                                    contactUs?.['contact-us-section-1'],
                                    'Twitter Url'
                                ) ?? 'https://x.com/'
                            }`}
                            target='_blank'
                        >
                            <Image
                                src='/icons/x.svg'
                                alt='X icon'
                                width={13}
                                height={13}
                                className='mr-[13px] h-[13px] w-[13px]'
                            />
                        </Link>
                        <Link
                            href={`${
                                getFieldValueByName(
                                    contactUs?.['contact-us-section-1'],
                                    'Instagram Url'
                                ) ?? 'https://www.instagram.com/'
                            }`}
                            target='_blank'
                        >
                            <Image
                                src='/icons/instagram.svg'
                                alt='Instagram icon'
                                width={13}
                                height={13}
                                className='mr-[13px] h-[13px] w-[13px]'
                            />
                        </Link>
                        <Link
                            href={`${
                                getFieldValueByName(
                                    contactUs?.['contact-us-section-1'],
                                    'Linkedin Url'
                                ) ?? 'https://www.linkedin.com/'
                            }`}
                            target='_blank'
                        >
                            <Image
                                src='/icons/linkedin.svg'
                                alt='Linkedin icon'
                                width={13}
                                height={13}
                                className='h-[13px] w-[13px]'
                            />
                        </Link>
                    </div>
                </div>
                <div className='w-full lg:w-[calc(70%-25px)]'>
                    <GoogleMapsEmbed
                        apiKey={gmapsApiKey}
                        height={366}
                        width='100%'
                        mode='place'
                        q='1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates'
                    />
                </div>
            </div>
            <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
                <h2>
                    {getFieldValueByName(
                        contactUs?.['contact-us-section-1'],
                        'Form Heading'
                    )}
                </h2>
            </div>
            <EnquireForm />
        </div>
    );
}
