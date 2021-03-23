import React from 'react';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { selectLast7DaysScore } from '../../reducers/timeDataSlice';
import MainView from './MainView';

const MainScreen: React.FC = () => {
  const isFocused = useIsFocused();
  const timeData = useSelector(selectLast7DaysScore);

  const props = {
    timeData,
    isFocused,
  };

  return <MainView {...props} />;
};

export default MainScreen;
