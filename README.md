# Assembly Endgame

Assembly Endgame is an interactive, browser-based word-guessing game built with React and TypeScript. The objective of the game is to guess a randomly generated word within a limited number of attempts while racing against a countdown timer.

This project was created to practice core front-end development concepts such as state management, conditional rendering, event handling, and time-based logic using React hooks.

---

## Features

- Random word generation at the start of each game
- On-screen keyboard for selecting letters
- Limited number of incorrect guesses based on available programming languages
- Countdown timer that starts only after the player makes the first guess
- Real-time visual feedback for correct and incorrect guesses
- Dynamic win and loss states with contextual messages
- Confetti animation on winning the game
- Ability to reset and start a new game

---

## Gameplay Logic

- The timer begins when the player clicks their first letter.
- Each incorrect guess removes one programming language from the list.
- The game ends when:
  - All letters in the word are guessed correctly
  - The maximum number of incorrect guesses is reached
  - The timer reaches zero
- The interface updates dynamically based on user input and game state.

---

## Technologies Used

- React
- TypeScript
- JavaScript
- CSS
- Vite

---

## Project Structure

src/
├── apps/
│ └── endgame.tsx
├── languages.ts
├── farewell.ts
├── words.ts
├── styles.css

yaml
Copy code

---

## What I Learned

- Managing complex UI state using React hooks
- Implementing controlled side effects with `useEffect`
- Building interactive components with conditional rendering
- Handling time-based functionality in a React application
- Debugging and integrating third-party libraries in a TypeScript project

---

## Running the Project Locally

1. Install dependencies:
npm install

markdown
Copy code

2. Start the development server:
npm run dev

yaml
Copy code

3. Open the local URL provided in the terminal to play the game.

---

## Future Improvements

- Difficulty levels with adjustable timers
- Mobile responsiveness enhancements
- Persistent score tracking
- Physical keyboard input support