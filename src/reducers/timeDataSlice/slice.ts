import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './constants';
import { sameDay } from './utils';

const timeDataSlice = createSlice({
  name: 'timeData',
  initialState: initialState,
  reducers: {
    setGlobalScore: (state, action) => {
      const { today, score } = action.payload;
      const lastDay = state.days[state.days.length - 1];
      const updatedScore = lastDay.score + score;

      //TODO: update this later, this expression is here only so that it won't break my own app
      const updatedScoreToday = lastDay.scoreToday
        ? lastDay.scoreToday + score
        : score;

      if (sameDay(new Date(lastDay.date), new Date(today))) {
        lastDay.score = updatedScore;
        lastDay.scoreToday = updatedScoreToday;
      } else {
        state.days.push({
          date: new Date().toISOString(),
          score: updatedScore,
          scoreToday: score,
        });
      }
    },
  },
});

export default timeDataSlice;
