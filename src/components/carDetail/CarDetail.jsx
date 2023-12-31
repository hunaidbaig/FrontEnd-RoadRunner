import { Button, Col, Divider, Image, Row, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const {Title, Paragraph } = Typography;

const CarDetail = () => {

    const {state : car} = useLocation();

  return (
    <>
        <Typography.Title level={1} style={{textAlign: 'center'}} data-testid={'heading'}>Car Detail</Typography.Title>
        <Divider />
        <Row style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '50px' }}>
            <Col span={22}>
                <Image
                    width={'100% '}
                    // height={'50%'}
                    src={`${car?.imagelink}`}
                    placeholder={
                    <Image
                        preview={false}
                        src={`${car?.imagelink}`}
                        width={100}
                    />
                    }
                />
            </Col>
            <Col span={20}>
                <Title level={2}>{car?.name}</Title>

                <div style={{display: 'flex', alignContent: 'center', gap: '50px'}}>
                    <Paragraph strong={800}>Rental Fee: </Paragraph>
                    <Paragraph>{car?.rentfee} Rs</Paragraph>
                </div>
                
                <Title level={5}>Description:</Title>
                <Paragraph>{car?.longdesc}</Paragraph>
                
                <Link to={'/rental-form'} state={car}> <Button  type="primary">Rent Me Now</Button> </Link>
            </Col>
        </Row>
    </>
  )
}

export default CarDetail