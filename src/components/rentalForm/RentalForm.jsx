import {
  Button,
  Card,
  Divider,
  Form,
  Input,
  Switch,
  Typography,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const { Meta } = Card;


const RentalForm = () => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [driverLicence, setDriverLicence] = useState('');
  const [pickDate, setPickDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [damage, setDamage] = useState(null);
  const [checkOutEnable, setCheckOutEnable] = useState(true);
 

  const [total, setTotal] = useState(false);

  const navigate = useNavigate();
  const { state : car } = useLocation();
  
  
  useEffect(()=>{
    const getLocalStorage = JSON.parse(localStorage.getItem('user'));
    if(getLocalStorage){
      setName(getLocalStorage.name);
      setPhone(getLocalStorage.phone);
      setAddress(getLocalStorage.address);
      setPickDate(getLocalStorage.pickDate);
      setReturnDate(getLocalStorage.returnDate)
      setDriverLicence(getLocalStorage.driverLicence);
    }
  },[])
  
  useEffect(()=>{
    if(pickDate && returnDate){
  
      let date1 = new Date(pickDate);
      let date2 = new Date(returnDate);
      
      let difference = date2.getTime() - date1.getTime();
  
      let TotalDays = Math.ceil(difference / (1000 * 3600 * 24)) + 1;
      console.log(TotalDays + ' days to world Cup');
  
      setTotal(TotalDays* car.rentfee);
      setCheckOutEnable(!checkOutEnable);
    }
  },[returnDate])

  const onFinish =()=>{

    const obj = {
      carid : car?.id,
      name : name,
      address : address,
      driverlicence : driverLicence,
      phone: phone,
      totalprice: total,
      pickdate: pickDate,
      returndate: returnDate
    }

    if(damage){

      //i will send the total without damage wavier
      const damageObj = {
        ...obj,
        totalprice: damage,
        carid: 152,
      }
      
      fetch('http://localhost:8080/form/add',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(damageObj)
      })
      .then(response => response.json())
      .then(data=>{
        console.log('success', data)
        navigate('/checkout')
      })
      .catch(err=>{
        console.log(err);
      })

      //i will send the total + damage wavier
      const damageObj2 = {
        ...obj,
        totalprice: damage + total,
        carid: 152,
      }

      fetch('http://localhost:8080/form/add',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(damageObj2)
      })
      .then(response => response.json())
      .then(data=>{
        console.log('success', data)
        navigate('/checkout')
      })
      .catch(err=>{
        console.log(err);
      })


    }
    else{

      fetch('http://localhost:8080/form/add',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      .then(response => response.json())
      .then(data=>{
        console.log('success', data)
        navigate('/checkout')
      })
      .catch(err=>{
        console.log(err);
      })

    }
  }

  

  const onChange = (checked) => {

    if(checked){
      let date1 = new Date(pickDate);
      let date2 = new Date(returnDate);
      
      let difference = date2.getTime() - date1.getTime();

      let TotalDays = Math.ceil(difference / (1000 * 3600 * 24)) + 1;

      console.log(TotalDays);
      setDamage(15000* TotalDays);

      console.log(`switch to ${checked}`);
    }
    else{
      console.log(`kardiya true ${checked}`);
      setDamage(null)
    }
  };

  const changeCar = ()=>{

    localStorage.setItem('user', JSON.stringify( {
      name: name,
      address: address,
      phone: phone,
      pickDate: pickDate,
      returnDate: returnDate,
      driverLicence : driverLicence
    }))

    navigate('/');
  }

  const removeLocalStorage = ()=>{
    navigate('/');
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center',  }}>

      <div >
        <h1>Selected Car</h1>
        <Divider />
        <Card
          style={{ width: 800, marginTop: '1rem', height: '300px', display:'flex' }}
          cover={
              <img
                  alt="car thumbnail"
                  width={'auto'}
                  height={'300px'}
                  src={car?.imagelink}
              />}>
              <Meta
                  style={{ height: '80px', cursor: 'pointer' }}
                  title={car?.name }
                  description={car?.shortdesc}
              />
            <div className="additional">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Rental Price:</p>
                <p>{car?.rentfee}</p>
            </div>

          </div>
        </Card>
        
        {
          total && damage ? 
          <Card
            style={{ width: 800, marginTop: '1rem', marginBottom:'2rem', height: '150px', display:'flex' }}>
                <Meta
                    style={{ height: '80px'}}
                    title={car?.name }
                    description={car?.shortdesc}
                />
              <div className="additional">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p>Rental Fee:</p>
                  <p>{car?.rentfee}</p>
              </div>

            </div>
          </Card>
          : null
        }
        <Button style={{ marginTop: '2rem' }} onClick={()=> changeCar()}>change Car</Button>
      </div>

        <Form
        style={{ marginLeft: '50px', padding: '20px' }}
          onFinish={()=> onFinish()}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 20 }}
          layout="horizontal"
          >

          <h1 style={{ marginBottom: '1rem' }}>Rental Booking Form</h1>
          <Divider />
          <Form.Item  label="Name">
            <Input data-testid={'name'} value={name} onChange={(e)=> setName(e.target.value) } />
          </Form.Item>
          
          <Form.Item label="Address">
            <Input data-testid={'address'} value={address} onChange={(e)=> setAddress(e.target.value)} />
          </Form.Item>

          <Form.Item label="Phone Number ">
            <input data-testid={'number'} type={'number'} style={{ width: 250, padding: '4px 11px', borderWidth: '1px', borderStyle: 'solid', borderColor: '#d9d9d9', borderRadius: '6px',transition: 'all .2s', fontSize: '14px' }} value={phone} onChange={(e)=> setPhone(e.target.value)} />
          </Form.Item>

          <Form.Item label="Driver Licence ">
            <input type={'number'} style={{ width: 250, padding: '4px 11px', borderWidth: '1px', borderStyle: 'solid', borderColor: '#d9d9d9', borderRadius: '6px',transition: 'all .2s', fontSize: '14px' }} value={driverLicence} onChange={(e)=> setDriverLicence(e.target.value)} />
          </Form.Item>
          
          <Form.Item label="Pickup Date" >
            <input style={{padding: '4px 11px', borderWidth: '1px', borderStyle: 'solid', borderColor: '#d9d9d9', borderRadius: '6px',transition: 'all .2s', fontSize: '14px'}} type={'datetime-local'} value={pickDate} onChange={(e)=> setPickDate(e.target.value)} />
          </Form.Item>

          <Form.Item label="Return Date" >
            <input style={{ padding: '4px 11px', borderWidth: '1px', borderStyle: 'solid', borderColor: '#d9d9d9', borderRadius: '6px',transition: 'all .2s', fontSize: '14px' }} type={'datetime-local'} value={returnDate} onChange={(e)=> setReturnDate(e.target.value)} />
          </Form.Item>
          
          <Form.Item label="Damage?" valuePropName="checked">
            <Switch onChange={onChange} />
          </Form.Item>

          {
            total &&
            <Form.Item tooltip={`Per Day Charges: ${car.rentfee } Rs`} label="Total Price">
              <Typography>{total}</Typography>
            </Form.Item>
          }

          {
            damage &&
            <Form.Item tooltip={'You select damage wavier of 15000 per day.'} label="Damage Wavier">
              <Typography > {damage} Rs</Typography>
            </Form.Item>
          }
          {
            damage && total ?
              <Form.Item tooltip={'Total price of the rental including the amount of the damage protection'} label="Order Total">
                <Typography>{damage + total}</Typography>
              </Form.Item>
              :
              null
          }

          <Form.Item style={{ marginLeft: '50px', marginTop: '50px' }}>
            <Button data-testid='submit' style={{ marginRight: '10px' }} type='primary' htmlType="submit" disabled={checkOutEnable}>Checkout</Button>
            <Button data-testid='cancel' onClick={()=> removeLocalStorage()}>Cancel</Button>

          </Form.Item>
        </Form>

      </div>
    </>
  )
}

export default RentalForm;