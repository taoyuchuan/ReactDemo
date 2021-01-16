import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello'
    }

    {/* Binding in the constructor. Good performance */}
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.setState({
      message: 'Goodbye!'
    })
    console.log(this)
  }

  //  Using arrow function can avoid binding in the constructor
  //  clickHandler = () => {
  //    this.setState({
  //      message: 'Goodbye!'
  //    })
  //    console.log(this)
  //  }

  render() {
    return(
      <div>
        <div>{ this.state.message }</div>
        {/* Call method, but needs to bind. Performance not good */}
        {/* <button onClick = { this.clickHandler.bind(this) }>Click</button> */}

        {/* Using arrow function. Automatically bind. Performance not good */}
        {/* <button onClick = { () => this.clickHandler() }>Click</button> */}

        <button onClick = { this.clickHandler }>Click</button>
      </div>
    )
  }
}

export default EventBind