import { ChangeEventHandler } from 'react';

interface MuiInputProps {
    label: string;
    type?: string;
    value: any;
    onChange: ChangeEventHandler<HTMLInputElement>;
    className?: string;
}

export const MuiInput = (p: MuiInputProps) => {
    return (
        <div
            className={`group relative m-4 max-w-[fit-content] ${p.className}`}
        >
            <input
                type={p.type || 'text'}
                className='peer px-3 py-3 outline-none'
                placeholder=' '
                value={p.value}
                onChange={p.onChange}
            />

            <label
                className='pointer-events-none absolute left-[9px] top-px -translate-y-1/2 transform px-1 text-sm text-[#EDDFD0] transition-all duration-300 
                group-focus-within:!top-px group-focus-within:!text-sm group-focus-within:!text-blue-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xl'
            >
                {p.label}
            </label>

            {/* <!--This fieldset+legend is used for the the border and notch transition--> */}
            <fieldset
                className='pointer-events-none invisible absolute inset-0 mt-[-9px] rounded border border-gray-400 group-focus-within:border-2 
                group-focus-within:!border-blue-500 group-hover:border-gray-700 peer-placeholder-shown:visible'
            >
                <legend className='invisible ml-2 max-w-[0.01px] whitespace-nowrap px-0 text-sm transition-all duration-300 group-focus-within:max-w-full group-focus-within:px-1'>
                    Label
                </legend>
            </fieldset>

            {/* <!--This fieldset+legend always has a notch and is shown when the input is filled, instead of the other, so the notch doesnt vanish when you unfocus the field--> */}
            <fieldset
                className='pointer-events-none visible absolute inset-0 mt-[-9px] rounded border border-gray-400 group-focus-within:border-2 
                group-focus-within:!border-blue-500 group-hover:border-gray-700 peer-placeholder-shown:invisible'
            >
                <legend className='invisible ml-2 max-w-full whitespace-nowrap px-1 text-sm'>
                    {p.label}
                </legend>
            </fieldset>
        </div>
    );
};
