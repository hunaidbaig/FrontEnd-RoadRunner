import { Divider } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarDetail from './components/carDetail/CarDetail';
import Cars from './components/cars/Cars';
import CheckOut from './components/checkout/CheckOut';
import NavBar from './components/navBar/NavBar';
import RentalForm from './components/rentalForm/RentalForm';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Divider style={{ marginTop: '10px' }} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cars />} />
          <Route path='/car-detail/:id' element={<CarDetail />} />
          <Route path='/rental-form' element={<RentalForm />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
