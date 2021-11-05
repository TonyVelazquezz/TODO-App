import React from 'react';
import { IoMdTrash } from 'react-icons/io';
import { VscChromeClose } from 'react-icons/vsc';
import {
	RiCheckboxBlankLine,
	RiCheckboxFill,
	RiArrowGoBackFill,
} from 'react-icons/ri';

const TodoItem = ({
	id,
	task,
	status,
	remove,
	toggleView,
	deleteTodo,
	restoreTodo,
	changeStatusTodo,
	deleteTodoRecycleBin,
}) => {
	return (
		<>
			<li
				key={id}
				className="flex justify-between border-b border-secondary_color py-2"
			>
				<div className="flex gap-3">
					{remove && (
						<button onClick={() => changeStatusTodo(id)}>
							{status ? (
								<RiCheckboxBlankLine className="checkbox text-secondary_color text-xl" />
							) : (
								<RiCheckboxFill className="checkbox text-green_color text-xl" />
							)}
						</button>
					)}

					<p
						className={`break-words font-light text-text_color text-xl pl-2 ${
							!status && 'complete'
						}`}
					>
						{task}
					</p>
				</div>

				{!status && (
					<button onClick={() => deleteTodo(id)}>
						<IoMdTrash className="close__btn text-secondary_color text-2xl" />
					</button>
				)}

				{!remove && (
					<div className="flex gap-3">
						<button
							onClick={() => {
								restoreTodo(id);
								toggleView(1);
							}}
						>
							<RiArrowGoBackFill className="restore__btn text-secondary_color text-2xl" />
						</button>
						<button onClick={() => deleteTodoRecycleBin(id)}>
							<VscChromeClose className="close__btn text-secondary_color text-2xl" />
						</button>
					</div>
				)}
			</li>
		</>
	);
};

export default TodoItem;
