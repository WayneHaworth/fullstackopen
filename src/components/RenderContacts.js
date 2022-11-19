const RenderContacts = ({persons, filterText}) => {
    return (
        <div>
          {
            persons
              .filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))
              .map( person => <RenderContact key={person.name} personName={person.name} personNumber={person.number}/>)
          }
        </div>
    )
  }

const RenderContact = ({personName, personNumber}) => {
  return (
    <div key={personName}> {personName} {personNumber}</div>
  )
}

export default RenderContacts