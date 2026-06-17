export const Card = ({ card, onClick }) => {
  // A card looks open if it's currently selected OR if it's already matched
  const isOpen = card.isFlipped || card.isMatched;

  return (
    <div
      /* CSS reads these classes to flip the card or paint it green */
      className={`card ${isOpen ? "flipped" : ""} ${card.isMatched ? "matched" : ""}`}
      onClick={() => onClick(card)}
    >
      <div className="card-front">?</div>
      <div className="card-back">{card.value}</div>
    </div>
  );
};
