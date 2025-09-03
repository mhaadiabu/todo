import { useMemo, useState } from 'react';

import Todo from './components/Todo';
import NewTodo from './components/NewTodo';

import { useTodo } from './context/TodoContext';
import { CancelIcon, SearchIcon } from './components/Icons';

const App = () => {
	const [search, setSearch] = useState('');

	const { todos } = useTodo();

	const filteredTodos = useMemo(() => {
		if (!Array.isArray(todos)) return [];

		return todos.filter((todo) => {
			return todo.task.toLowerCase().includes(search.toLowerCase());
		});
	}, [todos, search]);

	return (
		<main className='w-full min-h-screen flex flex-col justify-center items-center bg-neutral-50 px-4 sm:px-6'>
			<div className='max-w-4xl w-full flex flex-1 flex-col justify-start mx-auto'>
				<h1 className='text-3xl font-bold text-center my-6 capitalize'>
					ToDo List
				</h1>
				<div className='input flex items-center mx-0'>
					<SearchIcon className='w-6 h-6' />
					<input
						name='search-input'
						type='text'
						placeholder='Search note...'
						className='h-full w-full outline-none border-none focus:border-2 ml-4'
						autoComplete='off'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button
						onClick={() => setSearch('')}
						className={`justify-end items-center cursor-pointer ${
							search.length > 0 ? 'flex' : 'hidden'
						}`}>
						<CancelIcon className='w-6 h-6' />
					</button>
				</div>
				{filteredTodos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
					/>
				))}
				<NewTodo />
			</div>
		</main>
	);
};

export default App;
