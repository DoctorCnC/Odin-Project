import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

const cardData = [
  { id: 1, image: 'image1.jpg', matched: false },
  { id: 2, image: 'image2.jpg', matched: false },
  { id: 3, image: 'image3.jpg', matched: false },
  { id: 4, image: 'image4.jpg', matched: false },
  // Add more card data
];

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCount, setFlippedCount] = useState(0);
  const [matchedCount, setMatchedCount] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  useEffect(() => {
    // Shuffle the card data
    const shuffledCards = [...cardData.sort(() => Math.random() - 0.5)];
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (flippedCount === 2) {
      checkForMatch();
    }
  }, [flippedCount]);

  const handleCardClick = (card) => {
    if (isChecking || card.matched) return;

    if (!firstCard) {
      setFirstCard(card);
    } else if (!secondCard) {
      setSecondCard(card);
      setIsChecking(true);
      setFlippedCount(flippedCount + 2);
    }
  };

  const checkForMatch = () => {
    const match = firstCard.image === secondCard.image;
    if (match) {
      setMatchedCount(matchedCount + 2);
      setCards((prevCards) =>
        prevCards.map((c) =>
          c.id === firstCard.id || c.id === secondCard.id
            ? { ...c, matched: true }
            : c
        )
      );
    }

    setTimeout(() => {
      setIsChecking(false);
      setFirstCard(null);
      setSecondCard(null);
      setFlippedCount(0);
    }, 1000);
  };

  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <div className="card-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
      {matchedCount === cardData.length && (
        <p className="win-message">Congratulations, you won!</p>
      )}
    </div>
  );
}

export default App;
