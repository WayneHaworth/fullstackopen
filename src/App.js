import { useState } from "react";

const App = () => { 
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.every(person => person.name !== newName)) {
      const nameObject = { 
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
    else {
      console.log(`${newName} already exists`)
      alert(`${newName} already exists`)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>name: <input value={newName} onChange={handleNameChange}/></div>
          <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map( 
          person => 
            <div key={person.name}>
              {person.name} {person.number}
              </div>
          )
        }
      </div>

      {/* <div>debug: {newName}</div> */}
    </div>
  );
}

export default App;
