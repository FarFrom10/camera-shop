import { Link } from 'react-router-dom';
import styles from './not-found-page.module.css';
import Title from '../../title/title';
import { AppRoute } from '../../../const';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <Title pageName={AppRoute.NotFound}/>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>404: Not Found</h1>
        <Link
          className={styles.link}
          to={AppRoute.Index}
        >
          Go to Home page
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;
