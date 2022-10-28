import { useState } from "react";


const Display = ({counter}) => <div>{counter}</div>
const Button = ({onClick, name}) => <button onClick={onClick}>{name}</button>



const App = () => {
  const [counter, setCounter] = useState(10);
  const increaseByOne = () => setCounter(counter+1)
  const decreaseByOne = () => setCounter(counter-1)
  const resetToZero = () => setCounter(0)

  return (
    <>
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        name="plus"
      />
      <Button
        onClick={decreaseByOne}
        name="minus"
      />
      <Button
        onClick={resetToZero}
        name="reset"
      />
    </>
  );
};

export default App;
