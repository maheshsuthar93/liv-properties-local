import Image from 'next/image';
import Link from 'next/link';
import '@/app/ui/index.css';
import s from '@/app/ui/main.module.css';
import styles from '@/app/ui/home.module.css';
import { Year, FooterEmailForm } from '@/app/components';
import { ContactUs } from '../types';
import { fetchData, getFieldValueByName } from '../constants';

export const Footer = async () => {
  const contactUs: ContactUs = await fetchData(6);

  return (
    <footer
      className={`min-[1440px]-h-[477px] relative mt-[25px]  bg-cover bg-right-bottom sm:bg-top`}
      style={{ backgroundImage: 'url("/images/ft-bg.jpg")' }}
    >
      <div className={`z-[1] ${styles.tint} z-[1]`}></div>
      <div className="m-[8px] flex justify-center">
        <div className="bigtab:flex-nowrap] relative z-[2] flex flex-wrap gap-y-[30px]  pt-[40px] sm:justify-between  lg:pt-[80px] small:gap-y-[10px] 3xl:max-w-[1200px]">
          <div className="order-1 w-[100%] max-w-full bigtab:mr-[6%] bigtab:w-[40%]">
            <div className=" gotham gothamRegular mr-auto text-[22px] leading-[38px] sm:text-[25px] sm:leading-[41px] xl:max-w-[80%]">
              A World of Leading Expertise Exclusively yours
            </div>
            <div className=" helveticaNeue mr-auto mt-[5px] text-[22px] font-[500] leading-[33px] sm:text-[25px] sm:leading-[36.75px] xl:mt-[38px] xl:max-w-[90%]">
              Sign up for our newsletter to stay updated with what’s new in UAE
              real estate
            </div>
            <FooterEmailForm />
          </div>
          <div className="helveticaNeue order-2 w-full text-[16px] font-[400] leading-[19.54px] sm:w-[calc(30%-20px)]  xl:w-[18%] bigtab:w-[15%]">
            <div className="font-[700] leading-[26px]">
              EXPLORE RESIDENTIAL IN
            </div>
            <a
              href="/projects/ready?availablefor=buy&construction_status=ready&location=Palm%20Jumeirah "
              className={`mt-[7px] block w-fit ${s.hoverable} `}
            >
              Palm Jumeirah
            </a>
            <a
              href="/projects/ready?availablefor=buy&construction_status=ready&location=Jumeirah%20Beach%20Residence"
              className={`mt-[7px] block w-fit ${s.hoverable}`}
            >
              Jumeirah Beach Residence
            </a>
            <a
              href="/projects/ready?availablefor=buy&construction_status=ready&location=Dubai%20Marina"
              className={`mt-[7px] block w-fit ${s.hoverable}`}
            >
              Dubai Marina
            </a>
            <a
              href="/projects/ready?availablefor=buy&construction_status=ready&location=Downtown%20Dubai"
              className={`mt-[7px] block w-fit ${s.hoverable}`}
            >
              Downtown Dubai
            </a>
            <a
              href="/projects/ready?availablefor=buy&construction_status=ready&location=Business%20Bay"
              className={`mt-[7px] block w-fit ${s.hoverable}`}
            >
              Business Bay
            </a>
            <a
              href="/projects/ready?availablefor=buy&construction_status=ready&location=Dubai%20Hills"
              className={`mt-[7px] block w-fit ${s.hoverable}`}
            >
              Dubai Hills
            </a>
            <a
              href="/projects/ready?availablefor=buy&construction_status=ready&location=City%20Walk"
              className={`mt-[7px] block w-fit ${s.hoverable}`}
            >
              City Walk
            </a>
          </div>
          <div className="helveticaNeue order-3 w-full text-[16px] font-[400] leading-[26px] sm:w-[calc(30%-20px)] xl:w-[18%]  bigtab:w-[15%]">
            <div className="font-[700] leading-[19.54px]">
              LIV Squared Properties
            </div>
            <Link
              href="/about"
              className={`mt-[7px] block w-fit ${s.hoverable}`}
            >
              About us
            </Link>
            <Link
              href="/services"
              className={`mt-[6px] block w-fit ${s.hoverable}`}
            >
              Services
            </Link>
            <Link
              href="/invest"
              className={`mt-[6px] block w-fit ${s.hoverable}`}
            >
              Investment
            </Link>
            <Link
              href="/sell"
              className={`mt-[6px] block w-fit ${s.hoverable}`}
            >
              Sell your property
            </Link>
            <Link
              href="/careers"
              className={`mt-[6px] block w-fit ${s.hoverable}`}
            >
              Careers
            </Link>
            <Link
              href="/news"
              className={`mt-[6px] block w-fit ${s.hoverable}`}
            >
              News & Insights
            </Link>
            <Link
              href="/contact"
              className={`mt-[6px] block w-fit ${s.hoverable}`}
            >
              Contact us
            </Link>
          </div>
          <div className="gotham order-4 text-[16px] font-[400] font-[700] leading-[26px] sm:w-[calc(40%-20px)] bigtab:w-[20%]">
            <Link href="/">
              <Image
                src="/logos/logo.svg"
                alt="LIV Squared Properties logo"
                width={142}
                height={71}
                className="ml-[-4px] h-auto w-auto"
                priority={false}
              />
            </Link>
            <p className="mt-[30px] xl:mt-[53px]">
              {getFieldValueByName(
                contactUs?.['contact-us-section-1'],
                'Address',
              )}
            </p>
            <Link
              href={`tel:${getFieldValueByName(
                contactUs?.['contact-us-section-1'],
                'Phone',
              )}`}
              className="mt-[6px]"
            >
              <p>
                {getFieldValueByName(
                  contactUs?.['contact-us-section-1'],
                  'Phone',
                )}
              </p>
            </Link>
            <Link
              href={`mailto:${getFieldValueByName(
                contactUs?.['contact-us-section-1'],
                'Email',
              )}`}
              className="mt-[6px]"
            >
              <p>
                {getFieldValueByName(
                  contactUs?.['contact-us-section-1'],
                  'Email',
                )}
              </p>
            </Link>
            <div className="mt-[22px] flex">
              <Link
                href={`${
                  getFieldValueByName(
                    contactUs?.['contact-us-section-1'],
                    'Facebook Url',
                  ) ?? 'https://www.facebook.com/'
                }`}
                target="_blank"
              >
                <Image
                  src="/icons/fb.svg"
                  alt="Facebook icon"
                  width={13}
                  height={13}
                  className="mr-[13px] h-[13px] w-[13px]"
                />
              </Link>
              <Link
                href={`${
                  getFieldValueByName(
                    contactUs?.['contact-us-section-1'],
                    'Twitter Url',
                  ) ?? 'https://x.com/'
                }`}
                target="_blank"
              >
                <Image
                  src="/icons/x.svg"
                  alt="X icon"
                  width={13}
                  height={13}
                  className="mr-[13px] h-[13px] w-[13px]"
                />
              </Link>
              {/* <Link
              href={`${
                getFieldValueByName(
                  contactUs?.['contact-us-section-1'],
                  'Instagram Url',
                ) ?? 'https://www.instagram.com/'
              }`}
              target="_blank"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram icon"
                width={13}
                height={13}
                className="mr-[13px] h-[13px] w-[13px]"
              />
            </Link> */}
              <Link
                href={`${
                  getFieldValueByName(
                    contactUs?.['contact-us-section-1'],
                    'Linkedin Url',
                  ) ?? 'https://www.linkedin.com/'
                }`}
                target="_blank"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="Linkedin icon"
                  width={13}
                  height={13}
                  className="h-[13px] w-[13px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div
          className={`${styles.footerLine} relative z-[2] ml-[0px] mt-[40px] font-[200] 3xl:max-w-[1200px]`}
        ></div>
      </div>
      <div className="flex justify-center ">
        <div className="relative z-[2]  mt-[26px] flex w-[calc(100%-3vw)] flex-wrap justify-between gap-x-5 gap-y-1 pb-[26px] text-sm font-[200]  sm:w-[calc(100%-160px)] sm:flex-nowrap 3xl:max-w-[1200px]">
          <div className={`${styles.designedBy}`}>
            Designed & Developed By Cheval
          </div>
          <div className={`${styles.copyright}`}>
            © <Year /> LIV Squared Properties. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
