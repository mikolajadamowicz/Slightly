import moment from 'moment';

const initialState = {
  days: [
    {
      date: moment().subtract(1, 'days').toISOString(),
      score: 0,
      scoreToday: 0,
    },
    {
      date: moment().toISOString(),
      score: 0,
      scoreToday: 0,
    },
  ],
};

export { initialState };
