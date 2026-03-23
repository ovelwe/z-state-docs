import type {DocSectionItem} from "@/content/i18n";

export type CodeBlockProps = Readonly<{
    code: string;
}>;

export type DocArticleProps = Readonly<{
    sections: DocSectionItem[];
}>;

export type DocSectionProps = Readonly<{
    section: DocSectionItem;
}>;

export type SidebarNavProps = Readonly<{
    items: DocSectionItem[];
    menuTitle: string;
}>;
