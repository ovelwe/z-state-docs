'use client';

import { useEffect } from 'react';
import { MerelyProvider } from '@merely-ui/react';
import { useSiteStore } from '@/store/siteStore';
import {ProvidersProps} from "@/types/layout";

export function Providers({ children }: ProvidersProps) {
    const theme = useSiteStore((state) => state.theme);
    const hydrateFromStorage = useSiteStore((state) => state.hydrateFromStorage);
    const setMounted = useSiteStore((state) => state.setMounted);

    useEffect(() => {
        hydrateFromStorage();
        setMounted(true);
    }, [hydrateFromStorage, setMounted]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.style.colorScheme = 'dark';
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return <MerelyProvider>{children}</MerelyProvider>;
}