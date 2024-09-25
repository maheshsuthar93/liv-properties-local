import type { Config } from 'tailwindcss';

const config: Config = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            screens: {
                xs: '320px',
                msm: '480px',
                msmall: '858px',
                small: '920px',
                bigtab: '1025px',
                smlap: '1100px',
                mdlap: '1366px',
                '3xl': '1536px',
                '4xl': '1630px',
                '4xlh': {
                    raw: '((min-width: 920px) and (min-height: 1080px) and (max-width:1280px))'
                }
            },
            gridTemplateColumns: {
                '13': 'repeat(13, minmax(0, 1fr))'
            },
            colors: {
                blue: {
                    400: '#2589FE',
                    500: '#0070F3',
                    600: '#2F6FEB'
                }
            }
        },
        keyframes: {
            shimmer: {
                '100%': {
                    transform: 'translateX(100%)'
                }
            }
        }
    },
    plugins: [require('@tailwindcss/forms')]
};
export default config;
