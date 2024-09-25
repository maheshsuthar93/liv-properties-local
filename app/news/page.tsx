import '@/app/ui/index.css';
import { Metadata } from 'next';
import { NewsContent } from './NewsContent';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'News & Events',
        description: 'News & Events',
        keywords: 'News & Events'
    };
}

export default async function NewsPage() {
    return (
        <div className='news-events mb-[30px] w-full sm:mb-[60px] sm:mt-[-50px] lg:mt-0 xl:mb-[70px] 3xl:max-w-[1200px]'>
            <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
                <h1>News & Events</h1>
                <NewsContent />
            </div>
        </div>
    );
}
