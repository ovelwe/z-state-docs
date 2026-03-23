'use client';

import { Button, Card, Flex, Text, Title } from '@merely-ui/react';
import { createPersistStore, useStoreSelector } from '@ovelwe/z-state';
import {useSiteLocale} from "@/store/siteStore";
import {SettingsState} from "@/types/demo";

const settingsStore = createPersistStore<
    SettingsState,
    Pick<SettingsState, 'theme'>
>(
    {
        theme: 'light',
        language: 'ru',
    },
    {
        key: 'z-state-demo-persist',
        partialize: (state) => ({
            theme: state.theme,
        }),
    }
);

function PersistDemo() {
    const theme = useStoreSelector(settingsStore, (state) => state.theme);
    const language = useStoreSelector(settingsStore, (state) => state.language);

    const toggleTheme = () => {
        settingsStore.setState((prev) => ({
            theme: prev.theme === 'light' ? 'dark' : 'light',
        }));
    };

    const toggleLanguage = () => {
        settingsStore.setState((prev) => ({
            language: prev.language === 'ru' ? 'en' : 'ru',
        }));
    };

    const locale = useSiteLocale();


    return (
        <div className="m-card">
            <Card _size="m" className="demo-box">
                <Title as="h3" _size="m">
                    {locale === 'en' ? 'Persist Demo' : 'Пример Persist'}
                </Title>

                <Text>{locale === 'en' ? 'Theme' : 'Тема'}: {theme.toLocaleUpperCase()}</Text>
                <Text>{locale === 'en' ? 'Language' : 'Язык'}: {language.toLocaleUpperCase()}</Text>
                <Text _size="s" className="demo-muted">
                    {locale === 'en' ? 'Theme persists after page reload. Language does not.' : 'Тема сохраняется после перезагрузки страницы. Язык - нет.'}
                </Text>

                <Flex gap="12px" flexWrap="wrap">
                    <div className="m-btn m-btn--solid">
                        <Button _size="s" onClick={toggleTheme}>
                            {locale === 'en' ? 'Toggle theme' : 'Сменить тему'}
                        </Button>
                    </div>

                    <div className="m-btn m-btn--outline">
                        <Button _size="s" variant="outline" onClick={toggleLanguage}>
                            {locale === 'en' ? 'Toggle language' : 'Сменить язык'}
                        </Button>
                    </div>
                </Flex>
            </Card>
        </div>
    );
}

export default PersistDemo