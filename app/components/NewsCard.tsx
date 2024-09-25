import Link from 'next/link';
import Image from 'next/image';
import s from '@/app/ui/main.module.css';
import { NewsItem } from '@/app/types';
import { createSlug } from '../constants';

interface NewsCardProps {
    newsItem: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ newsItem }) => {
    return (
        <div
            className={`${s.propPic} mt-[20px] sm:w-[50%] md:mt-[43px] xl:w-[auto] small:w-[33.333%]`}
        >
            <Link
                href={`/news/${createSlug(newsItem.heading)}`}
                className='relative block h-[293px] w-[100%] xl:w-[auto]'
            >
                <Image
                    src={newsItem.image || ''}
                    alt={newsItem.heading}
                    width={0}
                    height={0}
                    className={`news-card_img`}
                    fill={true}
                />
            </Link>
            <div className='ml-[10px] mt-[15px]'>
                <h3 className=' text-[15px] font-[700] leading-normal'>
                    {newsItem.heading}
                </h3>
                <div
                    className='ellipse-text ellipse-text-2 mt-[5px] text-xs'
                    dangerouslySetInnerHTML={{
                        __html: newsItem.description
                    }}
                ></div>
            </div>
        </div>
    );
};

export default NewsCard;
