import React, { Component } from 'react'
import CheckBox from './CheckBox'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      comments: '',
      topic: 'react',
      fruits: [
        {id: 1, value: "banana", isChecked: false},
        {id: 2, value: "apple", isChecked: false},
        {id: 3, value: "mango", isChecked: false},
        {id: 4, value: "grape", isChecked: false}
      ]
    }
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handleCommentsChange = event => {
    this.setState({
      comments: event.target.value
    })
  }

  handleTopicChange = event => {
    this.setState({
      topic: event.target.value
    })
  }

  handleAllChecked = event => {
    let fruits = this.state.fruits
    fruits.forEach(fruit => fruit.isChecked = event.target.checked)
    this.setState({ fruits: fruits })
  }

  handleCheckChildElement = event => {
    let fruits = this.state.fruits
    fruits.forEach(fruit => {
         if (fruit.value === event.target.value)
            fruit.isChecked = event.target.checked
    })
    this.setState({ fruits: fruits })
  }

  handleSubmit = event => {
    alert(`${ this.state.username } ${ this.state.comments } ${ this.state.topic }`)
    event.preventDefault()
  }

  render() {
    const { username, comments, topic } = this.state
    return(
      <form onSubmit = { this.handleSubmit }>
        <div>
          <label>Username</label>
          <input
            type = 'text'
            value = { username }
            onChange = { this.handleUsernameChange }
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value = { comments }
            onChange = { this.handleCommentsChange }
          />
        </div>
        <div>
          <label>Topic</label>
          <select value = { topic } onChange = { this.handleTopicChange }>
            <option value = 'react'>React</option>
            <option value = 'angular'>Angular</option>
            <option value = 'vue'>Vue</option>
          </select>
        </div>
        <div>
          <h1> Check and Uncheck All Example </h1>
          <input type="checkbox" onClick={ this.handleAllChecked }  value="checkedall" /> Check / Uncheck All
            <ul>
              {
                this.state.fruits.map((fruit) => {
                  return (<CheckBox handleCheckChildElement={this.handleCheckChildElement}  {...fruit} />)
                })
              }
            </ul>
         </div>
        <button type = 'submit'>Submit</button>
      </form>
    )
  }
}

export default Form