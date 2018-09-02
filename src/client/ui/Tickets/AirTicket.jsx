import React, { PureComponent } from 'react';
import './AirTicket.scss';

export class AirTickets extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentStateOfButton: '₽',
      currentCurrency: 1,
    };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
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

  render() {

  }
}
