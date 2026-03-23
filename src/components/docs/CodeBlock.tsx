'use client';

import { Button, Text } from '@merely-ui/react';
import {useSiteLocale} from "@/store/siteStore";
import {CodeBlockProps} from "@/types/docs";

export function CodeBlock({ code }: CodeBlockProps) {

    const locale = useSiteLocale()

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
    };

    return (
        <div className="code-block">
            <div className="code-block__top">
                <Text _size="s" className="code-block__label">
                    {locale === 'en' ? 'Code example' : 'Пример кода'}
                </Text>

                <div className="m-btn m-btn--outline">
                    <Button _size="s" variant="outline" onClick={handleCopy}>
                        {locale === 'en' ? 'Copy' : 'Скопировать'}
                    </Button>
                </div>
            </div>

            <pre>
        <code>{code}</code>
      </pre>
        </div>
    );
}