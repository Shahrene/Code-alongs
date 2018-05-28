import React from 'react'

export default class Slider extends
React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: this.props.startValue || 0
    }
  }

  handleChange(event) {

    this.setState({ value: event.target.value }) //sets the new state when slider change
  }

  render() {
    return <div>

      <input type="range"
      onChange={this.handleChange}
      min="0" max="10" step="1"
      value={this.state.value} />

      <input type="text"
      onChange={this.handleChange}
      value={this.state.value} />
    </div>
    }
}
