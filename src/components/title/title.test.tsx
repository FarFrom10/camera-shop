import { render, waitFor } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import Title from './title';
import { AppRoute, RouteName, SITE_NAME } from '../../const';

describe('Component: Title', () => {
  it('should render correctly', async () => {
    const route = AppRoute.Index;
    const expectedTitle = `${RouteName[route]} - ${SITE_NAME}`;

    render(withRouter(
      <Title pageName={route}/>));

    await waitFor(() => expect(document.title).toEqual(expectedTitle));
  });
});
