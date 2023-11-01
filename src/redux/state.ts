import { ICategory } from "./types";

export interface IInitialState {
  loading: boolean;
  categories: ICategory[];
}

export const initialState: IInitialState = {
  loading: false,
  categories: [],
}