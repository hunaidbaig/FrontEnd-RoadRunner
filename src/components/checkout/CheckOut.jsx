import { Button, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

const CheckOut = () => {

  const navigate = useNavigate();

  const changeNavigation = ()=>{
    localStorage.removeItem('user');
    navigate('/')
  }

  return (
    <>
    <div  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
       <Typography.Title level={1} style={{ marginTop: '3rem'}}>
            Thank You for book a car.
        </Typography.Title>

        <Button role={'button'} onClick={()=> changeNavigation()} type='primary'>Start Over</Button>
    </div>
    </>
  )
}

export default CheckOut