import React from 'react';
import useTimer from '../../hooks/useTimer';
import { MdOutlineTimer } from "react-icons/md";


const Question = ({ question, answers, handleAnswerClick,timeLeft,currentQuestionIndex }) => {
  useTimer(timeLeft);
  return (
    <div>
      <div className="flex justify-between items-center  mb-4">    
        <h2 className="grow text-xl font-semibold">Question {currentQuestionIndex + 1}/5</h2>
        <div className="flex text-white text-lg font-semibold bg-indigo-500 px-2">
          <MdOutlineTimer size={24}/>
          <p>: {timeLeft}s</p>
        </div>
        <span ></span>    
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className="text-xl font-bold mb-4">{question}</h2>
        <div className="space-y-2">
          {answers.map((answer, index) => (
            <button
              key={index}
              className="w-full bg-blue-500 text-white p-2 rounded "
              onClick={() => handleAnswerClick(index)}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Question;
