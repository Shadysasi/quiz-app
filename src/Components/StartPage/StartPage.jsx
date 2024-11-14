import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserName } from '../../Redux/quizSlice';

const UserInput = ({ startQuiz }) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleStartQuiz = () => {
    console.log(name)
    if (name) {
      dispatch(setUserName(name));
      startQuiz();
    }else{
      alert("Enter Your Name to Start Quiz")
    }
  };

  return (
    <div className="md:w-1/2 flex flex-col justify-center items-center bg-white p-4 rounded-lg shadow-lg">
      <h1 className='title text-2xl font-bold border border-4 border-indigo-500  p-4 mb-4'>Quiz Application</h1>
      <div className='text-center mb-4 p-6'>
        <ul className='list-disc text-left'>
            <li>You will be asked 5 questions one after another.</li>
            <li>10 points is awarded for the correct answer.</li>
            <li>Each question has four options. You can choose only one option.</li>
            <li>You have 10 sec time for each question to select the answer.</li>
            <li>The result will be declared at the end of the quiz.</li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold mb-4">Enter Your Name to Start Quiz</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="p-2 border rounded mb-4"
      />
      <div>
        <button
          onClick={handleStartQuiz}
          className="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-700"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default UserInput;
