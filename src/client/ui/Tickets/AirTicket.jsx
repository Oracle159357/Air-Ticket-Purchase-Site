import React, { PureComponent } from 'react';
import './AirTicket.scss';


export class AirTickets extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentStateOfButton: '₽',
      currentCurrency: 1,
      checked: false,
      stateOfCheckBox: [0, 1, 2, 3],
      childVisible: true,
    };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
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
    return(
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
    </div>
    )
  }
}
