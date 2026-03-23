'use client';

import { Flex, Text } from '@merely-ui/react';
import { getDictionary } from '@/content/i18n';
import { useSiteLocale } from '@/store/siteStore';
import Image from "next/image";

export function Footer() {
    const locale = useSiteLocale();
    const dict = getDictionary(locale);

    return (
        <footer className="footer">
            <div className="container footer__inner">
                <Flex alignItems="center" justifyContent="space-between" gap="16px" flexWrap="wrap">
                    <Flex alignItems="center" gap="12px">
                        <Image src={'/favicon.svg'} alt={'z-state-logo'} width={18} height={18} className={'header__logo'} />
                        <Text _size="s" className="footer-text">
                            {dict.footer.text} by ovelwe
                        </Text>
                    </Flex>

                    <Text _size="s" className="footer-text-muted">
                        © {new Date().getFullYear()}
                    </Text>
                </Flex>
            </div>
        </footer>
    );
}