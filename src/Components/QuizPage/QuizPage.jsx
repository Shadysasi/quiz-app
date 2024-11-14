import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Question from '../Questions/Questions';
import Results from '../Result/Result';
import UserInput from '../StartPage/StartPage';
import { answerQuestion, restartQuiz } from '../../Redux/quizSlice';


const Quiz = () => {
  const dispatch = useDispatch();
  const {
    currentQuestionIndex,
    correctAnswers,
    showResults,
    questions,
    timeLeft,
  } = useSelector((state) => state.quiz);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerClick = (answerIndex) => {
    dispatch(answerQuestion({ questionIndex: currentQuestionIndex, answerIndex }));
  };

  if (!quizStarted) {
    return <UserInput startQuiz={() => setQuizStarted(true)} />;
  }

  if (showResults) {
    return (
      <Results
        correctAnswers={correctAnswers}
        totalQuestions={questions.length}
        restartQuiz={() => {
          dispatch(restartQuiz());
          setQuizStarted(false);
        }}
      />
    );
  }

  return (
    <div className="md:w-1/2 bg-white p-4 mb-4 rounded-lg shadow-lg">
      <Question
        question={questions[currentQuestionIndex].question}
        answers={questions[currentQuestionIndex].answers}
        handleAnswerClick={handleAnswerClick}
        timeLeft={timeLeft}
        currentQuestionIndex={currentQuestionIndex}
      />
    </div>
  );
};

export default Quiz;
