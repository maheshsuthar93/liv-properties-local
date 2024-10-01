// import Image from 'next/image';
// import { Metadata } from 'next';
// import { EnquireForm } from '@/app/components';
// import { SellYourProperty } from '@/app/types';
// import { fetchData, getFieldValueByName } from '@/app/constants';

// const sellYourProperty: SellYourProperty = await fetchData(4);

// export async function generateMetadata(): Promise<Metadata> {
//     return {
//         title: sellYourProperty.header[0].metatitle,
//         description: sellYourProperty.header[0].metadescription,
//         keywords: sellYourProperty.header[0].metakeyword
//     };
// }

// export default async function SellPage() {
//     return (
//         <div className='mx-auto mb-[30px] w-full sm:mb-[60px] xl:mb-[84px] 3xl:max-w-[1200px]'>
//             <div className='relative mb-[82px]'>
//                 <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
//                     <h1 className='inline-block max-w-[220px] capitalize small:max-w-[300px] z-[1] relative'>
//                         {sellYourProperty?.['sell-your-property-section-1'][0]
//                             .field_value ?? ''}
//                     </h1>
//                     <div className='pointer-events-none absolute top-[50%] z-[0] translate-y-[-30%] scale-[1.4] sm:translate-y-[-60%] md:translate-y-[-60%]  md:scale-[1.3] lg:scale-[1.3] xl:translate-y-[-80%] 2xl:scale-[1.4] msm:translate-y-[-55%] mdlap:translate-y-[-70%]'>
//                         <Image
//                             src={
//                                 (sellYourProperty?.[
//                                     'sell-your-property-section-1'
//                                 ][1].field_value as string) ??
//                                 '/images/sell_hero.webp'
//                             }
//                             alt={sellYourProperty.header[0].metadescription}
//                             width={1384}
//                             height={736}
//                         />
//                     </div>
//                 </div>
//             </div>
//             <div
//                 className='two-col-desc flex flex-col flex-nowrap gap-[30px] lg:flex-row lg:flex-wrap'
//                 dangerouslySetInnerHTML={{
//                     __html: sellYourProperty?.[
//                         'sell-your-property-section-1'
//                     ][2].field_value as string
//                 }}
//             ></div>
//             <div className='flex flex-col flex-nowrap gap-[0px] lg:flex-row lg:flex-wrap lg:gap-[30px]'>
//                 <Image
//                     src='/images/sell1.webp'
//                     alt='Building in snow'
//                     width={790}
//                     height={480}
//                     className='mt-[50px] w-full lg:w-[calc(70%-15px)]'
//                 />
//                 <Image
//                     src='/images/sell2.webp'
//                     alt='Building in snow'
//                     width={395}
//                     height={480}
//                     className='mt-[50px] w-full lg:w-[calc(30%-15px)]'
//                 />
//             </div>
//             <div className='mt-[72px]'>
//                 <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
//                     <h2 className='inline-block max-w-[220px] capitalize small:max-w-[270px]'>
//                         {getFieldValueByName(
//                             sellYourProperty?.['sell-your-property-section-1'],
//                             'Form Heading'
//                         )}
//                     </h2>
//                 </div>
//                 <EnquireForm />
//             </div>
//         </div>
//     );
// }
import Image from 'next/image';
import { Metadata } from 'next';
import { EnquireForm } from '@/app/components';
import { SellYourProperty } from '@/app/types';
import { fetchData, getFieldValueByName } from '@/app/constants';

const sellYourProperty: SellYourProperty = await fetchData(4);

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: sellYourProperty.header[0].metatitle,
    description: sellYourProperty.header[0].metadescription,
    keywords: sellYourProperty.header[0].metakeyword,
  };
}

export default async function SellPage() {
  return (
    // <div className='mx-auto mb-[30px] w-full sm:mb-[60px] xl:mb-[84px] 3xl:max-w-[1200px]'>
    //     <div className='relative mb-[82px]'>
    //         <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
    //             <h1 className='inline-block max-w-[220px] capitalize small:max-w-[300px] z-[1] relative'>
    //                 {sellYourProperty?.['sell-your-property-section-1'][0]
    //                     .field_value ?? ''}
    //             </h1>
    //             <div className='pointer-events-none absolute top-[50%] z-[0] translate-y-[-30%] scale-[1.4] sm:translate-y-[-60%] md:translate-y-[-60%]  md:scale-[1.3] lg:scale-[1.3] xl:translate-y-[-80%] 2xl:scale-[1.4] msm:translate-y-[-55%] mdlap:translate-y-[-70%]'>
    //                 <Image
    //                     src={
    //                         (sellYourProperty?.[
    //                             'sell-your-property-section-1'
    //                         ][1].field_value as string) ??
    //                         '/images/sell_hero.webp'
    //                     }
    //                     alt={sellYourProperty.header[0].metadescription}
    //                     width={1384}
    //                     height={736}
    //                 />
    //             </div>
    //         </div>
    //     </div>
    //     <div
    //         className='two-col-desc flex flex-col flex-nowrap gap-[30px] lg:flex-row lg:flex-wrap'
    //         dangerouslySetInnerHTML={{
    //             __html: sellYourProperty?.[
    //                 'sell-your-property-section-1'
    //             ][2].field_value as string
    //         }}
    //     ></div>
    //     <div className='flex flex-col flex-nowrap gap-[0px] lg:flex-row lg:flex-wrap lg:gap-[30px]'>
    //         <Image
    //             src='/images/sell1.webp'
    //             alt='Building in snow'
    //             width={790}
    //             height={480}
    //             className='mt-[50px] w-full lg:w-[calc(70%-15px)]'
    //         />
    //         <Image
    //             src='/images/sell2.webp'
    //             alt='Building in snow'
    //             width={395}
    //             height={480}
    //             className='mt-[50px] w-full lg:w-[calc(30%-15px)]'
    //         />
    //     </div>
    //     <div className='mt-[72px]'>
    //         <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
    //             <h2 className='inline-block max-w-[220px] capitalize small:max-w-[270px]'>
    //                 {getFieldValueByName(
    //                     sellYourProperty?.['sell-your-property-section-1'],
    //                     'Form Heading'
    //                 )}
    //             </h2>
    //         </div>
    //         <EnquireForm />
    //     </div>
    // </div>
    <div className="mx-auto mb-[30px] w-full sm:mb-[60px] xl:mb-[84px] 3xl:max-w-[1200px] ">
      {/* <div className="relative mb-[82px]">
        <div className="text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]">
          <h1 className="relative z-[1] inline-block max-w-[220px] capitalize small:max-w-[300px]">
            {sellYourProperty?.['sell-your-property-section-1'][0]
              .field_value ?? ''}
          </h1>
          <div className="pointer-events-none absolute top-[50%] z-[0] translate-y-[-30%] scale-[1.4] sm:translate-y-[-60%] md:translate-y-[-60%]  md:scale-[1.3] lg:scale-[1.3] xl:translate-y-[-80%] 2xl:scale-[1.4] msm:translate-y-[-55%] mdlap:translate-y-[-70%]">
            <Image
              src={
                (sellYourProperty?.['sell-your-property-section-1'][1]
                  .field_value as string) ?? '/images/sell_hero.webp'
              }
              alt={sellYourProperty.header[0].metadescription}
              width={1384}
              height={736}
            />
          </div>
        </div>
      </div> */}
      <div className="flex flex-row items-center text-[30px] font-[700] leading-[38px] small:text-[45px] small:leading-[60px] ">
        <div className="absolute z-[1] ">
          <h1 className="inline-block  capitalize ">
            {sellYourProperty?.['sell-your-property-section-1'][0]
              .field_value ?? ''}
          </h1>
        </div>
        <Image
          src={
            (sellYourProperty?.['sell-your-property-section-1'][1]
              .field_value as string) ?? '/images/sell_hero.webp'
          }
          alt={sellYourProperty.header[0].metadescription}
          className="max-[1366px]:w-[90dvw] w-[100dvw] 4xlh:w-[100dvw] 4xlh:origin-bottom-right 4xlh:scale-[1.5]"
          width={1100}
          height={885}
        />
      </div>
      <div className="flex flex-wrap">
        <div className="w-full p-2 md:w-1/2 ">
          <Image
            src="/images/sellProperty1.png"
            alt="Building in snow"
            width={630}
            height={427}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="flex w-full items-center p-2 pl-[27px] md:w-1/2">
          <div>
            <p className="text-[30px] font-[500] leading-[36.15px]">
              Understand the Sales Process
            </p>
            <p className="mt-[27px] text-[16px] font-[400] leading-[25.92px]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[30px] flex flex-wrap">
        <div className="flex w-full  items-center pr-[27px] md:w-1/2">
          <div>
            <p className="text-[30px] font-[500] leading-[36.15px]">
              Valuation of Your Property
            </p>
            <p className="mt-[27px] text-[16px] font-[400] leading-[25.92px]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <Image
            src="/images/sellProperty2.png"
            alt="Building in snow"
            width={630}
            height={458}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-[30px] flex flex-wrap">
        <div className="w-full p-2 md:w-1/2 ">
          <Image
            src="/images/sellProperty3.png"
            alt="Building in snow"
            width={630}
            height={427}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="flex w-full items-center p-2 pl-[27px] md:w-1/2">
          <div>
            <p className="text-[30px] font-[500] leading-[36.15px]">
              Why Work with Liv Squared Properties
            </p>
            <p className="mt-[27px] text-[16px] font-[400] leading-[25.92px]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[72px]">
        <div className="gotham text-[35px] font-[700] leading-[42.3px] small:text-[35px] small:leading-[88px]">
          Request a Market Appraisal
        </div>
        <EnquireForm />
      </div>
    </div>
  );
}
