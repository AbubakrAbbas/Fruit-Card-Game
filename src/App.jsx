import { useState, useEffect } from "react";
import "./index.css";
import { GameHeader } from "./components/GameHeader";
import { Card } from "./components/Card";

const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];

function App() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  const initializeGame = () => {
    const cardValuesCopy = [...cardValues];
    const shuffledArray = cardValuesCopy.sort(() => Math.random() - 0.5);
    const FinalCards = shuffledArray.map((value, index) => {
      return {
        id: index,
        value: value,
        isFlipped: false,
        isMatched: false,
      };
    });

    setCards(FinalCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setScore(0);
    setMoves(0);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (clickedCard) => {
    if (disabled || clickedCard.isFlipped || clickedCard.isMatched) return;

    setCards((prevCards) => {
      return prevCards.map((c) => {
        if (c.id === clickedCard.id) {
          return { ...c, isFlipped: true };
        } else {
          return c;
        }
      });
    });

    if (!choiceOne) {
      setChoiceOne(clickedCard);
    } else if (clickedCard.id !== choiceOne.id) {
      setChoiceTwo(clickedCard);
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      setMoves((prevMoves) => prevMoves + 1);

      if (choiceOne.value === choiceTwo.value) {
        setScore((prevScore) => prevScore + 1);
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.value === choiceOne.value) {
              return { ...card, isMatched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          setCards((prevCards) => {
            return prevCards.map((card) => {
              if (card.id === choiceOne.id || card.id === choiceTwo.id) {
                return { ...card, isFlipped: false };
              } else {
                return card;
              }
            });
          });
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  const isGameOver = cards.length > 0 && cards.every((card) => card.isMatched);

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} />

      {isGameOver ? (
        <div className="win-message">
          <h2>🎉 Congratulations!</h2>
          <p>You completed the grid in {moves} moves.</p>
          <button className="reset-btn" onClick={initializeGame}>
            Play Again
          </button>
        </div>
      ) : (
        <button className="reset-btn" onClick={initializeGame}>
          New Game
        </button>
      )}

      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
