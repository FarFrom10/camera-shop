import { render, screen } from '@testing-library/react';
import { mockEmptyCallback, withRouter } from '../../utils/mock-component';
import ProductsSimilarList from './products-similar-list';
import { fakeCameras } from '../../mocks/mock-test';

describe('Component: ProductsSimilarList', () => {
  const containerId = 'productsSimilarList';

  it('should render correctly', () => {
    const expectedCameraText = fakeCameras[0].name;

    render(withRouter(
      <ProductsSimilarList onModalContactMeOpen={mockEmptyCallback} similarCameras={fakeCameras}/>
    ));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(expectedCameraText)).toBeInTheDocument();
  });
});
