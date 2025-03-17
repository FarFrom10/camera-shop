import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import ReviewCard from './review-card';
import dayjs from 'dayjs';
import { DateFormat } from '../../const';
import { fakeReview } from '../../mocks/mock-test';

describe('Component: ProductTabsText', () => {
  const containerId = 'reviewCardItem';
  const {
    createAt,
    userName,
    advantage,
    disadvantage,
    review,
  } = fakeReview;
  const expectedDisplayDate = dayjs(createAt).format(DateFormat.Review);

  it('should render correctly', () => {
    render(withRouter(<ReviewCard cameraReview={fakeReview}/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(expectedDisplayDate)).toBeInTheDocument();
    expect(screen.getByText(userName)).toBeInTheDocument();
    expect(screen.getByText(advantage)).toBeInTheDocument();
    expect(screen.getByText(disadvantage)).toBeInTheDocument();
    expect(screen.getByText(review)).toBeInTheDocument();
  });

  it('should render correct date', () => {
    const expectedAttributeDate = dayjs(createAt).format(DateFormat.DateTime);

    render(withRouter(<ReviewCard cameraReview={fakeReview}/>));

    expect(screen.getByText(expectedDisplayDate)).toHaveAttribute('datetime', expectedAttributeDate);
  });
});
