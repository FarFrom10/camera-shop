import { ChangeEvent } from 'react';

type CatalogFilterItemProps = {
  onInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  dataType: string;
  name: string;
}

function CatalogFilterItem({onInputChange, dataType, name}: CatalogFilterItemProps): JSX.Element {
  return(
    <div className="custom-checkbox catalog-filter__item">
      <label>
        <input data-type={dataType} onChange={onInputChange} type="checkbox" name="digital" />
        <span className="custom-checkbox__icon" />
        <span className="custom-checkbox__label">{name}</span>
      </label>
    </div>
  );
}
export default CatalogFilterItem;
