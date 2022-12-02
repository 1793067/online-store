import React from 'react';
import { Col, Image, Container, Row, Card, Button } from 'react-bootstrap';
import bigStar from '../assets/BigStar.png'

const DevicePage = () => {
    const device = {id: 8, name: "Iphone  12 pro", price: 10000, rating: 0, img: "https://new-retail.ru/upload/iblock/6c4/x6c4665d1da0fce7397aa2d8373f95162.jpg.pagespeed.ic.Di90CR_Q4J.jpg"};
    const description = [
        {id:1, title: "Оперативная память", description: '5 гб'},
        {id:2, title: "Камера", description: '12 мп'},
        {id:3, title: "Процессор", description: 'Пентиум 1'},
        {id:4, title: "Количество ядер", description: '2'},
        {id:5, title: "Аккумулятор", description: '4000 Ма/ч'},
    ]
    
    return (
        <Container>
            <div className="d-flex justify-content-between">
                <Col md={3} className="d-flex flex-column align-items-center">
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={3}>
                    <div className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{background: `url(${bigStar}) no-repeat center center`, width:260, height:260, fontSize: 64, backgroundSize: "cover"}}
                        >
                            {device.rating}
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width:300, height:300, fontSize:32, border: "5px solid lightgray"}}
                    >
                        <h3>{device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </div>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 ? "transparent" : "lightgray", padding: 10}}>
                        {info.title}:  {info.description}
                    </Row>    
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;