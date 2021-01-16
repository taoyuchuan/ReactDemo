import React, { Component } from 'react'

// destruct props in render() method
class Welcome extends Component {
  render() {
    const { name, heroName } = this.props
    // const { state1. state2 } = this.state
    return <h1>Welcome { name } is { heroName }</h1>
  }
}

export default Welcome