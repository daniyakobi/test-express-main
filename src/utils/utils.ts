import { ICategory } from "../redux/types";

export const expandCategories = (category: ICategory) => {
  let expandedCategories: ICategory[] = [];

  expandedCategories.push(category);

  if (category.children) {
    category.children.forEach((childCategory) => {
      expandedCategories = expandedCategories.concat(expandCategories(childCategory));
    })
  }

  return expandedCategories;
}