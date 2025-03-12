import { render, screen } from '@testing-library/react';
import { withRouter } from '../../../utils/mock-component';
import NotFoundPage from './not-found-page';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const expectedHeaderText = '404: Страница не найдена';
    const expectedLinkText = 'Перейти на главную страницу';

    render(withRouter(<NotFoundPage/>));

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});
