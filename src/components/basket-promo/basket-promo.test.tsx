import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import BasketPromo from './basket-promo';
import { fakePromoCode } from '../../mocks/mock-test';

describe('Component: BasketPromo', () => {
  const containerId = 'basketPromo';
  const inputWrapperId = 'basketPromoInputWrapper';
  const inputId = 'basketPromoInput';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <BasketPromo promoCode={fakePromoCode}/>,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(/Если у вас есть промокод на скидку, примените его в этом поле/i)).toBeInTheDocument();
  });

  it('input defaultValue should be empty with empty "promoCode.coupon" property', () => {
    const emptyPromoCode = {
      coupon: '',
      discount: 0
    };
    const {withStoreComponent} = withStore(
      <BasketPromo promoCode={emptyPromoCode}/>,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(inputId)).toHaveValue('');
  });

  it('input defaultValue should have the same text as "fakePromoCode.coupon" and input wrapper should have "is-valid" class', () => {
    const {withStoreComponent} = withStore(
      <BasketPromo promoCode={fakePromoCode}/>,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(inputId)).toHaveValue(fakePromoCode.coupon);
    expect(screen.getByTestId(inputWrapperId)).toHaveClass('is-valid');
    expect(screen.getByText(/Промокод принят!/i)).toBeInTheDocument();
  });
});
