import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class Select extends Component {
  state = { selected: '' };

  handleChange = event => {
    this.setState(
      { selected: event.target.value },
      this.props.onChange(event.target.value)
    );
  };

  buildOptions = () => {
    if (!this.props.options) return <option />;

    return this.props.options.map((option, index) => {
      return (
        <option key={index} value={option.value}>
          {option.text}
        </option>
      );
    });
  };

  render() {
    return (
      <form>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>{this.props.label || 'Select'}</ControlLabel>
          <FormControl
            componentClass="select"
            placeholder="select"
            onChange={this.handleChange}
            value={this.state.selected}
          >
            {this.buildOptions()}
          </FormControl>
        </FormGroup>
      </form>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onChange: PropTypes.func
};
