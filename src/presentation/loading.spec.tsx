import { render, screen } from '@testing-library/react';
import Loading from './loading';

test('renders loading spinner and text', () => {
  render(<Loading />);

  const loadingText = screen.getByText(/loading.../i);
  expect(loadingText).toBeInTheDocument();

  const svgElement = screen.getAllByTestId("loading-spinner"); 
  expect(svgElement[0]).toBeInTheDocument();
});
