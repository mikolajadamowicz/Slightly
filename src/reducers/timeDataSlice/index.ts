import timeDataSlice from './slice';
import selectors from './selectors';

const { actions, reducer } = timeDataSlice;

export default {
  reducer,
  actions,
  selectors,
};
