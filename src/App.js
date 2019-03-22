import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// ** https://github.com/skratchdot/react-bootstrap-daterangepicker
import DateRangePicker from 'react-bootstrap-daterangepicker';
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import './assets/bootstrap.css';
// you will also need the css that comes with bootstrap-daterangepicker
import './assets/daterangepicker.css';
import './assets/_datepicker.css';
import moment from 'moment';

// ** https://github.com/airbnb/react-dates
import 'react-dates/initialize';
import { DayPickerRangeController as AirBnbDR, SingleDatePicker } from 'react-dates';


export const START_DATE = 'startDate';
export const END_DATE = 'endDate';

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
      startDate:  moment().subtract(30, 'days'),
      endDate: moment()
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React DateTime Picker Tests
          </a>
          <DateRangePicker startDate="1/1/2014" endDate="3/1/2014">
            <button>ReactBootstrap</button>
          </DateRangePicker>

          <AirBnbDR
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId='airbnb-drp1' // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            numberOfMonths={ 2 }
            daySize= { 32 }
          />
        </header>
      </div>
    );
  }
}

export default App;
