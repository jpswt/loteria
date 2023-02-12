import { useState } from 'react';
import './App.css';
import Loteria from './Loteria';

function App() {
	const { currentCard, getRandom } = Loteria();

	return (
		<div className="App">
			<div>
				{currentCard ? (
					<>
						<img src={currentCard.src} />
						<h2>{currentCard.name}</h2>
					</>
				) : (
					'No card Drawn'
				)}
			</div>
			<button onClick={getRandom}>Click here</button>
		</div>
	);
}

export default App;
