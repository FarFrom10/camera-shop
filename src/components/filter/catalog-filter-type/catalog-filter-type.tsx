import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectFilterCameraType, selectFilterCategory } from '../../../store/filter-process/filter-process.selectors';
import { FilterCategory, FilterItemType, TranslatedFilterItemType } from '../../../const';
import CatalogFilterItem from '../../catalog-filter-item/catalog-filter-item';
import { changeCameraType } from '../../../store/filter-process/filter-process.slice';

function CatalogFilterType(): JSX.Element {
  const dispatch = useAppDispatch();
  const filterType = useAppSelector(selectFilterCameraType);
  const filterCategory = useAppSelector(selectFilterCategory);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const type = evt.target.dataset.type;
    const status = evt.target.checked;

    if (type) {
      dispatch(changeCameraType({...filterType, [type]: status}));
    }
  };

  const typeInputs = Object.values(FilterItemType).map((type) =>
    (
      <CatalogFilterItem
        key={type}
        onInputChange={handleInputChange}
        dataType={type}
        name={TranslatedFilterItemType[type]}
        isVideo={filterCategory === FilterCategory.Videocamera}
        isChecked={filterType[type] === true}
      />
    ));

  return (
    <fieldset data-testid='catalogFilterType' className="catalog-filter__block">
      <legend className="title title--h5">Тип камеры</legend>
      {typeInputs}
    </fieldset>
  );
}

export default CatalogFilterType;
