'use client';
import { ReactLenis } from '@studio-freight/react-lenis';

export function SmoothScrolling({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.3, duration: 1.5 }}>
            <>{/**@ts-ignore */}</>
            {children}
        </ReactLenis>
    );
}
