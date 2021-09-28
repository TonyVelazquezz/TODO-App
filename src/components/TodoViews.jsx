import React from 'react';

const TodoViews = ({
	allTodos,
	filterCompleteTasks,
	filterIncompleteTasks,
	filterDeleteTasks,
	toggle,
	toggleView,
}) => {
	return (
		<div className="flex flex-wrap lg:justify-between text-secondary_color text-xl">
			<button
				onClick={() => {
					allTodos();
					toggleView(1);
				}}
				className={`font-semibold pb-4 w-1/2 sm:w-1/4 ${
					toggle === 1 ? 'active' : ''
				}`}
			>
				All
			</button>

			<button
				onClick={() => {
					filterCompleteTasks();
					toggleView(2);
				}}
				className={`font-semibold pb-4 w-1/2 sm:w-1/4 ${
					toggle === 2 ? 'active' : ''
				}`}
			>
				Complete
			</button>

			<button
				onClick={() => {
					filterIncompleteTasks();
					toggleView(3);
				}}
				className={`font-semibold pb-4 w-1/2 sm:w-1/4 ${
					toggle === 3 ? 'active' : ''
				}`}
			>
				Incomplete
			</button>

			<button
				onClick={() => {
					filterDeleteTasks();
					toggleView(4);
				}}
				className={`font-semibold pb-4 w-1/2 sm:w-1/4 ${
					toggle === 4 ? 'active' : ''
				}`}
			>
				Recycle Bin
			</button>
		</div>
	);
};

export default TodoViews;
