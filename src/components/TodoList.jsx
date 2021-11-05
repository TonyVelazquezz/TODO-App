import React from 'react';
import TodoItem from './TodoItem';
import TodoViews from './TodoViews';

const TodoList = ({
	todos,
	filter,
	allTodos,
	filterCompleteTodos,
	filterIncompleteTodos,
	filterDeleteTodos,
	recycleBin,
	deleteTodo,
	deleteAllTodos,
	restoreTodo,
	changeStatusTodo,
	deleteTodoRecycleBin,
	deleteAllTodoRecycleBin,
	toggle,
	toggleView,
}) => {
	return (
		<>
			{todos.length > 0 || recycleBin.length > 0 ? (
				<article className="flex flex-wrap todos-center justify-center absolute w-full mt-10 top-1/2">
					<ul className="lg:w-1/2 px-5 py-5 mx-4 mb-7 bg-primary_color rounded-sm w-full">
						<TodoViews
							allTodos={allTodos}
							filterCompleteTodos={filterCompleteTodos}
							filterIncompleteTodos={filterIncompleteTodos}
							filterDeleteTodos={filterDeleteTodos}
							toggle={toggle}
							toggleView={toggleView}
						/>

						{filter.map(({ id, task, status, remove }) => (
							<TodoItem
								key={id}
								id={id}
								task={task}
								status={status}
								recycleBin={recycleBin}
								remove={remove}
								toggleView={toggleView}
								deleteTodo={deleteTodo}
								restoreTodo={restoreTodo}
								changeStatusTodo={changeStatusTodo}
								deleteTodoRecycleBin={deleteTodoRecycleBin}
							/>
						))}
						<div className="flex todos-center justify-between">
							{filter.length > 0 && (
								<>
									<p className="px-2 pt-4 bg-primary_color rounded-sm text-text_color_blue text-xl">
										{filter.length > 1
											? `${filter.length} todos`
											: `${filter.length} todo`}
									</p>

									{todos.length > 0 && toggle === 1 ? (
										<button
											onClick={() => deleteAllTodos()}
											className="clear__list px-2 pt-4 text-secondary_color text-xl"
										>
											Clean complete
										</button>
									) : null}

									{todos.length > 0 && toggle === 4 ? (
										<button
											onClick={() => deleteAllTodoRecycleBin()}
											className="clear__list px-2 pt-4 text-secondary_color text-xl"
										>
											Delete all todos
										</button>
									) : null}
								</>
							)}
						</div>
					</ul>
				</article>
			) : null}
		</>
	);
};

export default TodoList;
