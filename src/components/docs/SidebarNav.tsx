'use client';

import { Card, Input, Text, Title } from '@merely-ui/react';
import {useDocsFilter, useSiteLocale, useSiteStore} from '@/store/siteStore';
import {SidebarNavProps} from "@/types/docs";

export function SidebarNav({ items, menuTitle }: SidebarNavProps) {
    const docsFilter = useDocsFilter();
    const setDocsFilter = useSiteStore((state) => state.setDocsFilter);

    const locale = useSiteLocale();

    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(docsFilter.toLowerCase())
    );

    return (
        <aside className="docs-sidebar">
            <div className="m-card">
                <Card className="docs-sidebar__panel" _size="m">
                    <Title as="h3" _size="m">
                        {menuTitle}
                    </Title>

                    <div className="m-input">
                        <Input
                            value={docsFilter}
                            placeholder={locale === 'en' ? 'Search...' : 'Поиск...'}
                            _size="s"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setDocsFilter(event.target.value);
                            }}
                        />
                    </div>

                    <div className="docs-sidebar__links">
                        {filteredItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="docs-sidebar__link"
                            >
                                <Text _size="s">{item.title}</Text>
                            </a>
                        ))}
                    </div>
                </Card>
            </div>
        </aside>
    );
}