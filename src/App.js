import { useState } from "react";


const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good || neutral || bad) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={((good + neutral + bad) / 3).toFixed(2)} />
          <StatisticLine text="positive" value={(good / (good + neutral + bad) * 100).toFixed(2)} />
        </tbody>
      </table>
    )
  } else return (
    <p>No feedback given</p>
  )
}

const StatisticLine = ({value, text}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (feedback) => {
    if (feedback === "good") {
      return setGood(good + 1);
    } else if (feedback === "neutral") {
      return setNeutral(neutral + 1);
    } else if (feedback === "bad") {
      return setBad(bad + 1);
    }
  }

  const handleAll = () => {
    return good + neutral + bad;
  } 

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" handleClick={() => handleClick("good")}/>
      <Button text="neutral" handleClick={() => handleClick("neutral")}/>
      <Button text="bad" handleClick={() => handleClick("bad")}/>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App;
