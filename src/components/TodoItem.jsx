import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2/';
import { IoMdTrash } from 'react-icons/io';
import { VscChromeClose } from 'react-icons/vsc';
import {
	RiCheckboxBlankLine,
	RiCheckboxFill,
	RiArrowGoBackFill,
} from 'react-icons/ri';

const TodoItem = ({
	items,
	setItems,
	id,
	task,
	status,
	setRecycleBin,
	recycleBin,
	remove,
	toggleView,
}) => {
	//Events
	const taskDelete = () => {
		const todo = items.filter(item => item.id === id);

		const newTodo = {
			id: uuidv4(),
			task: todo[0].task,
			status: true,
			remove: false,
		};

		setRecycleBin([newTodo, ...recycleBin]);

		setItems(items.filter(item => item.id !== id));
	};

	const taskRestore = () => {
		const restore = recycleBin.filter(item => item.id === id);

		const restoreTodo = {
			id: uuidv4(),
			task: restore[0].task,
			status: true,
			remove: true,
		};

		setItems([restoreTodo, ...items]);

		setRecycleBin(recycleBin.filter(item => item.id !== id));
	};

	const taskComplete = () => {
		setItems(
			items.map(item =>
				item.id === id ? { ...item, status: !item.status } : item
			)
		);
	};

	const taskRecycleBinDelete = () => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then(result => {
			if (result.isConfirmed) {
				Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
				setRecycleBin(recycleBin.filter(bin => bin.id !== id));
				toggleView(1);
			}
		});
	};

	return (
		<>
			<li
				key={id}
				className="flex justify-between border-b border-secondary_color py-2"
			>
				<div className="flex gap-3">
					{remove && (
						<button onClick={() => taskComplete()}>
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
					<button onClick={() => taskDelete()}>
						<IoMdTrash className="close__btn text-secondary_color text-2xl" />
					</button>
				)}

				{!remove && (
					<div className="flex gap-3">
						<button
							onClick={() => {
								taskRestore();
								toggleView(1);
							}}
						>
							<RiArrowGoBackFill className="restore__btn text-secondary_color text-2xl" />
						</button>
						<button onClick={() => taskRecycleBinDelete()}>
							<VscChromeClose className="close__btn text-secondary_color text-2xl" />
						</button>
					</div>
				)}
			</li>
		</>
	);
};

export default TodoItem;
