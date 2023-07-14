import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CarDetail from './CarDetail';


beforeAll(()=>{
    global.matchMedia = global.matchMedia || function () {
        return {
          addListener: jest.fn(),
          removeListener: jest.fn(),
        };
      };
})

test('render the car detail', () => {
    render(
          <MemoryRouter>
              <CarDetail />
          </MemoryRouter>
      );
    const linkElement = screen.getByTestId("heading");
  
    expect(linkElement).toBeInTheDocument();
  });


  test('check the button', () => {
    render(
          <MemoryRouter>
              <CarDetail />
          </MemoryRouter>
      );
    const linkElement = screen.getByRole("button");
  
    expect(linkElement).toBeInTheDocument();
  });

