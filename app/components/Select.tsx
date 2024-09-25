'use client';

import { useState } from 'react';
import s from '@/app/ui/main.module.css';
import Image from 'next/image';

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    className: string;
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const Select = ({
    options,
    value,
    onChange,
    className
}: CustomSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: string) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className={`relative ${s.hoverable} ${className}`}>
            <button
                className={`relative flex w-full min-w-[130px] flex-row items-center justify-between bg-transparent py-3 pl-2 text-[#eddfd0] focus:outline-none`}
                onClick={handleClick}
            >
                {capitalize(value)}
                <Image
                    src='/icons/expand_more.svg'
                    alt='Arrow down'
                    width={32}
                    height={32}
                    className={`transition duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <ul
                className={`pointer-events-none absolute left-0 top-full w-full rounded bg-[#eddfd0] opacity-0
                shadow transition duration-200 ease-in-out ${isOpen ? 'pointer-events-auto z-10 opacity-100' : ''}`}
            >
                {options.map((option) => (
                    <li
                        key={option.value}
                        className='px-2 py-2 text-[#827160] transition duration-200 hover:bg-[#fff9f3]'
                        onClick={() => handleSelect(option.value)}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};
