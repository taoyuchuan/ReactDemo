import React from 'react'

const Hello = () => {

  // using JSX.
  //return (
  //  <div id = 'hello' className = 'dummyClass'>
  //    <h1>Hello Yuchuan</h1>
  //  </div>
  //)

  // Using createElement methods.
  return React.createElement(
    'div',
    {id: 'hello', className: 'dummyClass'},
    React.createElement('h1', null, 'Hello Yuchuan')
  )
}

export default Hello