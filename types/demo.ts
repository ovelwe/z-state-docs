export type CounterStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
};

export type SettingsState = {
    theme: 'light' | 'dark';
    language: 'ru' | 'en';
};

type Todo = {
    id: number;
    text: string;
    done: boolean;
};

export type TodoStore = {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
    clearCompleted: () => void;
};