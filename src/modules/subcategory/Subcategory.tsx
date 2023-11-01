import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getCategoryBySlug } from '../../redux/selectors';
import { IInitialState } from '../../redux/state';
import { Back } from '../../shared-components/Back/Back';

import styles from './Subcategory.module.scss';
import { CategoriesList } from '../categories/components/CategoriesList/CategoriesList';

export const Subcategory = () => {
  const { slag } = useParams();

  const subcategory = useSelector((state: IInitialState) => getCategoryBySlug(state, slag));

  if (!subcategory) {
    return <h1>Категория не найдена!</h1>
  }

  return <div className={styles.subcategory}>
    <Helmet>
      <meta name="robots" content={subcategory.index ? 'index' : 'noindex'} />
    </Helmet>

    <h1 className={styles.subcategory__title}>{subcategory.name}</h1>
    <Back />

    <CategoriesList categories={subcategory.children} />
  </div>
}