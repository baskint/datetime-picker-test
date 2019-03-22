import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './assets/_datepicker.css';
import moment from 'moment';

// ** https://github.com/airbnb/react-dates
import 'react-dates/initialize';
import {
  DayPickerRangeController
} from 'react-dates';

export const START_DATE = 'startDate';
export const END_DATE = 'endDate';

export class AirBnbDropdown extends React.Component{
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
			startDate: moment().subtract(30, 'day'),
			endDate: moment()
		};
	}
	render() {
		return (
			<Dropdown>
				<Dropdown.Toggle>AirBnB</Dropdown.Toggle>
				<Dropdown.Menu>
					<DayPickerRangeController
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
				</Dropdown.Menu>
			</Dropdown>
		);
	}
}


export default AirBnbDropdown;
