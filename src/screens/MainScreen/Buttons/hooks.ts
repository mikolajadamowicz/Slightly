import { useEffect, useRef, useState } from 'react';

type Score = {
  score: number;
  appendScore: () => void;
  subtractScore: () => void;
};

type useScore = (callback: any) => Score;

const useScore: useScore = (callback) => {
  const [score, setScore] = useState(0);
  const scoreSet = useRef(false);

  const appendScore = () => setScore(score + 1);

  const subtractScore = () => setScore(score - 1);

  useEffect(() => {
    const delayedCallback = () => {
      callback(score);
      setScore(0);
      scoreSet.current = false;
    };

    const id = setTimeout(delayedCallback, 350);

    return () => clearTimeout(id);
  }, [callback, score]);

  return { score, appendScore, subtractScore };
};

export { useScore };
