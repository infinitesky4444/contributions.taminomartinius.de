export interface Dict<T> {
  [key: string]: T;
}

export interface Counts {
  additions: number;
  deletions: number;
  changedFiles: number;
  commitCount: number;
}

export interface CommitSplit<T> {
  closed: T;
  open: T;
  sum: T;
}

export interface StatsData {
  total: CommitSplit<Counts>;
  languages: Dict<Counts>;
  weekDays: CommitSplit<Dict<WeekDayStats>>;
  dates: CommitSplit<Dict<Counts>>;
  repositories: Dict<RepositoryStats>;
}

export interface WeekDayStats extends Counts {
  hours: Dict<Counts>;
}

export interface RepositoryStats extends Counts {
  years: Dict<Counts>;
}

export interface DataPoint {
  title: string;
  value: number | string;
  color: string;
}

export interface Point {
  x: number | Date;
  y: number;
}

export interface Graph {
  title: string;
  values: Point[];
  color: string;
}
