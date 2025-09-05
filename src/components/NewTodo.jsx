import { useState } from 'react';
import { ACTIONS } from '../lib/utils/reducer';
import { useTodo } from '../context/TodoContext';
import { CancelIcon, PlusIcon } from './Icons';

const NewTodo = () => {
	const { dispatch } = useTodo();

	const [showInput, setShowInput] = useState(false);
	const [task, setTask] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (task.length < 1) return setError('Cannot create empty task.');

		dispatch({ type: ACTIONS.CREATE_TODO, payload: { task: task } });

		setTask('');
		setError('');
		setShowInput(false);
	};

	return (
		<div className='mt-6'>
			<form onSubmit={handleSubmit}>
				{showInput ? (
					<div className='flex flex-col justify-between'>
						<input
							name='todo-input'
							className='input h-16'
							placeholder='Add new note...'
							value={task}
							onChange={(e) => {
								setTask(e.target.value);
							}}
							autoComplete='off'
							autoFocus
							maxLength={160}
						/>
						<p className='text-sm font-semibold text-pink-800 mt-2 ml-4'>
							{error}
						</p>
						<div className='flex items-center justify-end gap-2 mt-4'>
							<button
								type='button'
								onClick={() => {
									setShowInput(false);
									setError('');
									setTask('');
								}}
								className='button bg-red-800 hover:bg-red-900 flex gap-1 items-center transition'>
								<CancelIcon className='w-6 h-6' /> Cancel
							</button>
							<button
								type='submit'
								className='button bg-pink-900 hover:bg-pink-900/45 flex gap-1 items-center text-white transition'>
								<PlusIcon className='w-6 h-6' /> Create Note
							</button>
						</div>
					</div>
				) : (
					<button
						onClick={() => setShowInput(true)}
						className='p-4 text-2xl font-black rounded-xl bg-pink-900/85 backdrop-blur-lg shadow-lg hover:bg-pink-900/65 text-white fixed bottom-12 right-4 sm:right-6 flex justify-center items-center cursor-pointer transition'>
						<PlusIcon className='w-7 h-7' />
					</button>
				)}
			</form>
		</div>
	);
};

export default NewTodo;
