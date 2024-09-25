'use client';

import s from '@/app/ui/main.module.css';
import { useState, useRef, useEffect } from 'react';
import { apiUrl } from '../constants';

const useAutoResizeTextarea = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const resize = () => {
        if (textareaRef.current) {
            // Reset the height to 'auto' to get the correct scrollHeight
            textareaRef.current.style.height = 'auto';
            // Set the height to scrollHeight to fit the content
            textareaRef.current.style.height =
                textareaRef.current.scrollHeight + 'px';
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.addEventListener('input', resize);
        }
        return () => {
            if (textareaRef.current) {
                textareaRef.current.removeEventListener('input', resize);
            }
        };
    }, []);

    return { textareaRef, resize };
};

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

interface EnquireFormProps {
    hasUploadField?: boolean;
}

export const EnquireForm = ({ hasUploadField = false }: EnquireFormProps) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [selectedFile, setSelectedFile] = useState('');
    const { textareaRef, resize: resizeTextarea } = useAutoResizeTextarea();
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        resizeTextarea();
    };

    const handleFileSelect: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        if (!event.target.files) return;
        const file = event.target.files[0];
        if (file) setSelectedFile(file.name);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // console.log(token);
        const response = await fetch(apiUrl + '/api/submit-enquiry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'X-CSRF-TOKEN': token
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (!response.ok) {
            console.error(
                'Error submitting form:',
                data.message || response.statusText
            );
            setErrorMessage(
                data.message ||
                    'There was an error submitting the form. Please try again.'
            );
            setSuccessMessage(null);
        } else {
            setSuccessMessage(
                data.message ||
                    'Form Submitted! We will get back to you shortly.'
            );
            setErrorMessage(null);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }
    };

    const closeAlert = () => {
        setErrorMessage(null);
        setSuccessMessage(null);
    };

    useEffect(() => {
        // fix for id links
        document.querySelectorAll('a[href^="#"]').forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const id = el.getAttribute('href')?.slice(1);
                if (!id) return;
                const target = document.getElementById(id);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit} className='mt-[43px] text-white'>
                <div className='flex w-full flex-wrap justify-between gap-x-[30px] gap-y-[28px]'>
                    <div className='w-full md:w-[calc(50%-26px)] msm:w-[calc(50%-15px)]'>
                        <label
                            htmlFor='name'
                            className='block text-sm font-medium leading-6'
                        >
                            Your Name*
                        </label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            autoComplete='given-name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder='Full Name'
                            className={`block 
                                w-[100%] 
                                border-0 border-b-[1px] border-[#eddfd0] 
                                bg-transparent 
                                py-1.5 
                                placeholder-[#eddfd0] 
                                ring-0 ring-inset ring-transparent transition duration-200 ease-in-out hover:ring-[#EDDFD0]/50 
                                focus:border-0 focus:border-b-[1px] focus:border-[#eddfd0] focus:outline-none 
                                focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] 
                                sm:leading-6`}
                        />
                    </div>
                    <div className='w-full md:w-[calc(50%-26px)] msm:w-[calc(50%-15px)]'>
                        <label
                            htmlFor='email'
                            className='block text-sm font-medium leading-6'
                        >
                            Email Address*
                        </label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            autoComplete='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='name@company.com'
                            required
                            className={`block 
                                w-[100%] 
                                border-0 border-b-[1px] border-[#eddfd0] 
                                bg-transparent 
                                py-1.5 
                                placeholder-[#eddfd0] 
                                ring-0 ring-inset ring-transparent transition duration-200 ease-in-out hover:ring-[#EDDFD0]/50 
                                focus:border-0 focus:border-b-[1px] focus:border-[#eddfd0] focus:outline-none 
                                focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] 
                                sm:leading-6`}
                        />
                    </div>
                    <div className='w-full md:w-[calc(50%-26px)] msm:w-[calc(50%-15px)]'>
                        <label
                            htmlFor='phone'
                            className='block text-sm font-medium leading-6'
                        >
                            Contact Number*
                        </label>
                        <input
                            type='tel'
                            name='phone'
                            id='phone'
                            autoComplete='tel'
                            value={formData.phone}
                            placeholder='+971 50 123 4567'
                            maxLength={12}
                            onChange={handleChange}
                            required
                            className={`block 
                                w-[100%] 
                                border-0 border-b-[1px] border-[#eddfd0] 
                                bg-transparent 
                                py-1.5 
                                placeholder-[#eddfd0] 
                                ring-0 ring-inset ring-transparent transition duration-200 ease-in-out hover:ring-[#EDDFD0]/50 
                                focus:border-0 focus:border-b-[1px] focus:border-[#eddfd0] focus:outline-none 
                                focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] 
                                sm:leading-6`}
                        />
                    </div>
                    <div className='w-full md:w-[calc(50%-26px)] msm:w-[calc(50%-15px)]'>
                        <label
                            htmlFor='subject'
                            className='block text-sm font-medium leading-6'
                        >
                            Subject*
                        </label>
                        <input
                            type='text'
                            name='subject'
                            id='subject'
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder='Subject'
                            className={`block 
                                w-[100%] 
                                border-0 border-b-[1px] border-[#eddfd0] 
                                bg-transparent 
                                py-1.5 
                                placeholder-[#eddfd0] 
                                ring-0 ring-inset ring-transparent transition duration-200 ease-in-out hover:ring-[#EDDFD0]/50 
                                focus:border-0 focus:border-b-[1px] focus:border-[#eddfd0] focus:outline-none 
                                focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] 
                                sm:leading-6`}
                        />
                    </div>
                </div>
                {hasUploadField ? (
                    <label
                        className='mt-[28px] block w-full text-sm font-medium leading-6'
                        htmlFor='upload-cv'
                    >
                        <div>Upload CV</div>
                        <div
                            className='flex w-full 
                            cursor-pointer items-baseline justify-between 
                            border-0 border-b-[1px] border-[#eddfd0] 
                            bg-transparent 
                            py-1.5 pb-[28px]
                            ring-0 ring-inset ring-transparent transition duration-200 ease-in-out hover:ring-[#EDDFD0]/50 
                            focus:border-0 focus:border-b-[1px] focus:border-[#eddfd0] focus:outline-none 
                            sm:leading-6'
                        >
                            <span>{selectedFile}</span>
                            <div
                                className='rounded-3xl border border-solid border-[#EDDFD0] px-[50px] py-[15px] text-sm
                            transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                            >
                                Upload
                            </div>
                        </div>
                        <input
                            type='file'
                            id='upload-cv'
                            name='upload-cv'
                            onChange={handleFileSelect}
                            className='hidden'
                        />
                    </label>
                ) : null}
                <div className='mt-[33px] w-full'>
                    <label
                        htmlFor='message'
                        className='text-sm font-medium leading-6'
                    >
                        Your Message*
                    </label>
                    <div className='mt-2'>
                        <textarea
                            ref={textareaRef}
                            id='message'
                            placeholder='Write your message here'
                            name='message'
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className='block 
                                w-[100%] 
                                border-0 border-b-[1px] border-[#eddfd0] 
                                bg-transparent 
                                py-1.5 
                                placeholder-[#eddfd0] 
                                ring-0 ring-inset ring-transparent transition duration-200 ease-in-out hover:ring-[#EDDFD0]/50 
                                focus:border-0 focus:border-b-[1px] focus:border-[#eddfd0] focus:outline-none 
                                focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] 
                                sm:leading-6'
                        ></textarea>
                    </div>
                </div>
                <div className='w-full'>
                    <button
                        type='submit'
                        className='mx-auto mt-[39px] block rounded-3xl border border-solid border-[#EDDFD0] px-[50px] py-[15px] text-sm transition
                        duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                    >
                        Submit
                    </button>
                </div>
                {(errorMessage || successMessage) && (
                    <div
                        className='relative mx-auto mt-[25px] max-w-[500px] border-0 border-b-[1px] border-[#EDDFD0] px-4 py-3'
                        role='alert'
                    >
                        <span className='block sm:inline'>
                            {errorMessage || successMessage}
                        </span>
                        <span
                            className='absolute bottom-0 right-0 top-0 px-4 py-3'
                            onClick={closeAlert}
                        >
                            <svg
                                className='h-6 w-6 fill-current text-[#EDDFD0]'
                                role='button'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                            >
                                <title>Close</title>
                                <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
                            </svg>
                        </span>
                    </div>
                )}
            </form>
        </>
    );
};
