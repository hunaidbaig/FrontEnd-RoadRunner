import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CarCard from './CarCard';



const fakeCar = {
    "id": 152,
    "name": "damage protection",
    "shortdesc": "It is nice project",
    "longdesc": "very nice project",
    "imagelink": "https://raw.githubusercontent.com/jeff-lent/roadrunnercars/main/BugattiChironSuperSport.png",
    "rentfee": 15000
}


test('it should present same data', () => {
    render(
          <MemoryRouter>
              <CarCard car={fakeCar} />
          </MemoryRouter>
      );
    const linkElement = screen.getAllByRole('img');
  
    expect(linkElement[0].src).toEqual(fakeCar.imagelink);
  });


test('render the car card', () => {
    render(
          <MemoryRouter>
              <CarCard car={fakeCar} />
          </MemoryRouter>
      );
    const linkElement = screen.getByRole("button");
  
    expect(linkElement).toBeInTheDocument();
  });