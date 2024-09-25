import styles from '@/app/ui/home.module.css';
import Link from 'next/link';
import { getFieldValueByName } from '../constants';

export const InvestmentAdvisory = (data: any) => {
    if (data.data) {
        return (
            <Link href='/invest' className='services-cta'>
                <div
                    className={`relative w-full bg-cover text-white xl:w-[1100px]`}
                    style={{ backgroundImage: 'url(/images/services-bg.webp)' }}
                >
                    <div className={styles.tint}></div>
                    <h3 className='relative z-10 text-[28px] leading-[123%] small:text-[38px]'>
                        {getFieldValueByName(data.data, 'Heading')}
                    </h3>
                    <p className='max-[639px]:mt-[8px] max-[639px[:text-sm relative z-10 font-[200] leading-[21px] small:w-[480px] small:leading-[2]'>
                        {getFieldValueByName(data.data, 'Description')}
                    </p>
                </div>
            </Link>
        );
    }
    return (
        <Link href='/invest' className='services-cta'>
            <div
                className={`relative w-full bg-cover text-white xl:w-[1100px]`}
                style={{ backgroundImage: 'url(/images/services-bg.webp)' }}
            >
                <div className={styles.tint}></div>
                <div className='relative z-10 text-[28px] leading-[123%] small:text-[38px]'>
                    Personalised Investment Advisory
                </div>
                <div className='max-[639px]:mt-[8px] max-[639px[:text-sm relative z-10 font-[200] leading-[21px] small:w-[480px] small:leading-[2]'>
                    Connect with us for a comprehensive real estate investment
                    experience tailored to high end needs
                </div>
            </div>
        </Link>
    );
};
