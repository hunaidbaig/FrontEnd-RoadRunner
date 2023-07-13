import { Button, Col, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { Link } from 'react-router-dom';

const CarCard = ({car}) => {

    return (
        <> 
            <Col span={12} key={car.id} style={{  }}>
                <Card
                    style={{ width: 800, marginTop: '1rem', height: '300px', display:'flex' }}
                    cover={
                        <img
                            alt="car thumbnail"
                            width={'auto'}
                            height={'250px'}
                            src={car.imagelink}
                        />}>
                    <Link to={`/car-detail/${car.id}`} state={car}>
                        <Meta
                            style={{ height: '80px', cursor: 'pointer' }}
                            // avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                            title={car.name }
                            description={car.shortDesc}
                        />
                    </Link>
                    <div className="additional">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p>Rental Price:</p>
                        <p>{car.price}</p>
                    </div>

                    </div>

                    <Link to={'/rental-form'}>
                        <Button style={{ marginTop: '10px' }} type="primary">
                            Rent Me Now
                        </Button>
                    </Link>
                </Card>
            </Col>  
        </>
    )
}

export default CarCard