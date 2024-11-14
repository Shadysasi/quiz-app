import React from 'react';
import { useSelector } from 'react-redux';

const Results = ({ correctAnswers, totalQuestions, restartQuiz }) => {
  const highScore = useSelector((state) => state.quiz.highScore);
  const highScoreUser = useSelector((state) => state.quiz.highScoreUser);
  const feedback = correctAnswers / totalQuestions > 0.6 ? "Well done!" : "Try again";

  return (
    <div className="md:w-1/2 flex flex-col justify-center items-center bg-white md:p-8 p-4 rounded-lg shadow-lg gap-3">
      <h1 className='title text-2xl font-bold border border-4 border-indigo-500  p-4 mb-4'>Quiz Application</h1>
      <h2 className="text-xl font-bold mb-4">Quiz Completed</h2>
      <p className="text-lg">You got {correctAnswers} out of {totalQuestions} correct.</p>
      <p className="text-lg font-semibold my-4">{feedback}</p>
      <p className="text-lg text-green-500 mb-4">High Score: {highScore} by {highScoreUser}</p>
      <button
        className="bg-green-500 text-white p-2 rounded hover:bg-green-700 transition duration-200"
        onClick={restartQuiz}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Results;
