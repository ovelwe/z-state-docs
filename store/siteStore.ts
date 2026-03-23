'use client';

import { create } from '@ovelwe/z-state';
import {SiteStore} from "@/types/store";

export const useSiteStore = create<SiteStore>((set, get) => ({
    theme: 'dark',
    locale: 'ru',
    docsFilter: '',
    mounted: false,
    mobileMenuOpen: false,

    setTheme: (theme) => {
        set({ theme });

        if (typeof window !== 'undefined') {
            window.localStorage.setItem('z-state-docs-theme', theme);
        }
    },

    toggleTheme: () => {
        const nextTheme = get().theme === 'dark' ? 'midnight' : 'dark';
        set({ theme: nextTheme });

        if (typeof window !== 'undefined') {
            window.localStorage.setItem('z-state-docs-theme', nextTheme);
        }
    },

    setLocale: (locale) => {
        set({ locale });

        if (typeof window !== 'undefined') {
            window.localStorage.setItem('z-state-docs-locale', locale);
        }
    },

    setDocsFilter: (value) => {
        set({ docsFilter: value });
    },

    hydrateFromStorage: () => {
        if (typeof window === 'undefined') {
            return;
        }

        const savedTheme = window.localStorage.getItem('z-state-docs-theme');
        const savedLocale = window.localStorage.getItem('z-state-docs-locale');

        set({
            theme:
                savedTheme === 'dark' || savedTheme === 'midnight'
                    ? savedTheme
                    : 'dark',
            locale:
                savedLocale === 'ru' || savedLocale === 'en'
                    ? savedLocale
                    : 'ru',
        });
    },

    setMounted: (value) => {
        set({ mounted: value });
    },

    setMobileMenuOpen: (value) => {
        set({ mobileMenuOpen: value });
    },

    toggleMobileMenu: () => {
        set((prev) => ({ mobileMenuOpen: !prev.mobileMenuOpen }));
    },
}));

export function useSiteTheme() {
    return useSiteStore((state) => state.theme);
}

export function useSiteLocale() {
    return useSiteStore((state) => state.locale);
}

export function useDocsFilter() {
    return useSiteStore((state) => state.docsFilter);
}