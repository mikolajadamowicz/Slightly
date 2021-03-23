import React from 'react';
import { View } from 'react-native';
import AppText from '../../../components/AppText';
import styles from './styles';
import ScaleIcon from '../../../components/ScaleIcon';

type Props = {
  score: number;
  appendScore: () => void;
  subtractScore: () => void;
};

const Buttons: React.FC<Props> = ({ score, appendScore, subtractScore }) => (
  <View style={styles.buttons}>
    <ScaleIcon onPress={subtractScore} name="minus" />
    <AppText style={styles.score}>{score}</AppText>
    <ScaleIcon onPress={appendScore} name="plus" />
  </View>
);

export default Buttons;
