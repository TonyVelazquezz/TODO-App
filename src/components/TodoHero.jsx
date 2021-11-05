import React, { useState, useEffect } from 'react';
import hero from '../assets/img/hero.jpg';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2/';

const Hero = ({ getLocalStorage, getLocalStorageRB }) => {
	const [todos, setTodos] = useState(() => getLocalStorage());
	const [text, setText] = useState('');
	const [filter, setFilter] = useState(getLocalStorage());
	const [recycleBin, setRecycleBin] = useState(getLocalStorageRB());

	//FILTERS
	const allTodos = () => {
		setFilter(todos);
	};

	const filterCompleteTodos = () => {
		setFilter(todos.filter(item => item.status === false));
	};

	const filterIncompleteTodos = () => {
		setFilter(todos.filter(item => item.status === true));
	};

	const filterDeleteTodos = () => {
		setFilter(recycleBin);
	};

	useEffect(() => {
		const allTodos = () => {
			setFilter(todos);
		};

		const filterCompleteTodos = () => {
			setFilter(todos.filter(item => item.status === false));
		};

		const filterIncompleteTodos = () => {
			setFilter(todos.filter(item => item.status === true));
		};

		const filterDeleteTodos = () => {
			setFilter(recycleBin);
		};

		filterCompleteTodos();
		filterIncompleteTodos();
		filterDeleteTodos();
		allTodos();
	}, [todos, recycleBin]);

	//ACTIONS
	const deleteTodo = id => {
		const todo = todos.find(item => item.id === id);

		const newTodo = {
			id: uuidv4(),
			task: todo.task,
			remove: false,
			status: true,
		};

		setRecycleBin([newTodo, ...recycleBin]);
		setTodos(todos.filter(item => item.id !== id));
	};

	const deleteAllTodos = () => {
		const completeTodos = todos.filter(item => item.status === false);
		const newTodos = completeTodos.map(item =>
			item.remove === true
				? { ...item, remove: !item.remove, status: !item.status }
				: item
		);

		setRecycleBin([...newTodos, ...recycleBin]);
		setTodos(todos.filter(item => item.status === true));
	};

	const restoreTodo = id => {
		const restore = recycleBin.filter(item => item.id === id);

		const restoreTodo = {
			id: uuidv4(),
			task: restore[0].task,
			status: true,
			remove: true,
		};

		setTodos([restoreTodo, ...todos]);
		setRecycleBin(recycleBin.filter(item => item.id !== id));
	};

	const changeStatusTodo = id => {
		setTodos(
			todos.map(item =>
				item.id === id ? { ...item, status: !item.status } : item
			)
		);
	};

	//RecycleBin
	const deleteTodoRecycleBin = id => {
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

	const deleteAllTodoRecycleBin = () => {
		Swal.fire({
			title: 'Are you sure to delete all todos?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then(result => {
			if (result.isConfirmed) {
				Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
				setRecycleBin([]);
				toggleView(1);
			}
		});
	};

	//ToggleView
	const [toggle, setToggle] = useState(1);

	const toggleView = index => {
		setToggle(index);
	};

	//saveLocalStorage
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
		localStorage.setItem('recycleBin', JSON.stringify(recycleBin));
	}, [todos, recycleBin]);

	return (
		<>
			<section className="w-full relative top-0">
				<h1 className="absolute text-shadow font-bold lg:mx-5 mt-10 lg:left-1/4 mx-10 text-text_color text-3xl tracking-widest">
					TODO App
				</h1>

				<TodoForm text={text} setText={setText} todos={todos} setTodos={setTodos} />

				<TodoList
					todos={todos}
					filter={filter}
					allTodos={allTodos}
					filterCompleteTodos={filterCompleteTodos}
					filterIncompleteTodos={filterIncompleteTodos}
					filterDeleteTodos={filterDeleteTodos}
					recycleBin={recycleBin}
					deleteTodo={deleteTodo}
					deleteAllTodos={deleteAllTodos}
					restoreTodo={restoreTodo}
					changeStatusTodo={changeStatusTodo}
					deleteTodoRecycleBin={deleteTodoRecycleBin}
					deleteAllTodoRecycleBin={deleteAllTodoRecycleBin}
					toggle={toggle}
					toggleView={toggleView}
				/>

				<img className="w-full object-cover h-60" src={hero} alt="hero-cover" />
			</section>
		</>
	);
};

export default Hero;
