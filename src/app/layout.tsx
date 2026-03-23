import type { Metadata } from 'next';
import './globals.css';
import '@ovelwe/z-md/styles.css';
import { Providers } from '@/src/components/layout/Providers';
import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';
import {RootLayoutProps} from "@/types/layout";

export const metadata: Metadata = {
    title: '@ovelwe/z-state',
    description:
        'Лёгкий и понятный state manager для React с middleware, computed values и поддержкой Redux DevTools.',
    icons: {
        icon: '/favicon.svg',
        shortcut: '/favicon.svg',
        apple: '/favicon.svg',
    }
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ru" data-theme="dark" suppressHydrationWarning>
        <body data-theme="dark">
        <Providers>
            <div className="site-shell">
                <Header />
                <main className="site-main">{children}</main>
                <Footer />
            </div>
        </Providers>
        </body>
        </html>
    );
}