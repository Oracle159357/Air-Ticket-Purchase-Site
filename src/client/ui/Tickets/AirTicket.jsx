import React, { PureComponent } from 'react';
import './AirTicket.scss';

import {
  Button, ButtonGroup, Container, Row, Col,
} from 'reactstrap';

import imageCompanyOfTickets from 'images/logoOfCompany.png';

import { getAllTicket } from '../../api/tickets';

import { Flight } from './Flight';

export class AirTickets extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentStateOfButton: '₽',
      currentCurrency: 1,
      checked: false,
      stateOfCheckBox: [0, 1, 2, 3],
      tickets: [],
      childVisible: true,
    };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  async componentDidMount() {
    await this.loadPrice();
  }

  onClick() {
    this.setState(prevState => ({ childVisible: !prevState.childVisible }));
  }

  onRadioBtnClick(currentStateOfButton) {
    if (currentStateOfButton === '₽') {
      this.setState({ currentCurrency: 1 });
    }
    if (currentStateOfButton === '$') {
      this.setState({ currentCurrency: 67 });
    }
    if (currentStateOfButton === '€') {
      this.setState({ currentCurrency: 78 });
    }
    this.setState({ currentStateOfButton });
  }

  async loadPrice() {
    const { tickets } = await getAllTicket();
    tickets.sort((t1, t2) => t1.price - t2.price)
    this.setState({ tickets });
  }

  handleCheck(numberOfTransfer) {
    this.setState((prevState) => {
      if (prevState.stateOfCheckBox.indexOf(numberOfTransfer) < 0) {
        return { stateOfCheckBox: [...prevState.stateOfCheckBox, numberOfTransfer] };
      }

      return { stateOfCheckBox: [...prevState.stateOfCheckBox].filter(element => element !== numberOfTransfer) };
    }, () => console.log(this.state.stateOfCheckBox));
  }

  handleCheckAll() {
    this.setState(
      prevState => (
        prevState.stateOfCheckBox.length === 4 ? { stateOfCheckBox: [] } : { stateOfCheckBox: [0, 1, 2, 3] }),
    );
  }

  render() {
    return (
      <div className="main-background">
        <div className="mobile-version">
          <div className="style-logo-company">
            <img alt="Not Found" src={imageCompanyOfTickets} />
          </div>
          <div>
            <div>
              <Button
                className="show-button max-size-show-filter"
                onClick={() => this.onClick()}
                outline
                color="primary"
              >
                Show filter
              </Button>
              {' '}
            </div>
          </div>
        </div>
        <Container>
          <Row>
            {
              this.state.childVisible
                ? (
                  <Col className="filter-block" lg={3} md={3} sm={2} xs={12}>
                    <div>
                      <div className="marginDown">
                        ВАЛЮТА
                      </div>
                      <div className="currency-btn-group">
                        <ButtonGroup>
                          <Button
                            outline
                            color="info"
                            onClick={() => this.onRadioBtnClick('₽')}
                            active={this.state.currentStateOfButton === '₽'}
                          >
                            RUB
                          </Button>
                          <Button
                            outline
                            color="info"
                            onClick={() => this.onRadioBtnClick('$')}
                            active={this.state.currentStateOfButton === '$'}
                          >
                            USD
                          </Button>
                          <Button
                            outline
                            color="info"
                            onClick={() => this.onRadioBtnClick('€')}
                            active={this.state.currentStateOfButton === '€'}
                          >
                            EUR
                          </Button>
                        </ButtonGroup>
                      </div>
                      <div>
                        <div className="marginMiddle">
                          КОЛИЧЕСТВО ПЕРЕСАДОК
                        </div>
                        <div>
                          <div
                            className="currency-checkbox custom-control custom-checkbox margin  marginDown"
                          >
                            <input
                              checked={this.state.stateOfCheckBox.length === 4}
                              onChange={() => this.handleCheckAll()}
                              type="checkbox"
                              className="custom-control-input"
                              id="Checked1"
                            />
                            <label className="custom-control-label" htmlFor="Checked1">Все</label>
                          </div>
                          <div
                            className="currency-checkbox custom-control
                              custom-checkbox margin marginDown"
                          >
                            <input
                              checked={this.state.stateOfCheckBox.includes(0)}
                              onChange={() => this.handleCheck(0)}
                              type="checkbox"
                              className="custom-control-input"
                              id="Checked2"
                            />
                            <label className="custom-control-label" htmlFor="Checked2">Без пересадок</label>
                          </div>
                          <div className="currency-checkbox custom-control custom-checkbox margin, marginDown">
                            <input
                              checked={this.state.stateOfCheckBox.includes(1)}
                              onChange={() => this.handleCheck(1)}
                              type="checkbox"
                              className="custom-control-input"
                              id="Checked3"
                            />
                            <label className="custom-control-label" htmlFor="Checked3">1 пересадка</label>
                          </div>
                          <div className="currency-checkbox custom-control custom-checkbox margin, marginDown">
                            <input
                              checked={this.state.stateOfCheckBox.includes(2)}
                              onChange={() => this.handleCheck(2)}
                              type="checkbox"
                              className="custom-control-input"
                              id="Checked4"
                            />
                            <label className="custom-control-label" htmlFor="Checked4">2 пересадки</label>
                          </div>
                          <div className="currency-checkbox custom-control custom-checkbox margin, marginDown">
                            <input
                              checked={this.state.stateOfCheckBox.includes(3)}
                              onChange={() => this.handleCheck(3)}
                              type="checkbox"
                              className="custom-control-input"
                              id="Checked5"
                            />
                            <label className="custom-control-label" htmlFor="Checked5">3 пересадки</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                )
                : null
            }
            <Col lg={9} md={9} sm={10} xs={12}>
              <div className='flights-block'>
                {this.state.tickets.filter(
                  ticketWithTransfer => this.state.stateOfCheckBox.includes(ticketWithTransfer.stops),
                )
                  .map((ticket, i) => (
                    <Flight
                      key={i}
                      price={` ${Math.round(ticket.price / this.state.currentCurrency)}
                         ${this.state.currentStateOfButton} `}
                      departure_time={`${ticket.departure_time}`}
                      arrival_time={`${ticket.arrival_time}`}
                      stops={`${ticket.stops}`}
                    />
                  ))
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
