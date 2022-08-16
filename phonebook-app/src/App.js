import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()

    const person = {
      name: newName,
      id: persons.length + 1,
    }

    setPersons(persons.concat(person))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
        <h2>Numbers</h2>
        <ul>
          {persons.map((p) => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default App
