import { Link } from 'react-router-dom';
import styles from './not-found-page.module.css';
import Title from '../../components/title/title';
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <main>
      <div className="page-content">
        <Title pageName={AppRoute.NotFound}/>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>404: Страница не найдена</h1>
          <Link
            className={styles.link}
            to={AppRoute.Index}
          >
          Перейти на главную страницу
          </Link>
        </div>
      </div>
    </main>

  );
}

export default NotFoundPage;
