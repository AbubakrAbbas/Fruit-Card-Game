# 🍓 Fruit Memory Card Game

A fun and interactive **memory matching game** built with React + Vite. Test your memory by flipping cards and finding matching fruit pairs!

![Game Preview](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 🎮 How to Play

1. Click any card to flip it over and reveal a fruit
2. Click a second card to find its match
3. If both cards show the **same fruit** — it's a match! ✅
4. If they don't match, both cards flip back — try to remember their positions!
5. Match all pairs to **win the game** 🏆

---

## ✨ Features

- 🃏 Randomized card shuffle on every new game
- 🔒 Cards disabled while checking for a match (prevents cheating!)
- 📊 Move counter to track your performance
- 🏅 Score tracking for matched pairs
- 🔄 New Game button to reset and reshuffle anytime

---

## 🛠️ Tech Stack

| Technology        | Purpose                                |
| ----------------- | -------------------------------------- |
| React 18          | UI & state management                  |
| Vite              | Lightning-fast dev server & build tool |
| CSS3              | Styling & card flip animations         |
| JavaScript (ES6+) | Game logic                             |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Card.jsx          # Individual card component with flip animation
│   └── GameHeader.jsx    # Score, moves & new game button
├── App.jsx               # Main game logic & state
├── index.css             # Global styles
└── main.jsx              # App entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AbubakrAbbas/Fruit-Card-Game.git

# 2. Navigate into the project
cd fruit-card-game

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🧠 Game Logic

- Cards are **shuffled randomly** at the start of each game using the Fisher-Yates algorithm
- Each fruit appears **twice** in the deck (as a pair)
- When two unmatched cards are flipped, they are **temporarily disabled** to prevent extra clicks during the comparison delay
- Matched pairs remain **face-up** for the rest of the game

---

## 🙌 Acknowledgements

- Fruit icons / images used in the card deck
- Inspired by the classic memory card game

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
