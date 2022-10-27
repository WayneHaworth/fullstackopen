const Hello = ({ age , scores, name }) => {
  const bornYear = () => new Date().getFullYear() - age
  const getAverage = (arr) => {
    let running = 0
    arr.forEach(score => running += score)
    return running / arr.length
  }
  
  return (
    <div>
      <p>Hello {name}, you are {age} years old. Your average score is: {getAverage(scores)}</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10
  const scores = [10, 20, 30, 40, 50, 60, 70]

  return (
    <div>
      <h1>Hello World</h1>
      <Hello name={name} age={age} scores={scores}/>
    </div>
  )
}

export default App