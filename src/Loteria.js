import { useState } from 'react';
import deck from './deck';

const Loteria = () => {
	const [startingDeck, setStartingDeck] = useState(deck);
	const [drawnCards, setDrawnCards] = useState([]);
	const [currentCard, setCurrentCard] = useState();

	const getRandom = () => {
		const newRandomCardIndex = Math.floor(Math.random() * startingDeck.length);
		console.log(newRandomCardIndex);
		const newRandomCard = startingDeck[newRandomCardIndex];
		console.log('My random', newRandomCard.name);
		setStartingDeck(deck.filter((card) => card.name !== newRandomCard.name));
		console.log(startingDeck);
		setDrawnCards([...drawnCards, newRandomCard]);
		console.log('My drawn', drawnCards);
		setCurrentCard(newRandomCard);
		console.log(currentCard);
	};

	return {
		getRandom,
		currentCard,
	};
};

export default Loteria;
