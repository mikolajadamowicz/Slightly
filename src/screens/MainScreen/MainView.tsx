import React from 'react';
import FadeInOut from 'react-native-fade-in-out';
import { ScrollView } from 'react-native';
import Chart from '../../components/LineChart';
import { LastDays } from '../../reducers/timeDataSlice';
import styles from './styles';
import Headline from '../../components/Headline';
import Description from './Description';
import Buttons from './Buttons';

type Props = {
  timeData: LastDays;
  isFocused: boolean;
};

const MainView: React.FC<Props> = ({ timeData, isFocused }) => (
  <FadeInOut isVisible={isFocused} duration={500}>
    <ScrollView style={styles.root} contentContainerStyle={styles.scrollView}>
      <Headline style={styles.header}>Last 7 days</Headline>
      <Chart dataset={timeData.scores} labels={timeData.labels} />
      <Description />
      <Buttons />
    </ScrollView>
  </FadeInOut>
);

export default MainView;
