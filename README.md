# 🧠 React Quiz App

An interactive and dynamic quiz application built with **React** using the `useReducer` hook for complex state management. This project demonstrates handling asynchronous data, managing multiple UI states, and implementing real-time features like timers and scoring.

---

## 🚀 Features

* 📡 Fetches quiz questions from a mock API
* 🔄 Handles multiple app states:

  * Loading
  * Error
  * Ready
  * Active (Quiz in progress)
  * Finished
* ⏱️ Timer for each quiz session
* 🧮 Dynamic score calculation
* 🏆 High score tracking
* 🔁 Restart quiz functionality
* 📊 Progress tracking during quiz
* ❌ Error handling for failed API requests

---

## 🧠 Core Concepts Used

### 1. useReducer (State Management)

* Centralized state logic
* Predictable state transitions using actions
* Handles complex interdependent states

### 2. useEffect (Side Effects)

* Fetches data from API on component mount
* Prevents infinite re-renders using dependency array

### 3. Component-Based Architecture

* Modular and reusable components
* Clear separation of concerns

---

## 🧩 State Structure

```js
{
  questions: [],
  status: "loading", // loading | error | ready | active | finished
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null
}
```

---

## ⚙️ Actions Used

| Action Type  | Purpose                               |
| ------------ | ------------------------------------- |
| dataReceived | Store fetched questions               |
| dataFailed   | Handle API failure                    |
| start        | Start quiz                            |
| newAnswer    | Store selected answer & update points |
| nextQuestion | Move to next question                 |
| finish       | End quiz & update highscore           |
| restart      | Reset quiz                            |
| tick         | Countdown timer                       |

---

## 🔄 App Flow

```text
Load App → Fetch Questions → Ready Screen → Start Quiz
→ Answer Questions → Timer Running → Finish → Show Results
```

---

## 🧱 Project Structure

```
src/
│
├── components/
│   ├── Header.js
│   ├── Main.js
│   ├── Loader.js
│   ├── Error.js
│   ├── StartScreen.js
│   ├── Question.js
│   ├── NextButton.js
│   ├── Progress.js
│   ├── FinishScreen.js
│   ├── Footer.js
│   └── Timer.js
│
├── App.js
└── index.js
```

---

## 🛠️ Installation & Setup

1. Clone the repository

```bash
git clone <your-repo-url>
cd react-quiz-app
```

2. Install dependencies

```bash
npm install
```

3. Start mock API (json-server)

```bash
npx json-server --watch data/questions.json --port 8000
```

4. Run the app

```bash
npm start
```

---

## 🌐 API Endpoint

```
http://localhost:8000/questions
```

---

## 📌 Key Learning Outcomes

* Understanding when to use `useReducer` over `useState`
* Managing complex UI states efficiently
* Handling asynchronous data in React
* Building scalable component-based applications
* Implementing real-time features like timers

---

## 🚀 Future Improvements

* Persist highscore using localStorage
* Add category-based quizzes
* Add animations and transitions
* Improve UI/UX design
* Add backend integration

---

## 👨‍💻 Author

Developed by Surya Teja T as part of hands-on learning in React, focusing on advanced state management using useReducer and building scalable UI applications.
---
