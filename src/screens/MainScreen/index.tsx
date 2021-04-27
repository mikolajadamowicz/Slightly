import React from 'react';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import timeDataModule from '../../reducers/timeDataSlice';
import MainView from './MainView';

const MainScreen: React.FC = () => {
  const isFocused = useIsFocused();
  const timeData = useSelector(timeDataModule.selectors.selectLast7DaysScore);

  const props = {
    timeData,
    isFocused,
  };

  return <MainView {...props} />;
};

export default MainScreen;
