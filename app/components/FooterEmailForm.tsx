'use client';

import { useState } from 'react';
import useSWR from 'swr';
import { apiUrl, fetcher } from '@/app/constants';
import s from '@/app/ui/main.module.css';

interface Response {
    status: string;
    message: string;
}

interface FormData {
    email: string;
}

export const FooterEmailForm = () => {
    const [formData, setFormData] = useState<FormData>({
        email: ''
    });
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch(apiUrl + '/api/newsletter-signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (!response.ok) {
            console.error('Error submitting form:', response.statusText);
            setErrorMessage(data.message || 'There was an error.');
            setSuccessMessage(null);
        } else {
            setSuccessMessage('Subscribed successfully.');
            setErrorMessage(null);
            setEmail('');
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        setEmail(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className='footer-subscribe mt-[30px]'>
            <div className='mt-[-15px] flex items-stretch gap-1'>
                <div className={`${s.hoverable} w-full`}>
                    <input
                        type='email'
                        name='email'
                        id='email_input'
                        value={email}
                        onChange={handleChange}
                        className='autofill-input text-[100%]` block h-full w-full border-0
                    bg-transparent py-1.5 placeholder-[#eddfd0] shadow-[rgb(237,223,208,0.5)_0px_1px_0_0] ring-0 ring-inset ring-transparent transition
                    duration-200 ease-in-out focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] sm:leading-6'
                        placeholder='Enter your email'
                    />
                </div>
                <button className='rounded-[40px] bg-[#938270] px-[35px] py-[16px] text-sm'>
                    Sign&nbsp;Up
                </button>
            </div>
            {successMessage && <div className='mt-4'>{successMessage}</div>}
            {errorMessage && <div className='mt-4'>{errorMessage}</div>}
        </form>
    );
};
