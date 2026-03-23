export type SiteTheme = 'dark' | 'midnight';
export type SiteLocale = 'ru' | 'en';

export type SiteStore = {
    theme: SiteTheme;
    locale: SiteLocale;
    docsFilter: string;
    mounted: boolean;
    mobileMenuOpen: boolean;
    setTheme: (theme: SiteTheme) => void;
    toggleTheme: () => void;
    setLocale: (locale: SiteLocale) => void;
    setDocsFilter: (value: string) => void;
    hydrateFromStorage: () => void;
    setMounted: (value: boolean) => void;
    setMobileMenuOpen: (value: boolean) => void;
    toggleMobileMenu: () => void;
};