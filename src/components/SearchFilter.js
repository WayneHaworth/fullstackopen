const SearchFilter = ({filterText, onChange}) => {
    return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={filterText} onChange={onChange}/></div>
    </div>
    )
  }

  export default SearchFilter