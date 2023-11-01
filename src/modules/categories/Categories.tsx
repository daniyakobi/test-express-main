import { useSelector } from 'react-redux';
import { getCategories, getLoading } from '../../redux/selectors';
import { useFetchCategories } from './hooks/useFetchCategories';

import styles from './Categories.module.scss';
import { CategoriesList } from './components/CategoriesList/CategoriesList';

export const Categories = () => {
  const loading = useSelector(getLoading);
  const categories = useSelector(getCategories);

  useFetchCategories();

  return (
    <div className={styles.categories}>
      <h1 className={styles.categories__title}>Категории</h1>

      {!loading ? <CategoriesList categories={categories} /> : <div>Загрузка...</div>}
    </div>
  );
};
