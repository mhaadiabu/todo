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
		<main className='w-full min-h-screen flex flex-col justify-center items-center bg-pink-50 text-pink-950 px-4 sm:px-6'>
			<div className='max-w-4xl w-full flex flex-1 flex-col justify-start mx-auto mt-10'>
				<div className='input flex items-center mx-0'>
					<SearchIcon className='text-pink-950/65' />
					<input
						name='search-input'
						type='text'
						placeholder='Search note...'
						className='h-full w-full outline-none border-none ml-4'
						autoComplete='off'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button
						onClick={() => setSearch('')}
						className={`justify-end items-center cursor-pointer ${
							search.length > 0 ? 'flex' : 'hidden'
						}`}>
						<CancelIcon className='text-pink-50/65' />
					</button>
				</div>
				{filteredTodos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						className='not-last:border-b not-last:border-b-pink-600'
					/>
				))}
				<NewTodo />
			</div>
		</main>
	);
};

export default App;
