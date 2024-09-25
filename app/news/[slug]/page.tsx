'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createSlug, fetchGeneral, formatDate } from '@/app/constants';
import { NewsItem, NewsPageProps, NewsResponse } from '@/app/types';
import { Loading } from '@/app/components';

export default function NewsDetailPage({ params }: NewsPageProps) {
    const { slug } = useParams();
    const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
    const [newsData, setNewsData] = useState<NewsResponse | null>(null);

    useEffect(() => {
        if (slug) {
            fetchGeneral('news').then((data) => {
                setNewsData(data);
                const foundItem = data.data.find(
                    (item: NewsItem) => createSlug(item.heading) === slug
                );
                setNewsItem(foundItem || null);
            });
        }
    }, [slug]);

    if (!newsItem) {
        return (
            <div className='mt-[20px] w-full md:mt-[43px]'>
                <Loading />
            </div>
        );
    }

    const currentIndex = newsData?.data.findIndex(
        (item) => createSlug(item.heading) === slug
    );

    const prevIndex =
        currentIndex !== undefined && currentIndex > 0
            ? currentIndex - 1
            : null;
    const nextIndex =
        currentIndex !== undefined && currentIndex < newsData!.data.length - 1
            ? currentIndex + 1
            : null;

    const prevItem = prevIndex !== null ? newsData!.data[prevIndex] : null;
    const nextItem = nextIndex !== null ? newsData!.data[nextIndex] : null;

    return (
        <div className='mb-[30px] w-full sm:mb-[60px] sm:mt-[-50px] lg:mt-0 xl:mb-[70px] 3xl:max-w-[1200px]'>
            <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
                <h1>News & Events</h1>
            </div>
            <Image
                src='/images/news_building.jpg'
                alt='Building in snow'
                width={1120}
                height={480}
                className='mt-[50px] min-w-full'
            />
            <h2 className='mt-[33px] text-[25px] font-[200]'>
                {newsItem.heading}
            </h2>
            <button
                type='submit'
                className='mr-auto mt-[23px] block rounded-3xl border border-solid border-[#EDDFD0] px-[16px] py-[9px] text-xs transition
                duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
            >
                {formatDate(newsItem.created_at)}
            </button>
            <div
                className='news-detail-desc text-xs'
                dangerouslySetInnerHTML={{
                    __html: newsItem.description
                }}
            ></div>
            <div className='mt-[28px] flex justify-between'>
                {prevItem && (
                    <Link
                        href={`/news/${createSlug(prevItem.heading)}`}
                        className='block rounded-3xl border border-solid border-[#EDDFD0] px-[40px] py-[7px] text-xs transition
                    duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                    >
                        Back
                    </Link>
                )}
                {nextItem && (
                    <Link
                        href={`/news/${createSlug(nextItem.heading)}`}
                        className='block rounded-3xl border border-solid border-[#EDDFD0] px-[40px] py-[7px] text-xs transition
                            duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                    >
                        Next
                    </Link>
                )}
            </div>
        </div>
    );
}
