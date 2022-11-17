import { useState } from "react";

const App = () => { 
  const [persons, setPersons] = useState([
    { name: 'Wayne Haworth' }
  ])
  const [newName, setNewName] = useState('')
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
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
