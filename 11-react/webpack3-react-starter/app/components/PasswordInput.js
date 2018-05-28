import React from 'react'
import './PasswordInput.scss'
import passwordMeter from '../../lib/passwordMeter'

export default class PasswordInput extends
React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      password: ''
    }
  }

  handleChange(event) {
    this.setState({password: event.target})
  }

  render() {
    const strength = passwordMeter(this.state.password)
    return <div>
      <label> Password </label>
      <input type="password"
        onChange={this.handleChange} />
      <span className={strength}> Password strength: {strength}</span>
    </div>
  }
}
