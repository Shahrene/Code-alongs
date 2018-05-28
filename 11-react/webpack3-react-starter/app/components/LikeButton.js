import React from 'react'

export default class LikeButton extends
React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this) //in here the this keyword still refers to the component
    this.state = {
      count: 0
    }
  }

  handleClick(event) {
    this.setState({ //react will redraw. //the this keyword is not referring to the component
      count: this.state.count + 1
    })
  }
  render() {
    return <div>
      <button onClick={this.handleClick}> Like </button>
      <span> {this.state.count} </span>
    </div>
  }
}
