import { useState } from 'react';
import { ACTIONS } from '../lib/utils/reducer';

const NewTodo = ({ dispatch }) => {
	const [showInput, setShowInput] = useState(false);

	const [task, setTask] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch({ type: ACTIONS.CREATE_TODO, payload: { task: task } });

		setTask('');
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
						/>
						<div className='flex items-center justify-end gap-2 mt-2'>
							<button
								type='button'
								onClick={() => setShowInput(false)}
								className='button bg-red-700 hover:bg-red-900'>
								Cancel
							</button>
							<button
								type='submit'
								className='button bg-purple-700 hover:bg-purple-900'>
								Create Note
							</button>
						</div>
					</div>
				) : (
					<button
						onClick={() => setShowInput(true)}
						className='w-14 h-14 text-2xl font-black rounded-full bg-purple-700 hover:bg-purple-900 text-white absolute bottom-12 right-4 sm:right-6 flex justify-center items-center cursor-pointer'>
						+
					</button>
				)}
			</form>
		</div>
	);
};

export default NewTodo;
