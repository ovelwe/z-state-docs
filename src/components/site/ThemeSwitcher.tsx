'use client';

import { Flex, Switch, Text } from '@merely-ui/react';
import {useSiteLocale, useSiteStore, useSiteTheme} from '@/store/siteStore';

export function ThemeSwitcher() {
    const theme = useSiteTheme();
    const toggleTheme = useSiteStore((state) => state.toggleTheme);

    const locale = useSiteLocale();

    return (
        <Flex alignItems="center" gap="8px" className="toolbar-control">
            <Text _size="s" as="span" className="toolbar-label">
                {locale === 'en' ? 'Theme' : 'Тема'}
            </Text>

            <Flex alignItems="center" gap="8px">
                {locale === 'en' ? (<Text _size="s" as="span" className="toolbar-value">
                    {theme === 'dark' ? 'Dark' : 'Midnight'}
                </Text>) : (<Text _size="s" as="span" className="toolbar-value">
                    {theme === 'dark' ? 'Темная' : 'Ночная'}
                </Text>)}

                <Switch
                    _size="s"
                    toggled={theme === 'midnight'}
                    onToggle={toggleTheme}
                />
            </Flex>
        </Flex>
    );
}