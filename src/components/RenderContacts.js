const RenderContacts = ({persons, filterText}) => {
    return (
      <div>
        <h2>Numbers</h2>
        <div>
          {
            persons
              .filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))
              .map( person => <RenderContact key={person.name} personName={person.name} personNumber={person.number}/>)
          }
        </div>
      </div>
    )
  }

const RenderContact = ({personName, personNumber}) => {
  return (
    <div key={personName}> {personName} {personNumber}</div>
  )
}

export default RenderContacts