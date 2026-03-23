'use client';

import { Text, Title } from '@merely-ui/react';
import { DocArticle } from '@/src/components/docs/DocArticle';
import { SidebarNav } from '@/src/components/docs/SidebarNav';
import { getDictionary } from '@/content/i18n';
import { useSiteLocale, useSiteTheme } from '@/store/siteStore';

export default function DocsPage() {
    const locale = useSiteLocale();
    const theme = useSiteTheme();
    const dict = getDictionary(locale);

    return (
        <div className={`page theme-${theme}`}>
            <div className="container">
                <section className="page-head">
                    <Title as="h1" _size="2xl">
                        {dict.docs.title}
                    </Title>
                    <Text className="section__text">{dict.docs.subtitle}</Text>
                </section>

                <div className="docs-layout">
                    <SidebarNav items={dict.docSections} menuTitle={dict.docs.menuTitle} />
                    <DocArticle sections={dict.docSections} />
                </div>
            </div>
        </div>
    );
}