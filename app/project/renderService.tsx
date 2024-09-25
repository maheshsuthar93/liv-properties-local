import Image from 'next/image';

// Case 10: Fireplace
// Case 11: Garage
// Case 12: Mountain View
// Case 13: Terrace
// Case 14: Pool
// Case 15: Outdoor Kitchen
// Case 16: Walk in Closet
// Case 17: Modern

const renderService = (serviceId: number | string) => {
    switch (serviceId) {
        case '10':
            return (
                <div className='flex items-center' key={10}>
                    <Image
                        src='/icons/fire.svg'
                        alt='Fire icon'
                        width={16}
                        height={16}
                        className='mr-[10px] inline'
                    />
                    Fireplace
                </div>
            );
        case '11':
            return (
                <div className='flex items-center' key={11}>
                    <Image
                        src='/icons/garage.svg'
                        alt='Garage icon'
                        width={16}
                        height={16}
                        className='mr-[10px] inline'
                    />
                    Garage
                </div>
            );
        case '12':
            return (
                <div className='flex items-center' key={12}>
                    <Image
                        src='/icons/mountains.svg'
                        alt='Mountains icon'
                        width={16}
                        height={16}
                        className='mr-[10px] inline'
                    />
                    Mountain View
                </div>
            );

        case '13':
            return (
                <div className='flex items-center' key={13}>
                    <Image
                        src='/icons/chair.svg'
                        alt='Chair icon'
                        width={16}
                        height={16}
                        className='mr-[10px] inline'
                    />
                    Terrace
                </div>
            );

        case '14':
            return (
                <div className='flex items-center' key={14}>
                    <Image
                        src='/icons/waves.svg'
                        alt='Waves icon'
                        width={16}
                        height={16}
                        className='mr-[10px] inline'
                    />
                    Pool
                </div>
            );

        case '15':
            return (
                <div className='flex items-center' key={15}>
                    <Image
                        src='/icons/faucet.svg'
                        alt='Faucet icon'
                        width={16}
                        height={16}
                        className='mr-[10px] inline'
                    />
                    Outdoor Kitchen
                </div>
            );

        case '16':
            return (
                <div className='flex items-center' key={16}>
                    <Image
                        src='/icons/checkroom.svg'
                        alt='Checkroom icon'
                        width={16}
                        height={16}
                        className='mr-[10px] inline'
                    />
                    Walk in Closet
                </div>
            );

        case 17:
            return (
                <div className='flex items-center' key={17}>
                    <Image
                        src='/icons/flare.svg'
                        alt='Flare icon'
                        width={16}
                        height={16}
                        className='mr-[10px] inline'
                    />
                    Modern
                </div>
            );
    }
};

export default renderService;
