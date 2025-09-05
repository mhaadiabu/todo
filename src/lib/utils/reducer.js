export const ACTIONS = {
	CREATE_TODO: 'create-todo',
	UPDATE_TODO: 'update-todo',
	DELETE_TODO: 'delete-todo'
};

const newTodo = (task) => {
	const entry = {
		id: crypto.randomUUID(),
		task: task,
		status: 'not-completed',
		created: new Date().toISOString(),
		last_updated: new Date().toISOString()
	};

	return entry;
};

const reducer = (todos, action) => {
	switch (action.type) {
		case ACTIONS.CREATE_TODO:
			return [...todos, newTodo(action.payload.task)];
		case ACTIONS.UPDATE_TODO:
			return todos.map((todo) => {
				if (todo.id === action.payload.id) {
					return {
						...todo,
						status:
							todo.status === 'not-completed' ? 'completed' : 'not-completed',
						last_updated: new Date().toISOString()
					};
				}
				return todo;
			});
		case ACTIONS.EDIT_TODO:
			return todos.map((todo) => {
				if (todo.id === action.payload.id) {
					return {
						...todo,
						todo: action.payload.todo,
						last_updated: new Date().toISOString()
					};
				}
				return todo;
			});
		case ACTIONS.DELETE_TODO:
			return todos.filter((todo) => todo.id !== action.payload.id);
		default:
			return todos;
	}
};

export default reducer;
