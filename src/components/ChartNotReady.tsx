import React, { useMemo } from 'react';
import { StyleSheet, View, ViewProps, Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';
import AppText from './AppText';

const ChartNotReady: React.FC<ViewProps> = ({ style, ...props }) => {
  const rootStyle = useMemo(() => [styles.root, style], [style]);

  return (
    <View {...props} style={rootStyle}>
      <AppText style={styles.text}>Chart not ready yet</AppText>
    </View>
  );
};

export default ChartNotReady;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    borderRadius: 16,
    height: 330,
    width: Dimensions.get('window').width - scale(30),
  },
  text: { color: '#FFFFFF', fontSize: 20 },
});
