import React from 'react';
import { View } from 'react-native';
import AppText from '../../../components/AppText';
import { LastDays } from '../../../reducers/timeDataSlice/types';
import styles from './styles';

type Props = {
  timeData: LastDays;
  lastScore: LastDays['scoreToday'];
};

const Description: React.FC<Props> = ({ timeData, lastScore }) => (
  <View style={styles.root}>
    <AppText
      style={styles.desc}>{`Your overall score is ${lastScore}`}</AppText>
    <AppText style={styles.desc}>
      {`Your today's score is ${timeData.scoreToday}`}
    </AppText>
  </View>
);

export default Description;
