'use client';

import { Grid, Text, Title } from '@merely-ui/react';
import { CounterDemo } from '@/src/components/demo/CounterDemo';
import PersistDemo from '@/src/components/demo/PersistDemo';
import { TodoDemo } from '@/src/components/demo/TodoDemo';
import { getDictionary } from '@/content/i18n';
import { useSiteLocale, useSiteTheme } from '@/store/siteStore';

export default function ExamplesPage() {
    const locale = useSiteLocale();
    const theme = useSiteTheme();
    const dict = getDictionary(locale);

    return (
        <div className={`page theme-${theme}`}>
            <div className="container">
                <section className="page-head">
                    <Title as="h1" _size="2xl">
                        {dict.examples.title}
                    </Title>
                    <Text className="section__text">{dict.examples.subtitle}</Text>
                </section>

                <section className="section">
                    <Grid className="examples-grid">
                        <CounterDemo />
                        <PersistDemo />
                        <TodoDemo />
                    </Grid>
                </section>
            </div>
        </div>
    );
}