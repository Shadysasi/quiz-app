import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuestionIndex: 0,
  correctAnswers: 0,
  showResults: false,
  userName: '',
  highScore: localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore'), 10) : 0,
  highScoreUser: localStorage.getItem('highScoreUser') || '',
  timeLeft: 10,
  questions: shuffle([
    {
      question: "What is the capital of France?",
      answers: ["Paris", "Berlin", "Madrid", "Rome"],
      correct: 0,
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 1,
    },
    {
      question: "What is the largest mammal in the world?",
      answers: ["Elephant", "Blue Whale", "Giraffe", "Orca"],
      correct: 1,
    },
    {
      question: "What is the boiling point of water?",
      answers: ["90°C", "100°C", "110°C", "120°C"],
      correct: 1,
    },
    {
      question: "What is the speed of light?",
      answers: ["300,000 km/s", "150,000 km/s", "200,000 km/s", "250,000 km/s"],
      correct: 0,
    },
  ])
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
      
    },
    answerQuestion: (state, action) => {
      const { questionIndex, answerIndex } = action.payload;
      if (answerIndex === state.questions[questionIndex].correct) {
        state.correctAnswers += 1;
      }
      if (questionIndex + 1 < state.questions.length) {
        state.currentQuestionIndex += 1;
        state.timeLeft = 10; // Reset timer for the next question
      } else {
        state.showResults = true;
        if (state.correctAnswers >= state.highScore) {
          state.highScore = state.correctAnswers;
          state.highScoreUser = state.userName;
          console.log(state.highScoreUser)
          
          localStorage.setItem('highScore', state.highScore);
          localStorage.setItem('highScoreUser', state.highScoreUser);
        }
      }
    },
    restartQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.correctAnswers = 0;
      state.showResults = false;
      state.timeLeft = 10;
      state.questions = shuffle(state.questions);
    },
    decrementTimer: (state) => {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
      }
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 < state.questions.length) {
        state.currentQuestionIndex += 1;
        state.timeLeft = 10;
      } else {
        state.showResults = true;
        if (state.correctAnswers > state.highScore) {
          state.highScore = state.correctAnswers;
          state.highScoreUser = state.userName;
          localStorage.setItem('highScore', state.highScore);
          localStorage.setItem('highScoreUser', state.highScoreUser);
        }
      }
    },
  },
});

export const { setUserName, answerQuestion, restartQuiz, decrementTimer, nextQuestion } = quizSlice.actions;
export default quizSlice.reducer;
