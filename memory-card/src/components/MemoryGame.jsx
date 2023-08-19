import React, { useState, useEffect } from 'react';
import MemoryCard from './MemoryCard';

const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const MemoryGame = () => {
    const initialCards = [
        { id: 1, value: 'A', isFlipped: false },
        { id: 2, value: 'A', isFlipped: false },
        { id: 3, value: 'B', isFlipped: false },
        { id: 4, value: 'B', isFlipped: false },
    ];

    const [cards, setCards] = useState(initialCards);
    const [flippedCards, setFlippedCards] = useState([]);

    const handleCardClick = (clickedCard) => {
        if (flippedCards.length < 2 && !clickedCard.isFlipped) {
            const updatedCards = cards.map(card =>
                card.id === clickedCard.id ? { ...card, isFlipped: true } : card
            );
            setCards(updatedCards);
            setFlippedCards([...flippedCards, clickedCard]);
        }
    };
