import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CheckOut from './CheckOut';


beforeAll(()=>{
  global.matchMedia = global.matchMedia || function () {
      return {
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    };
})


test('render the checkout', () => {
  render(
        <MemoryRouter>
            <CheckOut />
        </MemoryRouter>
    );
  const linkElement = screen.getByText('Thank You for book a car.');

  expect(linkElement).toBeInTheDocument();
});

test('Button is present', () => {
    render(
          <MemoryRouter>
              <CheckOut />
          </MemoryRouter>
      );
    const linkElement = screen.getByRole('button');
  
    expect(linkElement).toBeInTheDocument();
  });

  // test('Button is clicked and redirect the car page', () => {
  //   const onClick = jest.fn();
  //   render(
  //         <MemoryRouter>
  //             <CheckOut />
  //         </MemoryRouter>
  //     );
  //   const linkElement = screen.getByRole('button');
    
  //   fireEvent(linkElement, new MouseEvent('click', {
  //       bubbles: true,
  //       cancelable: true,
  //     }));
  //   console.log(linkElement);

  //   expect(onClick).toHaveBeenCalled();
  // });

