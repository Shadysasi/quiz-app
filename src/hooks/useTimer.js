import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { decrementTimer, nextQuestion } from '../Redux/quizSlice';

const useTimer = (timeLeft) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        dispatch(decrementTimer());
      }, 1000);
      return () => clearTimeout(timerId);
    } else {
      dispatch(nextQuestion());
    }
  }, [timeLeft, dispatch]);
};

export default useTimer;
