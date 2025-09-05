import { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import { ACTIONS } from '../lib/utils/reducer';
import { DeleteIcon } from './Icons';

const Todo = ({ todo, className }) => {
	const { dispatch } = useTodo();

	const [isEditing, setIsEditing] = useState(false);
	const [editedTodo, setEditedTodo] = useState(todo.task);

	const toggleTodo = () => {
		dispatch({
			type: ACTIONS.UPDATE_TODO,
			payload: { id: todo.id, status: todo.status }
		});
	};

	const editTodo = () => {
		dispatch({
			type: ACTIONS.EDIT_TODO,
			payload: { id: todo.id, task: editedTodo }
		});

		setIsEditing(false);
	};

	return (
		<div
			className={`${className} mt-4 w-full max-w-4xl mx-auto px-2.5 py-2.5 flex items-center`}>
			<div className='flex items-center gap-2 w-full justify-start'>
				{isEditing ? (
					<form
						onSubmit={editTodo}
						className='flex justify-center items-center w-full'>
						<input
							type='text'
							value={editedTodo}
							onChange={(e) => {
								e.preventDefault();
								setEditedTodo(e.target.value);
							}}
							onKeyDown={(e) => e.key === 'Enter' && editTodo}
							onBlur={editTodo}
							autoFocus
							className='rounded-xl px-2.5 py-1 border border-pink-600 focus:border-pink-700  outline-none mr-2 w-full text-wrap'
						/>
					</form>
				) : (
					<>
						<form className='flex justify-center items-center max-w-3xl'>
							<input
								name='checkbox'
								type='checkbox'
								className='accent-pink-700 text-white w-4 h-4 cursor-pointer'
								checked={todo.status === 'completed' ? true : false}
								onChange={toggleTodo}
							/>
						</form>
						<button onClick={toggleTodo}>
							<p
								className={`w-full text-wrap ${
									todo.status === 'completed'
										? 'line-through text-neutral-400'
										: 'no-underline'
								}`}>
								{todo.task}
							</p>
						</button>
					</>
				)}
			</div>

			<div className='flex items-center justify-end gap-2'>
				<button
					onClick={() => {
						setIsEditing(!isEditing);
					}}
					className='cursor-pointer'>
					{isEditing ? <span>❌</span> : <span>✏</span>}
				</button>

				{isEditing ? (
					<button
						onClick={editTodo}
						className='cursor-pointer'>
						✅
					</button>
				) : (
					<button
						onClick={() =>
							dispatch({
								type: ACTIONS.DELETE_TODO,
								payload: { id: todo.id }
							})
						}
						className='text-lg font-bold text-red-700 cursor-pointer hover:text-red-900'>
						{/* <DeleteIcon className='w-6 h-6' /> */}
						🗑
					</button>
				)}
			</div>
		</div>
	);
};

export default Todo;
