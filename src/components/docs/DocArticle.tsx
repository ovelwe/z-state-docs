'use client';

import { DocSection } from '@/src/components/docs/DocSection';
import {DocArticleProps} from "@/types/docs";

export function DocArticle({ sections }: DocArticleProps) {
    return (
        <article className="doc-article">
            {sections.map((section) => (
                <DocSection key={section.id} section={section} />
            ))}
        </article>
    );
}