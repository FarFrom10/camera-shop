function BasketItemDescription(): JSX.Element {
  return (
    <div className="basket-item__description">
      <p className="basket-item__title">Фотоаппарат «Орлёнок»</p>
      <ul className="basket-item__list">
        <li className="basket-item__list-item">
          <span className="basket-item__article">Артикул:</span>{' '}
          <span className="basket-item__number">O78DFGSD832</span>
        </li>
        <li className="basket-item__list-item">
          Плёночная фотокамера
        </li>
        <li className="basket-item__list-item">
          Любительский уровень
        </li>
      </ul>
    </div>
  );
}

export default BasketItemDescription;
