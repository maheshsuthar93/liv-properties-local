import s from '@/app/ui/main.module.css';
import Image from 'next/image';
import { Property } from '../types';

const ProjectImages = ({
    property,
    stateChanger,
    images
}: {
    property: Property;
    stateChanger: any;
    images: any;
}) => {
    const maxVisibleImages = 3;
    return (
        <div className='flex w-full flex-col items-end gap-[15px] xl:w-[65%] xl:translate-y-[-100px]'>
            <Image
                src={property.main_image ?? ''}
                alt={property.property_name ?? 'property image'}
                width={791}
                height={490}
                className='w-full cursor-pointer xl:w-[791px]'
                priority
                onClick={() => stateChanger()}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                placeholder='blur'
                blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAfACYDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAMEAgEF/8QAGxAAAwADAQEAAAAAAAAAAAAAAAECAxIhETH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD1KtNE2Xpmcvpv6jNogzSI16X5YJnPSBakBykCh0Jpj0+HNTj4BnIyan0dbJrZBrYBDoAj/9k='
            />
            <div className='mx-auto flex max-h-[101px] gap-[11px]'>
                {images
                    .slice(0, maxVisibleImages)
                    .map((image: string, index: string) => (
                        <div key={index} className='h-[100px] w-[100px]'>
                            <Image
                                src={image}
                                alt={property.property_name ?? 'property image'}
                                width={0}
                                height={0}
                                className='m-1 h-[100px] w-[100px] cursor-pointer object-cover'
                                sizes='100vw'
                                onClick={() => stateChanger()}
                                placeholder='blur'
                                blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAfACYDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAMEAgEF/8QAGxAAAwADAQEAAAAAAAAAAAAAAAECAxIhETH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD1KtNE2Xpmcvpv6jNogzSI16X5YJnPSBakBykCh0Jpj0+HNTj4BnIyan0dbJrZBrYBDoAj/9k='
                            />
                        </div>
                    ))}
                {images.length > maxVisibleImages && (
                    <div className={`${s.viewMorePics}`}>
                        <Image
                            src={images[3]}
                            alt={property.property_name ?? 'property image'}
                            width={0}
                            height={0}
                            sizes='100vw'
                            className='h-[100px] w-[100px] cursor-pointer object-cover'
                            onClick={() => stateChanger()}
                        />
                        <div
                            className={`${s.backdrop} cursor-pointer text-sm`}
                            onClick={() => stateChanger()}
                        >
                            <Image
                                src='/icons/camera.svg'
                                alt='Camera icon'
                                width={24}
                                height={24}
                                className='cursor-pointer'
                            />
                            <span>
                                {images.length - maxVisibleImages}+ Photos
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectImages;
