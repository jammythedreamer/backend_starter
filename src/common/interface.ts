import * as types from './types';

export type TValues<T> = T[keyof T];
export type TR<T> = [T | null, Error];
export type TPR<T> = Promise<TR<T>>;

export interface IExample {
  id: number;
  memo: string;
}
