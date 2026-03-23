'use client';

import { Button, Card, Flex, Text, Title } from '@merely-ui/react';
import { create } from '@ovelwe/z-state';
import {useSiteLocale} from "@/store/siteStore";
import {CounterStore} from "@/types/demo";

const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increment: () => set((prev) => ({ count: prev.count + 1 })),
    decrement: () => set((prev) => ({ count: prev.count - 1 })),
    reset: () => set({ count: 0 }),
}));

export function CounterDemo() {
    const count = useCounterStore((state) => state.count);
    const increment = useCounterStore((state) => state.increment);
    const decrement = useCounterStore((state) => state.decrement);
    const reset = useCounterStore((state) => state.reset);

    const locale = useSiteLocale()

    return (
        <div className="m-card">
            <Card _size="m" className="demo-box">
                <Title as="h3" _size="m">
                    {locale === 'en' ? 'Counter Demo' : 'Пример "Счётчик"'}
                </Title>

                <Text>{locale === 'en' ? 'Count' : 'Число'}: {count}</Text>

                <Flex gap="12px" flexWrap="wrap">
                    <div className="m-btn m-btn--outline">
                        <Button _size="s" variant="outline" onClick={decrement}>
                            -1
                        </Button>
                    </div>

                    <div className="m-btn m-btn--solid">
                        <Button _size="s" onClick={increment}>
                            +1
                        </Button>
                    </div>

                    <div className={count === 0 ? 'm-btn m-btn--ghost' : 'm-btn m-btn--solid'}>
                        <Button _size="s" variant="clear" onClick={reset} disabled={count === 0}>
                            {locale === 'en' ? 'Reset' : 'Сбросить'}
                        </Button>
                    </div>
                </Flex>
            </Card>
        </div>
    );
}