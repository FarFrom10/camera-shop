import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../../hooks';
import { changeCategory } from '../../../store/filter-process/filter-process.slice';
import { isValueFilterCategory } from '../../../utils/type';

function CatalogFilterCategory(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCategoryChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;

    if (isValueFilterCategory(value)){
      dispatch(changeCategory(value));
    }
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Категория</legend>
      <div className="custom-radio catalog-filter__item">
        <label>
          <input
            onChange={handleCategoryChange}
            type="radio"
            name="category"
            defaultValue="photocamera"
          />
          <span className="custom-radio__icon" />
          <span className="custom-radio__label">Фотокамера</span>
        </label>
      </div>
      <div className="custom-radio catalog-filter__item">
        <label>
          <input
            onChange={handleCategoryChange}
            type="radio"
            name="category"
            defaultValue="videocamera"
          />
          <span className="custom-radio__icon" />
          <span className="custom-radio__label">Видеокамера</span>
        </label>
      </div>
    </fieldset>
  );
}

export default CatalogFilterCategory;
