import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { CameraData } from '../../types/cameras';
import styles from './search-list-item.module.css';

type SearchListItemProps = {
  camera: CameraData;
  onInputReset: () => void;
}

function SearchListItem({camera, onInputReset}: SearchListItemProps): JSX.Element {
  const {name, id} = camera;
  const path = generatePath(AppRoute.Product, {id:String(id)});

  return(
    <li className="form-search__select-item" tabIndex={0}>
      <Link className={styles.cameraLink} onClick={onInputReset} to={path}>{name}</Link>
    </li>
  );
}

export default SearchListItem;
