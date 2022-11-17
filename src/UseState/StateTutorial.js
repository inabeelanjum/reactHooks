import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("use state example");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
