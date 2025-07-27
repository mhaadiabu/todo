import { useReducer } from 'react';

import Todo from './components/Todo';
import SearchTodo from './components/SearchTodo';
import NewTodo from './components/NewTodo';

import { reducer } from './lib/utils';

const App = () => {
	const [todos, dispatch] = useReducer(reducer, []);

	return (
		<main className='w-full min-h-screen flex flex-col justify-center items-center bg-neutral-50 px-4 sm:px-6'>
			<div className='max-w-4xl w-full flex flex-1 flex-col justify-start mx-auto'>
				<h1 className='text-3xl font-bold text-center my-6'>ToDo List</h1>
				<SearchTodo />
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						dispatch={dispatch}
						todo={todo}
					/>
				))}
				<NewTodo dispatch={dispatch} />
			</div>
		</main>
	);
};

export default App;
