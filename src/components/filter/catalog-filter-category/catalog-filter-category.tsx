import { ChangeEvent, memo, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changeCategory, resetUnavailableTypesForVideo } from '../../../store/filter-process/filter-process.slice';
import { isValueFilterCategory } from '../../../utils/type';
import { FilterCategory } from '../../../const';
import { selectFilterCategory } from '../../../store/filter-process/filter-process.selectors';

function CatalogFilterCategoryTemplate(): JSX.Element {
  const dispatch = useAppDispatch();
  const filterCategory = useAppSelector(selectFilterCategory);

  const handleCategoryChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    const category = String(evt.target.value);

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
            onChange={handleCategoryChange}
            type="radio"
            name="category"
            defaultValue={FilterCategory.Photocamera}
            checked={String(filterCategory) === FilterCategory.Photocamera}
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
            defaultValue={FilterCategory.Videocamera}
            checked={String(filterCategory) === FilterCategory.Videocamera}
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
