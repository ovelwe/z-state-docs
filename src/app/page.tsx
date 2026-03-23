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
import { CodeBlock } from '@ovelwe/z-md';

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
                        <Tag variant="outline">@ovelwe/z-md</Tag>
                        <Tag variant="outline">Merely UI</Tag>
                        <Tag variant="outline">React 16.8 - 19.0</Tag>
                        <Tag variant="outline">TypeScript</Tag>
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
                        <CodeBlock
                            code={`Supported versions:\n- React 16.8+\n- React 17\n- React 18\n- React 19`}
                            language="text"
                        />
                    </div>
                </section>

                <section className="section">
                    <Title as="h2" _size="xl">
                        {dict.home.installTitle}
                    </Title>

                    <div className="code-block">
                        <CodeBlock
                            code="npm install @ovelwe/z-state"
                            language="bash"
                        />
                    </div>
                </section>

                <section className="section">
                    <Title as="h2" _size="xl">
                        {dict.home.quickStartTitle}
                    </Title>

                    <div className="code-block">
                        <CodeBlock
                            code={`import { createStore } from '@ovelwe/z-state';\n\nconst store = createStore({\n  count: 0,\n  text: 'hello',\n});\n\nstore.setState((prev) => ({\n  count: prev.count + 1,\n}));`}
                            language="ts"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}