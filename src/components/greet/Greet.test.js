import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('Check if greet exists', () => {
  render(<Greet />);
  const linkElement = screen.getByText(/greet/i);
  expect(linkElement).toBeInTheDocument();
});


test('Check if greet exists and has name', () => {
    render(<Greet name='Marwan'/>);
    const linkElement = screen.getByText(/greet marwan/i);
    expect(linkElement).toBeInTheDocument();
  });
