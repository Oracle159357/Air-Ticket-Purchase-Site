import React from 'react';
import './Flight.scss';
import {
  Button, Container, Row, Col,
} from 'reactstrap';
import imageCompanyTurkish from 'images/TurkishAirlinesLogo.jpg';
import imageAirplane from 'images/airplines.png';

export const Flight = props => (
  <Container className='flight'>
    <Row>
      <Col lg={3} sm={4} style={{ backgroundColor: 'white' }}>
        <div className=" image-padding">
          <img alt="Not Found" src={imageCompanyTurkish} />
        </div>
      </Col>
      <Col lg={9} sm={8} style={{ backgroundColor: 'white' }}>
        <Row>
          <Col lg={4} sm={3} className='center-item'>
            <h4>{`${props.departure_time} `}</h4>
          </Col>
          <Col lg={4} sm={6} className='center-item'>
            <div>
              <div className='center-item'>
                {
                  {
                    0: 'Без пересадок',
                    1: '1 пересадка',
                    2: '2 пересадки',
                    3: '3 пересадки',
                  }[parseInt(props.stops, 10)]
                }
              </div>
              <div>
                <img alt="Not Found" src={imageAirplane} />
              </div>
            </div>
          </Col>
          <Col lg={4} sm={3} className='center-item'>
            <h4>{`${props.arrival_time} `}</h4>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col style={{ backgroundColor: 'white' }} lg={3} sm={4}>
        <div className='maximum-size-button color-of-button-pay'>
          <Button className="maximum" color="info">
            {'Купить'}
            <br />
            {'за '}
            {props.price}
          </Button>
        </div>
      </Col>
      <Col style={{ backgroundColor: 'white' }} lg={9} sm={8}>
        <Row>
          <Col className='center-item' lg={4} sm={5}>
            <div>
              <div>
                <small style={{ color: 'black' }}>VVO, Владивосток</small>
              </div>
              <div>
                <small style={{ color: 'gray' }}>12 дек 2018, Пт</small>
              </div>
            </div>
          </Col>
          <Col className='center-item' lg={4} sm={3} />
          <Col className='center-item' lg={4} sm={4}>
            <div>
              <div>
                <small style={{ color: 'black' }}>Тель-Авив, TLV</small>
              </div>
              <div>
                <small style={{ color: 'gray' }}>12 дек 2018, Пт</small>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);
