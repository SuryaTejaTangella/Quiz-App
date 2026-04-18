# 🧠 React Quiz App

An interactive and dynamic quiz application built with **React** using the `useReducer` hook for complex state management. This project demonstrates handling asynchronous data, managing multiple UI states, and implementing real-time features like timers and scoring.

---
## Preview
<img width="800" height="508" alt="The-React-Quiz-gif" src="https://github.com/user-attachments/assets/bc7b21b4-9e8e-4572-9678-3f733e31412a" />




🔗 Live Demo (Vercel): https://quiz-app-nine-silk-14.vercel.app/
## 🚀 Features

* 📡 Fetches quiz questions from a hosted JSON API (via CDN)
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

data/
└── questions.json
```

---

## 🌐 API Setup (CDN-based)

This project uses a **static JSON file hosted on GitHub and served via jsDelivr CDN**, simulating a real API without requiring a backend.

### API Endpoint

```
https://cdn.jsdelivr.net/gh/SuryaTejaTangella/Quiz-App/data/questions.json
```

### Note

The JSON structure is:

```js
{
  questions: [ ... ]
}
```

So the application extracts data using:

```js
data.questions
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

3. Run the app

```bash
npm start
```

---

## 📌 Key Learning Outcomes

* Understanding when to use `useReducer` over `useState`
* Managing complex UI states efficiently
* Handling asynchronous data in React
* Working with hosted JSON as a mock API
* Building scalable component-based applications
* Implementing real-time features like timers

---

## 🚀 Future Improvements

* Persist highscore using localStorage
* Add category-based quizzes
* Add animations and transitions
* Improve UI/UX design
* Replace mock API with real backend

---

## 👨‍💻 Author

**Developed by Surya Teja T as part of my transition into software development, focusing on building production-ready React applications using advanced state management techniques like useReducer.**

---
