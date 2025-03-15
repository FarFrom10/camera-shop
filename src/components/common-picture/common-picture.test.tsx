import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import CommonPicture from './common-picture';
import { CommonPictureCategory, CommonPictureClass } from '../../const';
import { fakePromoCameras } from '../../mocks/mock-test';
import { ImageSettings } from './common-picture-settings';

describe('Component: CommonPicture', () => {
  it('should render correctly', () => {
    const {
      id,
      name,
      previewImg,
      previewImg2x,
      previewImgWebp,
      previewImgWebp2x,
    } = fakePromoCameras[0];
    const container = 'commonPictureContainer';
    const source = 'commonPictureSource';
    const category = CommonPictureCategory.Banner;

    render(withRouter(
      <CommonPicture
        category={category}
        imageClass={CommonPictureClass.Banner}
        id={String(id)}
        name={name}
        img={previewImg}
        img2x={previewImg2x}
        webp={previewImgWebp}
        webp2x={previewImgWebp2x}
      />));

    expect(screen.getByTestId(container)).toBeInTheDocument();

    expect(screen.getByTestId(source)).toBeInTheDocument();
    expect(screen.getByTestId(source)).toHaveAttribute('srcSet', `${previewImgWebp}, ${previewImgWebp2x}`);

    expect(screen.getByAltText(name)).toBeInTheDocument();
    expect(screen.getByAltText(name)).toHaveAttribute('src', previewImg);
    expect(screen.getByAltText(name)).toHaveAttribute('srcSet', previewImg2x);
    expect(screen.getByAltText(name)).toHaveAttribute('width', `${ImageSettings[category].width}`);
    expect(screen.getByAltText(name)).toHaveAttribute('height', `${ImageSettings[category].height}`);
  });
});
