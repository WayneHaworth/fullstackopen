import { useState } from "react";

const App = () => { 
  const [persons, setPersons] = useState([
    { name: 'Wayne Haworth' }
  ])
  const [newName, setNewName] = useState('')
 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.every(person => person.name !== newName)) {
      const nameObject = { name: newName }
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
    else {
      console.log(`${newName} already exists`)
      alert(`${newName} already exists`)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Number</h2>
      <ul>
        {persons.map( person => <li key={person.name}>{person.name}</li>)}
      </ul>
      <div>debug: {newName}</div>
    </div>
  );
}

export default App;
