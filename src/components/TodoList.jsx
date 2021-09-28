import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoViews from './TodoViews';

const TodoList = ({
	items,
	setItems,
	filter,
	allTodos,
	filterCompleteTasks,
	filterIncompleteTasks,
	filterDeleteTasks,
	setRecycleBin,
	recycleBin,
}) => {
	const [toggle, setToggle] = useState(1);

	const toggleView = index => {
		setToggle(index);
	};

	return (
		<>
			{items.length > 0 && (
				<article className="flex flex-wrap items-center justify-center absolute w-full mt-10 top-1/2">
					<ul className="lg:w-1/2 px-5 py-5 mx-4 mb-7 bg-primary_color rounded-sm w-full">
						<TodoViews
							allTodos={allTodos}
							filterCompleteTasks={filterCompleteTasks}
							filterIncompleteTasks={filterIncompleteTasks}
							filterDeleteTasks={filterDeleteTasks}
							toggle={toggle}
							toggleView={toggleView}
						/>

						{filter.map(({ id, task, status, remove }) => (
							<TodoItem
								items={items}
								setItems={setItems}
								key={id}
								id={id}
								task={task}
								status={status}
								recycleBin={recycleBin}
								setRecycleBin={setRecycleBin}
								remove={remove}
								toggleView={toggleView}
							/>
						))}
						<div className="flex items-center justify-between">
							{filter.length > 0 && (
								<>
									<p className="px-2 pt-2 bg-primary_color rounded-sm text-text_color_blue text-xl">
										{filter.length > 1
											? `${filter.length} tasks`
											: `${filter.length} task`}
									</p>

									<button
										onClick={() => setItems([])}
										className="clear__list px-2 pt-5 text-secondary_color text-xl"
									>
										Clear all tasks
									</button>
								</>
							)}
						</div>
					</ul>
				</article>
			)}
		</>
	);
};

export default TodoList;
