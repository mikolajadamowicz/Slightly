import React from 'react';
import { useSelector } from 'react-redux';
import timeDataModule from '../../../reducers/timeDataSlice';
import { last } from 'lodash';
import Description from './Description';

const MainScreen: React.FC = () => {
  const timeData = useSelector(timeDataModule.selectors.selectLast7DaysScore);
  const lastScore = last(timeData?.scores);

  const props = {
    timeData,
    lastScore,
  };

  return <Description {...props} />;
};

export default MainScreen;
