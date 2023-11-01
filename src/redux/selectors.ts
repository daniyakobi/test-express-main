import { expandCategories } from "../utils/utils";
import { IInitialState } from "./state";

export const APP_STORE_KEY = 'appKey';

export const getLoading = (state: IInitialState) => {
  return state.loading;
}

export const getCategories = (state: IInitialState) => {
  return state.categories;
}

export const getCategoryBySlug = (state: IInitialState, slug: string | undefined) => {
  const expandedCategories = state.categories
    .map((category) => expandCategories(category))
    .flatMap((item) => item);

  const categoryBySlug = slug ? expandedCategories.find((item) => item.slug === slug) : undefined;

  return categoryBySlug;
}