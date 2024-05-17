import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  console.log("render");

  const [counter, setCounter] = useState(value);

  const handleAdd = () => setCounter(counter + 1);

  const handleRemove = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>add +1</button>
      <button onClick={handleRemove}>remove -1</button>
      <button onClick={handleReset}>reset counter</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
