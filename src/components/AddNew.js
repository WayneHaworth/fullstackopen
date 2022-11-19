const AddNew = ({handleSubmit, newName, newNumber, nameChange, numberChange}) => {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>name: <input value={newName} onChange={nameChange}/></div>
            <div>number: <input value={newNumber} onChange={numberChange}/></div>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    )
  }

  export default AddNew