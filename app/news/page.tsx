import '@/app/ui/index.css';
import { Metadata } from 'next';
import { NewsContent } from './NewsContent';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'News & Events',
    description: 'News & Events',
    keywords: 'News & Events',
  };
}

export default async function NewsPage() {
  return (
    <div className="news-events mb-[30px] mt-[200px] w-full sm:mb-[60px]  xl:mb-[70px] 3xl:max-w-[1200px]">
      <div className="text-[40px] gothamBold leading-[39px] sm:text-[45px] sm:leading-[42.3px]">
        <div>News & Events</div>
        <NewsContent />
      </div>
    </div>
  );
}
