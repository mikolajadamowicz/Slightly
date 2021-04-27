import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import timeDataModule from '../../../reducers/timeDataSlice';
import Buttons from './Buttons';
import { useScore } from './hooks';

const MainScreen: React.FC = () => {
  const dispatch = useDispatch();

  const setScore = useCallback(
    (score: number) =>
      dispatch(
        timeDataModule.actions.setGlobalScore({
          score,
          today: new Date().toISOString(),
        })
      ),
    [dispatch]
  );

  const { score, appendScore, subtractScore } = useScore(setScore);

  const props = {
    score,
    appendScore,
    subtractScore,
  };

  return <Buttons {...props} />;
};

export default MainScreen;
