import {
  Button,
  Form,
  Input,
  Switch,
} from 'antd';
import React, { useState } from 'react';


const RentalForm = () => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [pickDate, setPickDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [damage, setDamage] = useState(false);

  const onFinish =(value)=>{
    
    console.log('data',value)
    console.log('data',name)
    console.log('data',address)
    console.log('data',phone)
    console.log('data',pickDate)
    console.log('data',damage)
  }

  const onChange = (checked) => {
    setDamage(checked);
    console.log(`switch to ${checked}`);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', }}>
        <Form
          onFinish={()=>  onFinish()}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 20 }}
          layout="horizontal"
          >

          <h1 style={{ marginBottom: '2rem' }}>Rental Booking Form</h1>
          <Form.Item label="Name" name={'input'}>
            <Input value={name} onChange={(e)=> setName(e.target.value) } />
          </Form.Item>
          
          <Form.Item label="Address">
            <Input value={address} onChange={(e)=> setAddress(e.target.value)} />
          </Form.Item>

          <Form.Item label="Phone Number ">
            <input type={'number'} style={{ width: 335, padding: '4px 11px', borderWidth: '1px', borderStyle: 'solid', borderColor: '#d9d9d9', borderRadius: '6px',transition: 'all .2s', fontSize: '14px' }} value={phone} onChange={(e)=> setPhone(e.target.value)} />
          </Form.Item>
          
          <Form.Item label="Pickup Date" name={'range_picker'} >
            <input style={{padding: '4px 11px', borderWidth: '1px', borderStyle: 'solid', borderColor: '#d9d9d9', borderRadius: '6px',transition: 'all .2s', fontSize: '14px'}} type={'datetime-local'} value={pickDate} onChange={(e)=> setPickDate(e.target.value)} />
          </Form.Item>

          <Form.Item label="Pickup Date" name={'range_picker'} >
            <input style={{ padding: '4px 11px', borderWidth: '1px', borderStyle: 'solid', borderColor: '#d9d9d9', borderRadius: '6px',transition: 'all .2s', fontSize: '14px' }} type={'datetime-local'} value={returnDate} onChange={(e)=> setReturnDate(e.target.value)} />
          </Form.Item>
          
          <Form.Item label="Damage?" valuePropName="checked">
            <Switch onChange={onChange} />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType="submit">Button</Button>
          </Form.Item>
        </Form>

      </div>
    </>
  )
}

export default RentalForm