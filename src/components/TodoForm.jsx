import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ text, setText, todos, setTodos }) => {
	const textItem = todos.map(item => item.task);

	const handleSubmit = e => {
		e.preventDefault();

		const newItems = {
			id: uuidv4(),
			task: text,
			status: true,
			remove: true,
		};

		if (text.trim().length > 1 && !textItem.includes(text.trim())) {
			setTodos([newItems, ...todos]);
			setText('');
		}
	};

	return (
		<form
			className="flex items-center justify-center absolute w-full h-60 "
			onSubmit={handleSubmit}
		>
			<input
				className="bg-primary_color py-1.5 px-3 lg:w-1/2 mx-10 text-text_color text-xl rounded-sm w-full"
				type="text"
				name="text"
				placeholder="Enter your todo"
				autoComplete="off"
				value={text}
				onChange={e => setText(e.target.value)}
			/>
		</form>
	);
};

export default Form;
