import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RentalForm from './RentalForm';


beforeAll(()=>{
    global.matchMedia = global.matchMedia || function () {
        return {
          addListener: jest.fn(),
          removeListener: jest.fn(),
        };
      };
})


test('render the RentalForm', () => {
  render(
        <MemoryRouter>
            <RentalForm />
        </MemoryRouter>
    );
  const linkElement = screen.getByText('Selected Car');

  expect(linkElement).toBeInTheDocument();
});

test('render the labels', () => {
    render(
          <MemoryRouter>
              <RentalForm />
          </MemoryRouter>
      );
    const name = screen.getByTestId('name');
    const phone = screen.getByTestId('number');
    const address = screen.getByTestId('address');
  
    expect(name).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(address).toBeInTheDocument();
  });

  test('render the buttons', () => {
    render(
          <MemoryRouter>
              <RentalForm />
          </MemoryRouter>
      );
    const name = screen.getByTestId('submit');
    const cancel = screen.getByTestId('cancel');
  
    expect(name).toBeInTheDocument();
    expect(cancel).toBeInTheDocument();
  });


  test('the card is present', () => {
    render(
          <MemoryRouter>
              <RentalForm />
          </MemoryRouter>
      );
    const img = screen.getByRole('img');
  
    expect(img).toBeInTheDocument();
  });
