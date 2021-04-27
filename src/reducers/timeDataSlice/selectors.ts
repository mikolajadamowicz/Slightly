import { last, takeRight } from 'lodash';
import { Day, LastDays, TimeDataState } from './types';

// Selectors
const selectAllDays = (state: TimeDataState): Day[] => state.days;

const selectLastDays = (state: TimeDataState, days = 0): LastDays => {
  const selected = takeRight(state.days, days);
  return {
    scores: selected.map((day: { score: number }) => day.score),
    labels: selected.map((day: { date: string }) =>
      new Date(day.date).toLocaleDateString('en-US', {
        weekday: 'short',
      })
    ),
    scoreToday: last(selected)?.scoreToday,
  };
};

const selectLast7DaysScore = (state: TimeDataState): LastDays =>
  selectLastDays(state, 7);

const selectLast14DaysScore = (state: TimeDataState): LastDays =>
  selectLastDays(state, 14);

const selectLast30DaysScore = (state: TimeDataState): LastDays =>
  selectLastDays(state, 30);

const selectLast90DaysScore = (state: TimeDataState): LastDays =>
  selectLastDays(state, 90);

export default {
  selectAllDays,
  selectLastDays,
  selectLast7DaysScore,
  selectLast14DaysScore,
  selectLast30DaysScore,
  selectLast90DaysScore,
};
