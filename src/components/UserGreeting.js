import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    // Using if/else for conditional rendering.
    /*
    if(this.state.isLoggedIn) {
      return(
        <div>
          Welcome Yuchuan
        </div>
      )
    } else {
      return(
        <div>
          Welcome Guest
        </div>
      )
    }
    */

    // Using js variable for conditional rendering
    /*
    let message
    if(this.state.isLoggedIn) {
      message = <div>Welcome Yuchuan</div>
    } else {
      message = <div>Welcome Guest</div>
    }
    return <div>{ message }</div>
    */

    // Using ternary operator for conditional rendering
    return (
      this.state.isLoggedIn ?
      <div>Welcome Yuchuan</div> :
      <div>Welcome Guest</div>
    )

    // Using short circuit operator to render yes result or nothing
    /*
    return this.state.isLoggedIn && <div>Welcome Yuchuan</div>
    */
  }

}

export default UserGreeting