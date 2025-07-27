export const ACTIONS = {
	CREATE_TODO: 'create-todo',
	UPDATE_TODO: 'update-todo',
	DELETE_TODO: 'delete-todo'
};

const newTodo = (task) => {
	return { id: Date.now(), task: task, complete: false };
};

const reducer = (todos, action) => {
	switch (action.type) {
		case ACTIONS.CREATE_TODO:
			return [...todos, newTodo(action.payload.task)];
		case ACTIONS.UPDATE_TODO:
			return todos.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, complete: !todo.complete };
				}
			});
		case ACTIONS.DELETE_TODO:
			return todos.filter((todo) => todo.id !== action.payload.id);
		default:
			return todos;
	}
};

export default reducer;
