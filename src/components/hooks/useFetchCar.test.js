import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import UseFetchCar from "./useFetchCar";


const data = [{
        "id": 1,
        "name": "Bugatti chiron super sport",
        "shortDesc": "Unleash unrivaled power and elegance with the bugatti chiron super sport, a masterpiece of performance and luxury. ",
        "longDesc": "Experience the epitome of automotive excellence with the bugatti chiron super sport. this magnificent masterpiece combines unrivaled performance, luxury, and design. its quad-turboch arged 8.0-liter w16 engine roars with a mind-bogglin g 1,600 horsepower, propelling you from 0 to 60 mph in mere seconds. with a top speed that surpasses 300 mph, it redefines what's possible on the road. the chiron super sport boasts a sleek and aerodynamic body, exuding opulence and elegance. step inside its meticulously crafted cabin, adorned with the finest materials and cutting-edge technology. prepare to indulge in a driving experience that transcends imagination, as you rent the bugatti chiron super sport today. ",
        "imagelink": "https://raw.githubusercontent.com/jeff-lent/roadrunnercars/main/BugattiChironSuperSport.png",
        "price": 300000
    },
    {
        "id": 2,
        "name": "porsche mission x",
        "shortDesc": "experience the future of exhilarating performance and sustainable luxury with the porsche mission x concept supercar. ",
        "longDesc": " introducing the porsche mission x concept supercar, an electrifying vision of the future that will ignite your senses. with its sleek rs. 200,000 and aerodynamic design, this masterpiece seamlessly blends innovation and style. powered by advanced electric technology, it delivers exhilarating performance with zero emissions. brace yourself as the electric motors unleash a staggering 800 horsepower, propelling you from 0 to 60 mph in a blink of an eye. inside, experience a futuristic cockpit where cutting-edge technology and luxurious comfort converge. with the porsche mission x concept supercar, redefine your driving experience and embrace the thrill of sustainable speed. rent it today and embrace the future of automotive excellence. ",
        "imagelink": "https://raw.githubusercontent.com/jeff-lent/roadrunnercars/main/PorscheMissionX.png",
        "price": 200000
    },
    {
        "id": 3,
        "name": "aston martin db12",
        "shortDesc": "unleash the power of elegance with the aston martin db12, where breathtaking performance and timeless luxury converge. ",
        "longDesc": " introducing the aston martin db12, a masterpiece of automotive excellence that exudes power, elegance, and unparalleled luxury. unleash your driving fantasies as the thunderous roar of its v12 engine propels you to new heights of exhilaration, with a breathtaking 0 to 60 mph acceleration in mere seconds. its sleek and timeless design commands attention, while the meticulously crafted interior envelops you in opulence and sophistication . revel in the seamless fusion of cutting-edge technology and refined craftsmanshi p as you embark on an unforgettable journey behind the wheel of the aston martin db12. rent this icon of performance and style today, and experience automotive perfection. ",
        "imagelink": "https://raw.githubusercontent.com/jeff-lent/roadrunnercars/main/AstonMartinDB12.png",
        "price": 180000
    },
    {
        "id": 4,
        "name": "Lamborghini Huracán Sterrato",
        "shortDesc": "Unleash your adventurous spirit with the lamborghini huracan sterrato, a powerful and rugged supercar that conquers both the asphalt and off-road terrain with exhilarating speed.",
        "longDesc": " Experience the untamed spirit of the lamborghini huracan sterrato, a thrilling fusion of off-road prowess and unbridled performance. this rugged beast is built to conquer any terrain, from rocky mountains to sandy deserts, without compromisin g the legendary lamborghini dna. its roaring v10 engine generates a heart-poundi ng 640 horsepower, catapulting you from 0 to 60 mph in a mere 2.9 seconds. with aggressive styling and raised suspension, the huracan sterrato stands out from the crowd. step into the driver's seat and unleash the wild side within. rent the lamborghini huracan sterrato today and embrace the ultimate adventure on and off the road ",
        "imagelink": "https://raw.githubusercontent.com/jeff-lent/roadrunnercars/main/LamborghiniHuracanSterrato.png",
        "price": 275000
    },
    {
        "id": 5,
        "name": "porsche 718 spyder rs",
        "shortDesc": "unleash pure driving pleasure with the porsche 718 spyder rs, a thrilling open-top supercar that combines blistering performance and unmatched exhilaration. ",
        "longDesc": " experience the pinnacle of open-top driving with the porsche 718 spyder rs, a true automotive masterpiece that combines raw performance with exhilarating thrills. feel the wind in your hair as the iconic flat-six engine delivers an impressive 420 horsepower, propelling you from 0 to 60 mph in a breathtaking 3.7 seconds. immerse yourself in the flawless harmony of design and engineering as the lightweight construction and aerodynamic enhancement s enhance your every move. inside the cockpit, luxurious comfort meets racing heritage, ensuring an unforgettable driving experience. rent the porsche 718 spyder rs today and embrace the freedom of the open road like never before",
        "imagelink": "https://github.com/jeff-lent/roadrunnercars/blob/main/Porsche718SpyderRS.png?raw=true",
        "price": 220000
    }
];


describe('useBasket', () => {
    it('adds an item to the basket', async () => {
      const firstDummyElement = data
      const Dummy = () => {
          const {carData, fetchAllCars} = UseFetchCar();
          
          return <div>
              <button onClick={() => fetchAllCars()} data-testid="basket-button">Add to basket</button>
              {carData.map((car)=> {
                  return <div data-testid={`basket-row-${car.id}`} key={car.id}>{car.name}</div>
              })}
          </div>;
      };
      render(
              <Dummy/>
            );
        const button = screen.getByTestId('basket-button');
        fireEvent.click(button,
            new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            }));
            await waitFor(async () => {
                const basketElement = screen.queryByTestId(`basket-row-${firstDummyElement.id}`);
                expect(basketElement).toBeNull();
            });
    });
  });