import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setGlobalScore,
  selectLast7DaysScore,
} from '../../reducers/timeDataSlice';
import { last } from 'lodash';
import MainView from './MainView';
import { useScore } from './hooks';

const MainScreen: React.FC = () => {
  const timeData = useSelector(selectLast7DaysScore);
  const lastScore = last(timeData?.scores);

  const dispatch = useDispatch();

  const setScore = useCallback(
    (score: number) =>
      dispatch(setGlobalScore({ score, today: new Date().toISOString() })),
    [dispatch]
  );

  const { score, appendScore, subtractScore } = useScore(setScore);

  const props = {
    timeData,
    score,
    lastScore,
    appendScore,
    subtractScore,
  };

  return <MainView {...props} />;
};

export default MainScreen;
