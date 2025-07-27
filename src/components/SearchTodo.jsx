const SearchTodo = () => {
	return (
		<form onSubmit={() => {}}>
			<input
				name='search-input'
				type='text'
				className='input'
				placeholder='Search note...'
			/>
		</form>
	);
};

export default SearchTodo;
