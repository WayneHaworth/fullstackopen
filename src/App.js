import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(10);

  return (
    <>
      <div>{counter}</div>
    </>
  );
};

export default App;
