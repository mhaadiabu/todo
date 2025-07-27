import { ACTIONS } from '../lib/utils/reducer';

const Todo = ({ dispatch, todo }) => {
	const toggleTodo = () => {
		dispatch({
			type: ACTIONS.UPDATE_TODO,
			payload: { id: todo.id, task: todo.task, completed: todo.completed }
		});
	};

	return (
		<div className='mt-4 w-full max-w-3xl mx-auto border-b border-b-purple-500 px-2.5 py-2.5 flex items-center justify-between'>
			<div className='flex items-center gap-2'>
				<form className='flex justify-center items-center'>
					<input
						name='checkbox'
						type='checkbox'
						className='bg-purple-700 text-white w-5 h-5 rounded-sm p-1'
						defaultChecked={todo.completed}
						onChange={toggleTodo}
					/>
				</form>
				<p>{todo.task}</p>
			</div>

			<button
				onClick={() =>
					dispatch({
						type: ACTIONS.DELETE_TODO,
						payload: { id: todo.id, task: todo.task, completed: todo.completed }
					})
				}
				className='text-lg font-bold text-red-700 cursor-pointer hover:text-red-900'>
				X
			</button>
		</div>
	);
};

export default Todo;
