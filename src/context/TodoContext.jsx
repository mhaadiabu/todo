/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from 'react';
import { reducer } from '../lib/utils';

const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
	const [todos, dispatch] = useReducer(reducer, [], () => {
		const savedTodos = localStorage.getItem('todos');
		if (!savedTodos) return;
		return JSON.parse(savedTodos);
	});

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return <TodoContext value={{ todos, dispatch }}>{children}</TodoContext>;
};

export default TodoProvider;

export const useTodo = () => useContext(TodoContext);
