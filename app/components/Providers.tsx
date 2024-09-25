'use client';

import { APIContextProvider } from '../context/APIContext';

export function Providers({ children }: { children: React.ReactNode }) {
    return <APIContextProvider>{children}</APIContextProvider>;
}
