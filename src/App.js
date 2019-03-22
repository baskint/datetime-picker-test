import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// ** https://github.com/skratchdot/react-bootstrap-daterangepicker
import DateRangePicker from "react-bootstrap-daterangepicker";
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import "./assets/bootstrap.css";
// you will also need the css that comes with bootstrap-daterangepicker
import "./assets/daterangepicker.css";
import "./assets/_datepicker.css";
import moment from "moment";

// ** https://github.com/airbnb/react-dates
import "react-dates/initialize";
import {
  DayPickerRangeController as AirBnbDR
} from "react-dates";

export const START_DATE = "startDate";
export const END_DATE = "endDate";

class App extends Component {
  constructor(props) {
    super(props);

    let focusedInput = null;
    if (props.autoFocus) {
      focusedInput = START_DATE;
    } else if (props.autoFocusEndDate) {
      focusedInput = END_DATE;
    }

    this.state = {
      focusedInput,
      startDate: moment().subtract(30, "days"),
      endDate: moment()
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>
            React DateTime Picker Tests
          </h3>
        </header>
        <div className="container">
          <div className="item-a">
            <DateRangePicker startDate="1/1/2014" endDate="3/1/2014">
              <button>ReactBootstrap</button>
            </DateRangePicker>
          </div>
          <div className="item-b">
          <AirBnbDR
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })
            } // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            numberOfMonths={2}
            daySize={32}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
