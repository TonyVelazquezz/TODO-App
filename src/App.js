import TodoHero from './components/TodoHero';

const getLocalStorage = () => {
	const todos = localStorage.getItem('todos');
	if (todos) {
		return JSON.parse(localStorage.getItem('todos'));
	} else {
		return [];
	}
};

const getLocalStorageRB = () => {
	const recycleBin = localStorage.getItem('recycleBin');
	if (recycleBin) {
		return JSON.parse(localStorage.getItem('recycleBin'));
	} else {
		return [];
	}
};

const App = () => {
	return (
		<>
			<main className="h-screen">
				<TodoHero
					getLocalStorage={getLocalStorage}
					getLocalStorageRB={getLocalStorageRB}
				/>
			</main>
		</>
	);
};

export default App;
