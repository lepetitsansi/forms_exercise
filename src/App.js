import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      location: "Paris",
      allergies: [
        {value: "vegetarian", isChecked: false},
        {value: "lactose", isChecked: false},
        {value: "kosher", isChecked: false}
      ]

    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    return (
      <main className="main">
        <form>
          <input placeholder="First Name" /><br />
          <input placeholder="Last Name" /><br />
          <input placeholder="Age" /><br />

          <label>Gender:</label>
          <label>
            <input 
              type="radio" 
              name="gender" 
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />Male
          </label>
          <label>
            <input 
              type="radio" 
              name="gender" 
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />Female
          </label>
          <br />

          <select
            value={this.state.location}
            onChange={this.handleChange}
            name="location"
          >
            <option value="choose">-- Please choose a destination --</option>
            <option value="paris">Paris</option>
            <option value="copenhagen">Copenhagen</option>
            <option value="london">London</option>
            <option value="colombo">Colombo</option>
            <option value="geneve">Geneve</option>

          </select>

          <br />

          <label>
            <input 
            type="checkbox" 
            name="allergies"
            checked={this.state.allergies.value}
            onChange={this.handleChange}
            /> Vegetarian
          </label>

          <br />

          <label>
            <input 
            type="checkbox" 
            name="allergies"
            checked={this.state.allergies.value}
            onChange={this.handleChange}
            /> Lactose free
          </label>

          <br />

          <label>
            <input 
            type="checkbox" 
            name="allergies"
            checked={this.state.allergies.value}
            onChange={this.handleChange}
            /> Kosher
          </label>
          <br />
          <button>Submit</button>

        </form>
      </main>
      )
  }
}

export default App;
