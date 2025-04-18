import { ChangeEvent } from 'react';
import { FilterItemType } from '../../const';

type CatalogFilterItemProps = {
  onInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  dataType: string;
  name: string;
  isVideo?: boolean;
  isChecked: boolean;
}

function CatalogFilterItem({onInputChange,
  dataType,
  name,
  isVideo = false,
  isChecked
}: CatalogFilterItemProps): JSX.Element {
  const isTypeUnavailableForVideo = dataType === FilterItemType.Film || dataType === FilterItemType.Snapshot;
  const isDisabled = isVideo && isTypeUnavailableForVideo;

  return(
    <div className="custom-checkbox catalog-filter__item">
      <label>
        <input data-testid='catalogFilterItemInput' checked={isChecked} disabled={isDisabled} data-type={dataType} onChange={onInputChange} type="checkbox" name="digital" defaultValue="false"/>
        <span className="custom-checkbox__icon" />
        <span className="custom-checkbox__label">{name}</span>
      </label>
    </div>
  );
}
export default CatalogFilterItem;
