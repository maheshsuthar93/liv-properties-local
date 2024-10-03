'use client';

import Link from 'next/link';
import Image from 'next/image';
import { NewsResponse, NewsItem } from '@/app/types';
import { Fragment, useEffect, useState } from 'react';
import { createSlug, fetchGeneral, formatDate } from '../constants';
import NewsCard from '../components/NewsCard';
import { Loading } from '../components';

export const NewsContent = () => {
  const [newsData, setNewsData] = useState<NewsResponse | null>(null);

  useEffect(() => {
    fetchGeneral('news').then((data) => setNewsData(data));
  }, []);

  // const latestNews: NewsItem | null =
  //     newsData && newsData.data.length > 0 ? newsData.data[0] : null;

  // const otherNews: NewsItem[] =
  //     newsData && newsData.data.length > 1 ? newsData.data.slice(1) : [];

  const otherNews: NewsItem[] =
    newsData && newsData.data.length > 1 ? newsData.data : [];

  if (otherNews === null || otherNews === undefined) {
    return <Loading />;
  }
  if (otherNews.length == 0) {
    return <div>No news available</div>;
  } else {
    return (
      <Fragment>
        {/* <Link
                    href={`/news/${createSlug(latestNews.heading)}`}
                    className='relative mt-[50px] block h-[380px] w-full lg:h-[480px]'
                >
                    <Image
                        src={latestNews.image}
                        alt={latestNews.heading}
                        width={0}
                        height={0}
                        className=''
                        fill={true}
                    />
                </Link>
                <h2 className='mt-[33px] helveticaNeue text-[16px] font-[700] leading-[23.2px]'>
                    {latestNews.heading}
                </h2>
                <button
                    type='submit'
                    className='mr-auto mt-[16px] block rounded-3xl border border-solid border-[#EDDFD0] px-[16px] py-[9px] helveticaNeue text-[18px] font-[400] leading-[21.47px] transition
                duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                >
                    {formatDate(latestNews.created_at)}
                </button>
                <div
                    className='ellipse-text-container news-desc mt-[14px] border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[30px] helveticaNeue text-[16px] font-[400] leading-[25.92px]'
                    dangerouslySetInnerHTML={{
                        __html: latestNews.description
                    }}
                ></div> */}
        {/* <div className="mt-[8px] flex flex-wrap border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[34px] md:mt-[0px] xl:flex-nowrap">
          {otherNews.slice(0, 4).map((newsItem) => (
            <NewsCard key={newsItem.id} newsItem={newsItem} />
          ))}
        </div> */}
        <div className="featured-properties_grid mt-[8px] flex border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[34px] md:mt-[0px] xl:flex-nowrap">
          {otherNews.slice(0, 4).map((newsItem) => (
            <NewsCard key={newsItem.id} newsItem={newsItem} />
          ))}
        </div>
      </Fragment>
    );
  }
};
//
