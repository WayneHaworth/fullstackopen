import { useState } from "react";

const App = () => {

  const person = {
    name: "wayne",
    age: 42
  }

var thing = {...person, age: person.age -10}

person.name = "sharon"
console.log(person.name)
console.log(thing.name)

  return (
    <div>
    </div>
  )
}

export default App;
