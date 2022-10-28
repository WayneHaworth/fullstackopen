import { useState } from "react";

const Button = ({ buttonHandle }) => <button onClick={buttonHandle}>Reset value</button>;


const App = () => {
  const [value, setValue] = useState(100);

  const increaseValue = () => {
    setValue(0);
  };

  return (
    <div>
      {value}
      <Button buttonHandle={increaseValue} />
    </div>
  );
};

export default App;
