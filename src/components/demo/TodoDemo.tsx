'use client';

import { useMemo, useState } from 'react';
import {
    Button,
    Card,
    Flex,
    Input,
    Text,
    Title,
} from '@merely-ui/react';
import { create } from '@ovelwe/z-state';
import {useSiteLocale} from "@/store/siteStore";
import {TodoStore} from "@/types/demo";

const useTodoStore = create<TodoStore>((set, get) => ({
    todos: [],

    addTodo: (text) => {
        const trimmed = text.trim();

        if (!trimmed) {
            return;
        }

        set((prev) => ({
            todos: [
                ...prev.todos,
                {
                    id: Date.now(),
                    text: trimmed,
                    done: false,
                },
            ],
        }));
    },

    toggleTodo: (id) => {
        const nextTodos = get().todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        );

        set({ todos: nextTodos });
    },

    removeTodo: (id) => {
        set((prev) => ({
            todos: prev.todos.filter((todo) => todo.id !== id),
        }));
    },

    clearCompleted: () => {
        set((prev) => ({
            todos: prev.todos.filter((todo) => !todo.done),
        }));
    },
}));

export function TodoDemo() {
    const todos = useTodoStore((state) => state.todos);
    const addTodo = useTodoStore((state) => state.addTodo);
    const toggleTodo = useTodoStore((state) => state.toggleTodo);
    const removeTodo = useTodoStore((state) => state.removeTodo);
    const clearCompleted = useTodoStore((state) => state.clearCompleted);
    const locale = useSiteLocale();

    const [value, setValue] = useState('');

    const completedCount = useMemo(
        () => todos.filter((todo) => todo.done).length,
        [todos]
    );

    const handleAdd = () => {
        addTodo(value);
        setValue('');
    };

    return (
        <div className="m-card">
            <Card _size="m" className="demo-box">
                <Title as="h3" _size="m">
                    {locale === 'en' ? 'Todo demo' : 'Пример Todo'}
                </Title>

                <Text>{locale === 'en' ? 'Example of create(...)' : 'Пример create(...)'}</Text>

                <Flex gap="10px">
                    <div className="m-input m-input--grow">
                        <Input
                            value={value}
                            placeholder={locale === 'en' ? 'Add todo' : 'Добавить задачу'}
                            _size="m"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setValue(event.target.value);
                            }}
                        />
                    </div>

                    <div className="m-btn m-btn--solid">
                        <Button _size="m" onClick={handleAdd}>
                            {locale === 'en' ? 'Add' : 'Добавить'}
                        </Button>
                    </div>
                </Flex>

                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li key={todo.id} className="todo-item">
                            <div className="todo-left">
                                <input
                                    type="checkbox"
                                    checked={todo.done}
                                    onChange={() => {
                                        toggleTodo(todo.id);
                                    }}
                                />
                                <span
                                    style={
                                    {
                                        textDecoration: todo.done ? 'line-through' : 'none',
                                        color: todo.done ? 'gray' : 'white',
                                    }}
                                >
                  {todo.text}
                </span>
                            </div>

                            <div className={'m-btn m-btn--solid'}>
                                <Button
                                    _size="s"
                                    variant="clear"
                                    onClick={() => {
                                        removeTodo(todo.id);
                                    }}
                                >
                                    {locale === 'en' ? 'Remove' : 'Удалить'}
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>

                <Flex justifyContent="space-between" alignItems="center" gap="12px" flexWrap="wrap">
                    <Text>{locale === 'en' ? 'Completed' : 'Выполнено'}: {completedCount}</Text>

                    <div className={completedCount ? 'm-btn m-btn--outline' : 'm-btn m-btn--ghost'}>
                        <Button _size="s" variant="outline" onClick={clearCompleted} disabled={!completedCount}>
                            {locale === 'en' ? 'Clear completed' : 'Очистить выполненные'}
                        </Button>
                    </div>
                </Flex>
            </Card>
        </div>
    );
}