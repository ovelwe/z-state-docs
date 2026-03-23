'use client';

import { Flex, Select, SelectItem, Text } from '@merely-ui/react';
import { useSiteLocale, useSiteStore } from '@/store/siteStore';

export function LanguageSwitcher() {
    const locale = useSiteLocale();
    const setLocale = useSiteStore((state) => state.setLocale);

    return (
        <Flex alignItems="center" gap="8px" className="toolbar-control">
            <Text _size="s" as="span" className="toolbar-label">
                {locale === 'en' ? 'Language' : 'Язык'}
            </Text>

            <div className="m-select">
                <Select
                    _size="s"
                    value={locale}
                    onChangeValue={(value: string) => {
                        if (value === 'ru' || value === 'en') {
                            setLocale(value);
                        }
                    }}
                    placeholder={`${locale.toLocaleUpperCase()}`}
                >
                    <SelectItem value="ru">RU</SelectItem>
                    <SelectItem value="en">EN</SelectItem>
                </Select>
            </div>
        </Flex>
    );
}