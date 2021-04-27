export type Day = {
  date: string;
  score: number;
  scoreToday: number;
};

export type LastDays = {
  scores: number[];
  labels: string[];
  scoreToday: number | undefined;
};

export type TimeDataState = {
  days: Day[];
};
