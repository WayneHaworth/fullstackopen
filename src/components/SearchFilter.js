const SearchFilter = ({filterText, onChange}) => {
    return (
    <div>
      <div>filter shown with <input value={filterText} onChange={onChange}/></div>
    </div>
    )
  }

  export default SearchFilter