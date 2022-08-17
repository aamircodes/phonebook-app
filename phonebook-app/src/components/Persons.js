import React from 'react'

const Persons = ({ persons, filter }) => {
  const filtered = !filter ? persons : persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      {filtered.map((person) => {
        return (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        )
      })}
    </div>
  )
}

export default Persons
