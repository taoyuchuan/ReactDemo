import React from 'react'

/* Traditional way of js function
function Greet() {
  return <h1>Hello Yuchuan</h1>
}
*/

// ES6 arrow syntax
// destruct props in function body
const Greet = (props) => {
  const { name, heroName } = props
  console.log(props)
  return (
    <div>
      <h1>Hello { name } is { heroName }</h1>
      { props.children }
    </div>
  )
}

/*
// destruct props in functional parameters
const Greet = ({ name, heroName }) => {
  return (
    <div>
      <h1>Hello { name } is { heroName }</h1>
    </div>
  )
}
*/

export default Greet