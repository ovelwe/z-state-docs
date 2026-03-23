'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button, Flex, Tag, Title } from '@merely-ui/react';
import { getDictionary } from '@/content/i18n';
import { useSiteLocale, useSiteStore } from '@/store/siteStore';
import { LanguageSwitcher } from '@/src/components/site/LanguageSwitcher';
import { ThemeSwitcher } from '@/src/components/site/ThemeSwitcher';

export function Header() {
    const locale = useSiteLocale();
    const dict = getDictionary(locale);

    const mobileMenuOpen = useSiteStore((state) => state.mobileMenuOpen);
    const toggleMobileMenu = useSiteStore((state) => state.toggleMobileMenu);
    const setMobileMenuOpen = useSiteStore((state) => state.setMobileMenuOpen);

    return (
        <header className="header">
            <div className="container">
                <Flex
                    className="header__inner"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Link
                        href="/"
                        className="header__brand"
                        onClick={() => {
                            setMobileMenuOpen(false);
                        }}
                    >
                        <Flex alignItems="center" gap="10px">
                            <Image
                                src="/favicon.svg"
                                alt="z-state-logo"
                                width={28}
                                height={28}
                                className="header__logo"
                            />

                            <Title as="h3" _size="m" className="brand-title">
                                z-state
                            </Title>

                            <Tag _size="s" variant="outline">
                                {locale.toUpperCase()}
                            </Tag>
                        </Flex>
                    </Link>

                    <Flex
                        className="header__nav header__nav--desktop"
                        alignItems="center"
                        gap="16px"
                    >
                        <Link href="/" className="header__link">
                            {dict.nav.home}
                        </Link>

                        <Link href="/docs" className="header__link">
                            {dict.nav.docs}
                        </Link>

                        <Link href="/examples" className="header__link">
                            {dict.nav.examples}
                        </Link>

                        <LanguageSwitcher />
                        <ThemeSwitcher />

                        <a
                            href="https://www.npmjs.com/package/@ovelwe/z-state"
                            target="_blank"
                            rel="noreferrer"
                            className="link-reset header-action-btn"
                        >
                            <div className="m-btn m-btn--outline header-action-btn__inner">
                                <Button _size="s" variant="outline">
                                    <span className="header-action-btn__icon">📦</span>
                                    {dict.nav.npm}
                                </Button>
                            </div>
                        </a>

                        <a
                            href="https://github.com/ovelwe/z-manager"
                            target="_blank"
                            rel="noreferrer"
                            className="link-reset header-action-btn"
                        >
                            <div className="m-btn m-btn--solid header-action-btn__inner">
                                <Button _size="s">
                                    <span className="header-action-btn__icon">🐙</span>
                                    {dict.nav.github}
                                </Button>
                            </div>
                        </a>
                    </Flex>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        className={`header__burger ${mobileMenuOpen ? 'is-open' : ''}`}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileMenuOpen}
                        onClick={toggleMobileMenu}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </Flex>

                {mobileMenuOpen ? (
                    <div className="header__mobile-panel">
                        <div className="header__mobile-links">
                            <Link
                                href="/"
                                className="header__mobile-link"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                }}
                            >
                                {dict.nav.home}
                            </Link>

                            <Link
                                href="/docs"
                                className="header__mobile-link"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                }}
                            >
                                {dict.nav.docs}
                            </Link>

                            <Link
                                href="/examples"
                                className="header__mobile-link"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                }}
                            >
                                {dict.nav.examples}
                            </Link>

                            <div className="header__mobile-controls">
                                <LanguageSwitcher />
                                <ThemeSwitcher />
                            </div>

                            <div className="header__mobile-actions">
                                <a
                                    href="https://www.npmjs.com/package/@ovelwe/z-state"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="link-reset"
                                >
                                    <div className="m-btn m-btn--outline">
                                        <Button _size="s" variant="outline">
                                            {dict.nav.npm}
                                        </Button>
                                    </div>
                                </a>

                                <a
                                    href="https://github.com/ovelwe/z-manager"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="link-reset"
                                >
                                    <div className="m-btn m-btn--solid">
                                        <Button _size="s">{dict.nav.github}</Button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </header>
    );
}