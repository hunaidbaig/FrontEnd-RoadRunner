import { Col, } from 'antd'
import React from 'react'



const NavBar = () => {
  return (
        <Col style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: '15px'
        }} 
        span={24}>
        <div>
            <div style={{ height: '100px' }}>
                <img src='../logo.png' height={'80px'} alt='logo' />
            </div>
        </div>

        </Col>
  )
}

export default NavBar