'use client';

import Link from 'next/link';
import {
    Button,
    Card,
    Flex,
    Grid,
    Tag,
    Text,
    Title,
} from '@merely-ui/react';
import { getDictionary } from '@/content/i18n';
import { useSiteLocale, useSiteTheme } from '@/store/siteStore';

export default function HomePage() {
    const locale = useSiteLocale();
    const theme = useSiteTheme();
    const dict = getDictionary(locale);

    return (
        <div className={`page theme-${theme}`}>
            <div className="container">
                <section className="hero">
                    <Flex gap="10px" flexWrap="wrap">
                        <Tag>@ovelwe/z-state</Tag>
                        <Tag variant="outline">React 16.8 - 19.0</Tag>
                        <Tag variant="outline">TypeScript</Tag>
                        <Tag variant="outline">Merely UI</Tag>
                    </Flex>

                    <Title as="h1" _size="3xl" className="hero__title">
                        {dict.home.title.split('\n').map((line) => (
                            <span key={line}>
                {line}
                                <br />
              </span>
                        ))}
                    </Title>

                    <Text _size="l" className="hero__subtitle">
                        {dict.home.subtitle}
                    </Text>

                    <Flex className="hero__actions" gap="12px" flexWrap="wrap">
                        <Link href="/docs" className="link-reset">
                            <div className="m-btn m-btn--solid">
                                <Button _size="m">{dict.home.docsButton}</Button>
                            </div>
                        </Link>

                        <a
                            href="https://www.npmjs.com/package/@ovelwe/z-state"
                            target="_blank"
                            rel="noreferrer"
                            className="link-reset"
                        >
                            <div className="m-btn m-btn--outline">
                                <Button _size="m" variant="outline">
                                    {dict.home.npmButton}
                                </Button>
                            </div>
                        </a>

                        <a
                            href="https://github.com/ovelwe/z-manager"
                            target="_blank"
                            rel="noreferrer"
                            className="link-reset"
                        >
                            <div className="m-btn m-btn--outline">
                                <Button _size="m" variant="clear">
                                    {dict.home.githubButton}
                                </Button>
                            </div>
                        </a>
                    </Flex>
                </section>

                <section className="section">
                    <Title as="h2" _size="xl">
                        {dict.home.whyTitle}
                    </Title>

                    <Text className="section__text">{dict.home.whyText}</Text>

                    <Grid className="features-grid">
                        {dict.features.map((feature) => (
                            <div key={feature} className="m-card">
                                <Card _size="m">
                                    <Text>{feature}</Text>
                                </Card>
                            </div>
                        ))}
                    </Grid>
                </section>

                <section className="section">
                    <Title as="h2" _size="xl">
                        {dict.compatibility.title}
                    </Title>

                    <Text className="section__text">
                        {dict.compatibility.text}
                    </Text>

                    <div className="code-block">
    <pre>
      <code>{`Supported versions:
- React 16.8+
- React 17
- React 18
- React 19`}</code>
    </pre>
                    </div>
                </section>

                <section className="section">
                    <Title as="h2" _size="xl">
                        {dict.home.installTitle}
                    </Title>

                    <div className="code-block">
            <pre>
              <code>npm install @ovelwe/z-state</code>
            </pre>
                    </div>
                </section>

                <section className="section">
                    <Title as="h2" _size="xl">
                        {dict.home.quickStartTitle}
                    </Title>

                    <div className="code-block">
            <pre>
              <code>{`import { createStore } from '@ovelwe/z-state';
const store = createStore({
  count: 0,
  text: 'hello',
});

store.setState((prev) => ({
  count: prev.count + 1,
}));`}
              </code>
            </pre>
                    </div>
                </section>
            </div>
        </div>
);
}