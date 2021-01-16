import React from 'react'

/* Traditional way of js function
function Greet() {
  return <h1>Hello Yuchuan</h1>
}
*/

// ES6 arrow syntax
const Greet = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Hello { props.name } is {props.heroName}</h1>
      { props.children }
    </div>
  )
}

export default Greet