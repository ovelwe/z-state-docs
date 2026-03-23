import type { SiteLocale } from '@/types/store';

export type DocSectionItem = {
    id: string;
    title: string;
    description?: string;
    code?: string;
    bullets?: string[];
};

type Dictionary = {
    compatibility: {
        title: string;
    text: string;
    };
    nav: {
        home: string;
        docs: string;
        examples: string;
        npm: string;
        github: string;
    };
    home: {
        badge: string;
        title: string;
        subtitle: string;
        docsButton: string;
        npmButton: string;
        githubButton: string;
        whyTitle: string;
        whyText: string;
        installTitle: string;
        quickStartTitle: string;
        compatibilityTitle: string;
        compatibilityText: string;
    };
    docs: {
        title: string;
        subtitle: string;
        menuTitle: string;
    };
    examples: {
        title: string;
        subtitle: string;
    };
    footer: {
        text: string;
    };
    features: string[];
    docSections: DocSectionItem[];
};

export const dictionaries: Record<SiteLocale, Dictionary> = {
    ru: {
        nav: {
            home: 'Главная',
            docs: 'Документация',
            examples: 'Примеры',
            npm: 'npm',
            github: 'GitHub',
        },
        home: {
            badge: '@ovelwe/z-state',
            title: 'Лёгкий и понятный\nstate manager для React',
            subtitle:
                'State manager с middleware, computed values, persist, React hooks и поддержкой Redux DevTools. Работает как в современных, так и в legacy React-проектах.',
            docsButton: 'Читать документацию',
            npmButton: 'npm package',
            githubButton: 'GitHub',
            whyTitle: 'Почему z-state',
            whyText:
                'Простая архитектура, строгая типизация, удобная интеграция с React и полезные возможности из коробки.',
            installTitle: 'Установка',
            quickStartTitle: 'Быстрый старт',
            compatibilityTitle: 'Совместимость',
            compatibilityText:
                'z-state поддерживает React 16.8+, React 17, React 18 и React 19.',
        },
        docs: {
            title: 'Документация',
            subtitle: 'Полное руководство по использованию @ovelwe/z-state.',
            menuTitle: 'Разделы',
        },
        examples: {
            title: 'Примеры',
            subtitle: 'Интерактивные примеры использования @ovelwe/z-state.',
        },
        footer: {
            text: 'Документация для @ovelwe/z-state',
        },
        features: [
            'Простой внешний store',
            'Подписки на изменения состояния',
            'React hooks через useSyncExternalStore',
            'Селекторы с кастомной функцией сравнения',
            'API в стиле create(...) как у Zustand',
            'Middleware',
            'Persist в localStorage или другом storage',
            'Computed values',
            'Подключение к Redux DevTools',
            'TypeScript support',
            'Поддержка React 16.8+',
        ],
        compatibility: {
            title: 'React совместимость',
            text: 'z-state поддерживает React 16.8+, React 17, React 18 и React 19.'
        },
        docSections: [
            {
                id: 'installation',
                title: 'Установка',
                code: `npm install @ovelwe/z-state`,
            },
            {
                id: 'react-compatibility',
                title: 'Совместимость с React',
                description:
                    'z-state поддерживает как современные, так и старые версии React.',
                bullets: [
                    'Поддерживаются React 16.8+, React 17, React 18 и React 19',
                    'Минимальная версия React — 16.8, потому что библиотека использует hooks',
                    'Можно использовать библиотеку в legacy-проектах и современных приложениях',
                ],
            },
            {
                id: 'import',
                title: 'Импорт',
                code: `import {
  createStore,
  useStore,
  useStoreSelector,
  create,
  loggerMiddleware,
  createPersistStore,
  connectDevTools,
  computed,
} from '@ovelwe/z-state';`,
            },
            {
                id: 'quick-start',
                title: 'Быстрый старт',
                description:
                    'Создание хранилища, чтение, изменение и подписка на state.',
                code: `import { createStore } from '@ovelwe/z-state';

const store = createStore({
  count: 0,
  text: 'hello',
});

console.log(store.getState());
// { count: 0, text: 'hello' }

store.setState({ count: 1 });

store.setState((prev) => ({
  count: prev.count + 1,
}));

const unsubscribe = store.subscribe(() => {
  console.log('state changed:', store.getState());
});

unsubscribe();`,
            },
            {
                id: 'use-store',
                title: 'useStore',
                description: '`useStore(store)` подписывает компонент на весь store.',
                code: `import { createStore, useStore } from '@ovelwe/z-state';

const counterStore = createStore({
  count: 0,
});

export function App() {
  const state = useStore(counterStore);

  return (
    <div>
      <h2>{state.count}</h2>
      <button
        onClick={() =>
          counterStore.setState((prev) => ({ count: prev.count + 1 }))
        }
      >
        Добавить
      </button>
    </div>
  );
}`,
            },
            {
                id: 'use-store-selector',
                title: 'useStoreSelector',
                description:
                    'Если нужен только кусок состояния, используй селектор.',
                code: `import { createStore, useStoreSelector } from '@ovelwe/z-state';

const userStore = createStore({
  name: 'Danil',
  age: 20,
  city: 'Moscow',
});

export function App() {
  const name = useStoreSelector(userStore, (state) => state.name);

  return <div>{name}</div>;
}`,
            },
            {
                id: 'zustand-like',
                title: 'API как в Zustand',
                description:
                    'create(...) создаёт store-hook с дополнительными методами.',
                code: `import { create } from '@ovelwe/z-state';

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((prev) => ({ count: prev.count + 1 })),
  decrement: () => set((prev) => ({ count: prev.count - 1 })),
  reset: () => set({ count: 0 }),
}));`,
            },
            {
                id: 'middleware',
                title: 'Middleware',
                description: 'Поддержка middleware через options.middleware.',
                code: `import { createStore, loggerMiddleware } from '@ovelwe/z-state';

const store = createStore(
  { count: 0 },
  {
    middleware: [loggerMiddleware()],
  }
);

store.setState({ count: 1 });`,
            },
            {
                id: 'persist',
                title: 'Persist',
                description: 'Хранение состояния между перезагрузками страницы.',
                code: `import { createPersistStore } from '@ovelwe/z-state';

type SettingsState = {
  theme: 'light' | 'dark';
  language: 'ru' | 'en';
};

const settingsStore = createPersistStore(
  {
    theme: 'light',
    language: 'ru',
  } as SettingsState,
  {
    key: 'app-settings',
    partialize: (state: SettingsState) => ({
      theme: state.theme,
    }),
  }
);`,
            },
            {
                id: 'computed',
                title: 'Computed values',
                description: 'Вычисляемые значения на основе состояния store.',
                code: `import { createStore, computed } from '@ovelwe/z-state';

const userStore = createStore({
  firstName: 'Danil',
  lastName: 'Zobkov',
});

const fullName = computed(userStore, (state) => {
  return \`\${state.firstName} \${state.lastName}\`;
});

console.log(fullName());`,
            },
            {
                id: 'devtools',
                title: 'Redux DevTools',
                description: 'Подключение store к Redux DevTools Extension.',
                code: `import { createStore, connectDevTools } from '@ovelwe/z-state';

const store = createStore({
  count: 0,
});

const disconnect = connectDevTools(store, 'Counter Store');`,
            },
            {
                id: 'on-update',
                title: 'onUpdate',
                description: 'Колбэк после каждого обновления состояния.',
                code: `import { createStore } from '@ovelwe/z-state';

const store = createStore(
  { count: 0 },
  {
    onUpdate: (newState, prevState) => {
      console.log('prev state:', prevState);
      console.log('new state:', newState);
    },
  }
);`,
            },
            {
                id: 'destroy',
                title: 'destroy',
                description:
                    'Очищает подписчиков и сбрасывает состояние к начальному.',
                code: `store.destroy();`,
            },
            {
                id: 'react17-entry',
                title: 'React 17: точка входа приложения',
                description:
                    'Если ты используешь React 17, нужно использовать ReactDOM.render вместо createRoot.',
                code: `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);`,
            },
            {
                id: 'react17-example',
                title: 'Пример использования с React 17',
                description:
                    'z-state работает и со старыми версиями React, начиная с 16.8.',
                code: `import React from 'react';
import { create } from '@ovelwe/z-state';

type CounterStore = {
  count: number;
  increment: () => void;
};

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((prev) => ({ count: prev.count + 1 })),
}));

export function App() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  return (
    <div>
      <h1>React 17</h1>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`,
            },
            {
                id: 'legacy-notes',
                title: 'Ошибки и замечания для старых версий React',
                bullets: [
                    'Если ты видишь ошибку "Cannot find module react-dom/client", значит используется код под React 18+',
                    'Для React 17 нужно использовать ReactDOM.render(...)',
                    'Если появляется ошибка "useSyncExternalStore is not a function", значит используется старая сборка библиотеки или неактуальная версия пакета',
                ],
            },
        ],
    },

    en: {
        nav: {
            home: 'Home',
            docs: 'Docs',
            examples: 'Examples',
            npm: 'npm',
            github: 'GitHub',
        },
        compatibility: {
            title: 'React Compatibility',
            text: 'z-state supports React 16.8+, React 17, React 18, and React 19.'
        },
        home: {
            badge: '@ovelwe/z-state',
            title: 'Lightweight and clear\nstate manager for React',
            subtitle:
                'A state manager with middleware, computed values, persist, React hooks and Redux DevTools support. Works for both modern and legacy React applications.',
            docsButton: 'Read documentation',
            npmButton: 'npm package',
            githubButton: 'GitHub',
            whyTitle: 'Why z-state',
            whyText:
                'Simple architecture, strong typing, easy React integration and useful features out of the box.',
            installTitle: 'Installation',
            quickStartTitle: 'Quick start',
            compatibilityTitle: 'Compatibility',
            compatibilityText:
                'z-state supports React 16.8+, React 17, React 18 and React 19.',
        },
        docs: {
            title: 'Documentation',
            subtitle: 'Complete guide for using @ovelwe/z-state.',
            menuTitle: 'Sections',
        },
        examples: {
            title: 'Examples',
            subtitle: 'Interactive examples of @ovelwe/z-state usage.',
        },
        footer: {
            text: 'Documentation for @ovelwe/z-state',
        },
        features: [
            'Simple external store',
            'State change subscriptions',
            'React hooks powered by useSyncExternalStore',
            'Selectors with custom equality functions',
            'create(...) API similar to Zustand',
            'Middleware',
            'Persist in localStorage or any compatible storage',
            'Computed values',
            'Redux DevTools integration',
            'TypeScript support',
            'React 16.8+ support',
        ],
        docSections: [
            {
                id: 'installation',
                title: 'Installation',
                code: `npm install @ovelwe/z-state`,
            },
            {
                id: 'react-compatibility',
                title: 'React compatibility',
                description:
                    'z-state works with both modern and older React versions.',
                bullets: [
                    'Supports React 16.8+, React 17, React 18 and React 19',
                    'The minimum supported React version is 16.8 because the library uses hooks',
                    'You can use the library in both legacy and modern React projects',
                ],
            },
            {
                id: 'import',
                title: 'Import',
                code: `import {
  createStore,
  useStore,
  useStoreSelector,
  create,
  loggerMiddleware,
  createPersistStore,
  connectDevTools,
  computed,
} from '@ovelwe/z-state';`,
            },
            {
                id: 'quick-start',
                title: 'Quick start',
                description: 'Create a store, read state, update it and subscribe.',
                code: `import { createStore } from '@ovelwe/z-state';

const store = createStore({
  count: 0,
  text: 'hello',
});

console.log(store.getState());
// { count: 0, text: 'hello' }

store.setState({ count: 1 });

store.setState((prev) => ({
  count: prev.count + 1,
}));

const unsubscribe = store.subscribe(() => {
  console.log('state changed:', store.getState());
});

unsubscribe();`,
            },
            {
                id: 'use-store',
                title: 'useStore',
                description:
                    '`useStore(store)` subscribes a component to the whole store.',
                code: `import { createStore, useStore } from '@ovelwe/z-state';

const counterStore = createStore({
  count: 0,
});

export function App() {
  const state = useStore(counterStore);

  return (
    <div>
      <h2>{state.count}</h2>
      <button
        onClick={() =>
          counterStore.setState((prev) => ({ count: prev.count + 1 }))
        }
      >
        Increment
      </button>
    </div>
  );
}`,
            },
            {
                id: 'use-store-selector',
                title: 'useStoreSelector',
                description:
                    'Use a selector when you only need a part of the state.',
                code: `import { createStore, useStoreSelector } from '@ovelwe/z-state';

const userStore = createStore({
  name: 'Danil',
  age: 20,
  city: 'Moscow',
});

export function App() {
  const name = useStoreSelector(userStore, (state) => state.name);

  return <div>{name}</div>;
}`,
            },
            {
                id: 'zustand-like',
                title: 'Zustand-like API',
                description: 'create(...) returns a store hook with extra methods.',
                code: `import { create } from '@ovelwe/z-state';

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((prev) => ({ count: prev.count + 1 })),
  decrement: () => set((prev) => ({ count: prev.count - 1 })),
  reset: () => set({ count: 0 }),
}));`,
            },
            {
                id: 'middleware',
                title: 'Middleware',
                description: 'Middleware support via options.middleware.',
                code: `import { createStore, loggerMiddleware } from '@ovelwe/z-state';

const store = createStore(
  { count: 0 },
  {
    middleware: [loggerMiddleware()],
  }
);

store.setState({ count: 1 });`,
            },
            {
                id: 'persist',
                title: 'Persist',
                description: 'Persist state between page reloads.',
                code: `import { createPersistStore } from '@ovelwe/z-state';

type SettingsState = {
  theme: 'light' | 'dark';
  language: 'ru' | 'en';
};

const settingsStore = createPersistStore(
  {
    theme: 'light',
    language: 'ru',
  } as SettingsState,
  {
    key: 'app-settings',
    partialize: (state: SettingsState) => ({
      theme: state.theme,
    }),
  }
);`,
            },
            {
                id: 'computed',
                title: 'Computed values',
                description: 'Derived values based on store state.',
                code: `import { createStore, computed } from '@ovelwe/z-state';

const userStore = createStore({
  firstName: 'Danil',
  lastName: 'Zobkov',
});

const fullName = computed(userStore, (state) => {
  return \`\${state.firstName} \${state.lastName}\`;
});

console.log(fullName());`,
            },
            {
                id: 'devtools',
                title: 'Redux DevTools',
                description: 'Connect store to Redux DevTools Extension.',
                code: `import { createStore, connectDevTools } from '@ovelwe/z-state';

const store = createStore({
  count: 0,
});

const disconnect = connectDevTools(store, 'Counter Store');`,
            },
            {
                id: 'on-update',
                title: 'onUpdate',
                description: 'Callback fired after every state update.',
                code: `import { createStore } from '@ovelwe/z-state';

const store = createStore(
  { count: 0 },
  {
    onUpdate: (newState, prevState) => {
      console.log('prev state:', prevState);
      console.log('new state:', newState);
    },
  }
);`,
            },
            {
                id: 'destroy',
                title: 'destroy',
                description:
                    'Clears subscribers and resets state to the initial value.',
                code: `store.destroy();`,
            },
            {
                id: 'react17-entry',
                title: 'React 17 entry point',
                description:
                    'If you are using React 17, use ReactDOM.render instead of createRoot.',
                code: `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);`,
            },
            {
                id: 'react17-example',
                title: 'React 17 usage example',
                description:
                    'z-state works with older React versions starting from 16.8.',
                code: `import React from 'react';
import { create } from '@ovelwe/z-state';

type CounterStore = {
  count: number;
  increment: () => void;
};

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((prev) => ({ count: prev.count + 1 })),
}));

export function App() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  return (
    <div>
      <h1>React 17</h1>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`,
            },
            {
                id: 'legacy-notes',
                title: 'Notes for older React versions',
                bullets: [
                    'If you see "Cannot find module react-dom/client", you are using React 18+ code in an older app',
                    'For React 17 you must use ReactDOM.render(...)',
                    'If you see "useSyncExternalStore is not a function", the project is probably using an outdated build or package version',
                ],
            },
        ],
    },
};

export function getDictionary(locale: SiteLocale) {
    return dictionaries[locale];
}