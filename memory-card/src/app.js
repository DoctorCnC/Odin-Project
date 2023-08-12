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

            import { useState, useEffect } from 'react';
import { createConnection, sendMessage } from './chat.js';
import { showNotification } from './notifications.js';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId, theme }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', () => {
      showNotification('Connected!', theme);
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, theme]);

  return <h1>Welcome to the {roomId} room!</h1>
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <hr />
      <ChatRoom
        roomId={roomId}
        theme={isDark ? 'dark' : 'light'} 
      />
    </>
  );
}

