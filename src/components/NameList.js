import React from 'react'
import Person from './Person'

function NameList() {
  /*
  const persons = [
    {
      id: 1,
      name: 'Adam',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Black',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Clark',
      age: 20,
      skill: 'JavaScript'
    },
  ]
  const personList = persons.map(person => (<Person key = { person.id } person = {person} />))
  return(
    <div>{ personList }</div>
  )
  */

  const names = ['Adam', 'Black', 'Clark', 'Adam']
  const nameList = names.map((name, index) => <h2 key = { index }>{ index } { name }</h2>)
  return <div>{ nameList }</div>
}

export default NameList