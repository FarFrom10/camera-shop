import { memo, MouseEvent, useCallback } from 'react';
import { useAppDispatch } from '../../../hooks';
import { changeCategory, resetUnavailableTypesForVideo } from '../../../store/filter-process/filter-process.slice';
import { isValueFilterCategory } from '../../../utils/type';
import { FilterCategory } from '../../../const';

function CatalogFilterCategoryTemplate(): JSX.Element {
  const dispatch = useAppDispatch();

  //Использовал click вместо change, так как появлялся баг при сбросе фильтров
  const handleCategoryClick = useCallback((evt: MouseEvent<HTMLInputElement>) => {
    //evt.target не работал с MouseEvent (отсутствует св-во value)
    const category = evt.currentTarget.value;

    if (category === String(FilterCategory.Videocamera)) {
      dispatch(resetUnavailableTypesForVideo());
    }

    if (isValueFilterCategory(category)){
      dispatch(changeCategory(category));
    }
  }, [dispatch]);

  return (
    <fieldset data-testid='catalogFilterCategory' className="catalog-filter__block">
      <legend className="title title--h5">Категория</legend>
      <div className="custom-radio catalog-filter__item">
        <label>
          <input
            onClick={handleCategoryClick}
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
            onClick={handleCategoryClick}
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

const CatalogFilterCategory = memo(CatalogFilterCategoryTemplate);

export default CatalogFilterCategory;
