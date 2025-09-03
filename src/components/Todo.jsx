import { useTodo } from '../context/TodoContext';
import { ACTIONS } from '../lib/utils/reducer';

const Todo = ({ todo }) => {
	const { dispatch } = useTodo();

	const toggleTodo = () => {
		dispatch({
			type: ACTIONS.UPDATE_TODO,
			payload: { id: todo.id, status: todo.status }
		});
	};

	return (
		<div className='mt-4 w-full max-w-4xl mx-auto border-b last:border-0 border-b-pink-500 px-2.5 py-2.5 flex items-center justify-between text-wrap'>
			<div className='flex items-center gap-2'>
				<form className='flex justify-center items-center max-w-3xl'>
					<input
						name='checkbox'
						type='checkbox'
						className='accent-pink-700 text-white w-4 h-4 cursor-pointer'
						checked={todo.status === 'completed' ? true : false}
						onChange={toggleTodo}
					/>
				</form>
				<p
					className={
						todo.status === 'completed'
							? 'line-through text-neutral-400'
							: 'no-underline'
					}>
					{todo.task}
				</p>
			</div>

			<button
				onClick={() =>
					dispatch({
						type: ACTIONS.DELETE_TODO,
						payload: { id: todo.id }
					})
				}
				className='text-lg font-bold text-red-700 cursor-pointer hover:text-red-900'>
				X
			</button>
		</div>
	);
};

export default Todo;
