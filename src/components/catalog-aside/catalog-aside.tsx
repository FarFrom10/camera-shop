import { memo } from 'react';

function CatalogAsideTemplate(): JSX.Element {
  return(
    <div className="catalog__aside">
      <img src="img/banner.png" data-testid='bannerImage'/>
    </div>
  );
}

const CatalogAside = memo(CatalogAsideTemplate);

export default CatalogAside;
