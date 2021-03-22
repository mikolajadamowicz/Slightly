import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    paddingVertical: 20,
  },
  scrollView: { alignItems: 'center' },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginHorizontal: '10%',
    marginVertical: '20%',
  },
  score: {
    alignSelf: 'center',
    fontSize: 24,
  },
  desc: {
    alignSelf: 'center',
    margin: '2%',
  },
  header: {
    margin: '5%',
  },
});

export default styles;
