import React from 'react';
import { View, ScrollView } from 'react-native';
import Chart from '../../components/LineChart';
import AppText from '../../components/AppText';
import { LastDays } from '../../reducers/timeDataSlice';
import styles from './styles';
import ScaleIcon from '../../components/ScaleIcon';
import Headline from '../../components/Headline';

type Props = {
  timeData: LastDays;
  score: number;
  lastScore: LastDays['scoreToday'];
  appendScore: () => void;
  subtractScore: () => void;
};

const MainView: React.FC<Props> = ({
  timeData,
  score,
  appendScore,
  subtractScore,
  lastScore,
}) => (
  <ScrollView style={styles.root} contentContainerStyle={styles.scrollView}>
    <Headline style={styles.header}>Last 7 days</Headline>
    <Chart dataset={timeData.scores} labels={timeData.labels} />
    <View style={styles.header}>
      <AppText
        style={styles.desc}>{`Your overall score is ${lastScore}`}</AppText>
      <AppText style={styles.desc}>
        {`Your today's score is ${timeData.scoreToday}`}
      </AppText>
    </View>
    <View style={styles.buttons}>
      <ScaleIcon onPress={subtractScore} name="minus" />
      <AppText style={styles.score}>{score}</AppText>
      <ScaleIcon onPress={appendScore} name="plus" />
    </View>
  </ScrollView>
);

export default MainView;
