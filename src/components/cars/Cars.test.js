import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Cars from './Cars';


test('render the car detail', () => {
    render(
          <MemoryRouter>
              <Cars />
          </MemoryRouter>
      );
    const linkElement = screen.getByText("Loading...");
    
    expect(linkElement).toBeInTheDocument();
  });

test('render the car detail', async () => {
  render(
        <MemoryRouter>
            <Cars />
        </MemoryRouter>
    );

    await waitFor(()=>{
      const linkElement = screen.getByText("damage protection");
      expect(linkElement).toBeInTheDocument();
    })
});