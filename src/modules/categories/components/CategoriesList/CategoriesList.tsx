import { Link } from 'react-router-dom';
import { ICategory } from '../../../../redux/types';

import styles from './CategoriesList.module.scss';

export const CategoriesList = ({ categories }: { categories: ICategory[] }) => {
  return <div className={styles.categoriesList}>
    {categories && categories.map((category) => <Link to={`/${category.slug}`}>{category.name}</Link>)}

    {!categories && <div>Категорий нет</div>}
  </div>;
}