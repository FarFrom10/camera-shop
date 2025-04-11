import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectFilterCameraType } from '../../../store/filter-process/filter-process.selectors';
import { FilterItemType, TranslatedFilterItemType } from '../../../const';
import CatalogFilterItem from '../../catalog-filter-item/catalog-filter-item';
import { changeCameraType } from '../../../store/filter-process/filter-process.slice';

function CatalogFilterType(): JSX.Element {
  const dispatch = useAppDispatch();
  const filterType = useAppSelector(selectFilterCameraType);

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
      />
    ));

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Тип камеры</legend>
      {typeInputs}
    </fieldset>
  );
}

export default CatalogFilterType;
