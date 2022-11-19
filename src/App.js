import { useState } from "react";

import SearchFilter from "./components/SearchFilter";
import AddNew from "./components/AddNew";
import RenderContacts from "./components/RenderContacts";

const App = () => { 
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  /*State setup*/
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')


  /*Handlers*/
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

  const handleNameChange = (event) => { setNewName(event.target.value) }
  const handleNumberChange = (event) => { setNewNumber(event.target.value) }
  const handleFilterText = (event) => { setFilterText(event.target.value) }  

  return (
    <div>
      <SearchFilter value={filterText} onChange={handleFilterText}/>
      <AddNew handleSubmit={handleSubmit} newName={newName} newNumber={newNumber} nameChange={handleNameChange} numberChange={handleNumberChange}/>
      <RenderContacts persons={persons} filterText={filterText}/>
      

      {/* <div>debug: {filterText}</div> */}
    </div>
  );
}

export default App;
