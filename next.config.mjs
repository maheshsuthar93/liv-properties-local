// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     webpack: (config) => {
//         config.module.rules.push({
//             test: /\.node$/,
//             use: 'node-loader'
//         });

//         return config;
//     },
//     /**
//      * Enable static exports for the App Router.
//      *
//      * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
//      */
//     // output: 'export',

//     /**
//      * Set base path. This is the slug of your GitHub repository.
//      *
//      * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
//      */

//     /**
//      * Disable server-based image optimization. Next.js does not support
//      * dynamic features with static exports.
//      *
//      * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
//      */
//     images: {
//         formats: ['image/webp'],
//         unoptimized: true
//     }
// };

// module.exports = nextConfig;

// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    // sassOptions: {
    //     includePaths: [join(__dirname, 'styles')]
    // },
    images: {
        formats: ['image/webp'],
        unoptimized: true
    }
};

export default nextConfig;
