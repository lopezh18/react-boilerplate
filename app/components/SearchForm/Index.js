/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  text-align: center;
  margin-bottom: 1em;
`;

const Button = styled.button`
  margin-top: 0.5em;
`;

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      state: 'AL',
      term: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.loadResults({
      term: this.state.term.trim(),
      location: `${this.state.city.trim()}, ${this.state.state}`,
    });
    this.setState({
      city: '',
      state: 'AL',
      term: '',
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="term" data-testid="find">
            Find:{' '}
          </label>
          <input
            name="term"
            placeholder="Barbers, spas, tacos"
            value={this.state.term}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="city">City: </label>
          <input
            name="city"
            placeholder="San Francisco"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="state">State: </label>
          <select
            name="state"
            value={this.state.state}
            onChange={this.handleChange}
          >
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="DC">DC</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
          </select>
          <br />
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
