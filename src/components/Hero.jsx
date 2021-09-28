import React, { useState, useEffect } from 'react';
import hero from '../assets/img/hero.jpg';
import Form from './Form';
import TodoList from './TodoList';

const Hero = ({ getLocalStorage, getLocalStorageRB }) => {
	const [items, setItems] = useState(() => getLocalStorage());
	const [text, setText] = useState('');
	const [filter, setFilter] = useState(getLocalStorage());
	const [recycleBin, setRecycleBin] = useState(getLocalStorageRB());

	useEffect(() => {
		filterCompleteTasks(); /* eslint-disable-next-line react-hooks/exhaustive-deps*/
		filterIncompleteTasks(); /* eslint-disable-next-line react-hooks/exhaustive-deps*/
		filterDeleteTasks(); /* eslint-disable-next-line react-hooks/exhaustive-deps*/
		allTodos(); /* eslint-disable-next-line react-hooks/exhaustive-deps*/
	}, [items, recycleBin]);

	//FILTERS
	const allTodos = () => {
		setFilter(items);
	};

	const filterCompleteTasks = () => {
		setFilter(items.filter(item => item.status === false));
	};

	const filterIncompleteTasks = () => {
		setFilter(items.filter(item => item.status === true));
	};

	const filterDeleteTasks = () => {
		setFilter(recycleBin);
	};

	//UseEffectLocalStorage
	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(items));
		localStorage.setItem('recycleBin', JSON.stringify(recycleBin));
	}, [items, recycleBin]);

	return (
		<>
			<section className="w-full relative top-0">
				<h1 className="mx-10 lg:mx-5 mt-10 lg:mt-24 lg:left-14 text-text_color text-3xl absolute font-bold tracking-widest">
					TODO App
				</h1>

				<Form text={text} setText={setText} items={items} setItems={setItems} />

				<TodoList
					items={items}
					setItems={setItems}
					filter={filter}
					setFilter={setFilter}
					allTodos={allTodos}
					filterCompleteTasks={filterCompleteTasks}
					filterIncompleteTasks={filterIncompleteTasks}
					filterDeleteTasks={filterDeleteTasks}
					setRecycleBin={setRecycleBin}
					recycleBin={recycleBin}
				/>

				<img className="w-full object-cover h-60" src={hero} alt="hero-cover" />
			</section>
		</>
	);
};

export default Hero;
