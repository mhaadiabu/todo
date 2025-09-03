/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from 'react';
import { reducer } from '../lib/utils';

const TodoContext = createContext([]);

const TodoProvider = ({ children }) => {
	const [todos, dispatch] = useReducer(reducer, [], () => {
		const savedTodos = localStorage.getItem('todos');
		if (!savedTodos) return [];
		try {
			const parsed = JSON.parse(savedTodos);
			return Array.isArray(parsed) ? parsed : [];
		} catch {
			return [];
		}
	});

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return <TodoContext value={{ todos, dispatch }}>{children}</TodoContext>;
};

export default TodoProvider;

export const useTodo = () => useContext(TodoContext);
