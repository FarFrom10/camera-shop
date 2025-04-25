import { ChangeEvent, memo, useCallback, useMemo } from 'react';
import { FilterItemLevel, TranslatedFilterItemLevel } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectFilterLevel } from '../../../store/filter-process/filter-process.selectors';
import { changeLevel } from '../../../store/filter-process/filter-process.slice';
import CatalogFilterItem from '../../catalog-filter-item/catalog-filter-item';

function CatalogFilterLevelTemplate(): JSX.Element {
  const dispatch = useAppDispatch();
  const filterlevel = useAppSelector(selectFilterLevel);

  const handleInputChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    const type = evt.target.dataset.type;
    const status = evt.target.checked;

    if (type) {
      dispatch(changeLevel({...filterlevel, [type]: status}));
    }
  }, [dispatch, filterlevel]);

  const levelInputs = useMemo(() => Object.values(FilterItemLevel).map((level) =>
    (
      <CatalogFilterItem
        key={level}
        onInputChange={handleInputChange}
        dataType={level}
        name={TranslatedFilterItemLevel[level]}
        isChecked={filterlevel[level] === true}
      />
    )), [filterlevel, handleInputChange]);

  return (
    <fieldset data-testid='catalogFilterLevel' className="catalog-filter__block">
      <legend className="title title--h5">Уровень</legend>
      {levelInputs}
    </fieldset>
  );
}

const CatalogFilterLevel = memo(CatalogFilterLevelTemplate);

export default CatalogFilterLevel;
