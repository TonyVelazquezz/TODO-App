import Hero from './components/Hero';

const getLocalStorage = () => {
	const items = localStorage.getItem('items');
	if (items) {
		return JSON.parse(localStorage.getItem('items'));
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
			<main className="h-screen bg-dark_background">
				<Hero
					getLocalStorage={getLocalStorage}
					getLocalStorageRB={getLocalStorageRB}
				/>
			</main>
		</>
	);
};

export default App;
