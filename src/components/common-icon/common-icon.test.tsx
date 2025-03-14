import { render, screen } from '@testing-library/react';
import CommonIcon from './common-icon';
import { IconName } from '../../const';

describe('Component: CommonIcon', () => {
  it('should render correctly with prop "iconClass"', () => {
    const expectedIcon = IconName.ArrowUp;
    const expectedClass = 'test-class';
    const svgTestId = 'svgContainer';
    const iconTestId = 'commonIcon';

    render(<CommonIcon icon={expectedIcon} iconClass={expectedClass}/>);
    const svgElement = screen.getByTestId(svgTestId);
    const iconElement = screen.getByTestId(iconTestId);

    expect(svgElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(svgElement).toHaveClass(expectedClass);
    expect(iconElement).toHaveAttribute('xlink:href', `#${expectedIcon}`);
  });
});
