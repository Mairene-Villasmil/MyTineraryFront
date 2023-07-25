import { render, screen } from '@testing-library/react';
import Myitinerary from './MyItinerary';

test('renders learn react link', () => {
  render(<Myitinerary />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
