import { useState } from "react";

const App = () => {
  const [count, getCount] = useState(10);

  // Function to increment count
  const incrementCount = () => (getCount(count + 1))
  const decrementCount = () => (getCount(count - 1))



  return (
    <div>
      <button onClick={incrementCount}>Increase</button>
      <button onClick={decrementCount}>Decrease</button>
      <h1>Count: {count}</h1>
   </div>
  )
};

export default App;
