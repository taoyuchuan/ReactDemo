import React from 'react'
import Person from './Person'

function NameList() {
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
  const personList = persons.map(person => (<Person person = {person} />))
  return(
    <div>{ personList }</div>
  )
}

export default NameList