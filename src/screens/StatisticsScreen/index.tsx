import React from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import timeDataModule from '../../reducers/timeDataSlice';
import useCardFlipOnScroll from '../../hooks/useCardFlipOnScroll';
import Statistics from './Statistics';

const StatisticsScreen: React.FC = () => {
  const Last14days = useSelector(
    timeDataModule.selectors.selectLast14DaysScore
  );
  const Last30days = useSelector(
    timeDataModule.selectors.selectLast30DaysScore
  );
  const Last90days = useSelector(
    timeDataModule.selectors.selectLast90DaysScore
  );
  const insets = useSafeArea();

  const [onScrollEvent, animatedViewStyle] = useCardFlipOnScroll();

  const props = {
    Last14days,
    Last30days,
    Last90days,
    insets,
    onScrollEvent,
    animatedViewStyle,
  };

  return <Statistics {...props} />;
};

export default StatisticsScreen;
