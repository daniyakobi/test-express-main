import { useNavigate } from 'react-router-dom';
import styles from './Back.module.scss';

export const Back = () => {
  const navigate = useNavigate();

  return <button className={styles.back} onClick={() => navigate(-1)}>Назад</button>
}