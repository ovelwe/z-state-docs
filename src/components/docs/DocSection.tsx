'use client';

import { Text, Title } from '@merely-ui/react';
import { CodeBlock } from '@/src/components/docs/CodeBlock';
import {DocSectionProps} from "@/types/docs";

export function DocSection({ section }: DocSectionProps) {
    return (
        <section id={section.id} className="doc-section">
            <Title as="h2" _size="xl" className="doc-section__title">
                {section.title}
            </Title>

            {section.description ? (
                <Text className="doc-section__text">{section.description}</Text>
            ) : null}

            {section.bullets ? (
                <ul className="list">
                    {section.bullets.map((item) => (
                        <li key={item}>
                            <Text as="span">{item}</Text>
                        </li>
                    ))}
                </ul>
            ) : null}

            {section.code ? <CodeBlock code={section.code} /> : null}
        </section>
    );
}