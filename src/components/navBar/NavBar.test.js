import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';


test('render navBar and check the logo', () => {
  render(<NavBar />);
  const linkElement = screen.getByRole('img');

  expect(linkElement).toBeInTheDocument();
});


