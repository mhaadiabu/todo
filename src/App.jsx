import { useMemo, useState } from 'react';

import Todo from './components/Todo';
import NewTodo from './components/NewTodo';

import { useTodo } from './context/TodoContext';

const App = () => {
	const [search, setSearch] = useState('');

	const { todos } = useTodo();

	const filteredTodos = useMemo(() => {
		if (!Array.isArray(todos)) return 'Loading...';

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
				<div className='input flex mx-0'>
					<input
						name='search-input'
						type='text'
						placeholder='Search note...'
						className='h-full w-full outline-none border-none focus:border-2'
						autoComplete='off'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button
						onClick={() => setSearch('')}
						className={`justify-end items-center w-6 h-6 ${
							search.length > 0 ? 'flex' : 'hidden'
						}`}>
						X
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
