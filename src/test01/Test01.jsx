import React, { useState } from "react";

// components
import Title from "./components/Title";
import Count from "./components/Count";
import Button from "./components/Button";

export default function Test01() {
  const [age, setAge] = useState(1);
  const [salary, setSalary] = useState(1000);

  const incrementAge = () => {
    setAge(age + 1);
  };

  const incrementSalary = () => {
    setSalary(salary + 1000);
  };

  return (
    <div className="App">
      <Title />
      <Count text="Age" count={age} />
      <Button onClick={incrementAge}>Increment Age</Button>
      <br /> <br />
      <Count text="Salary" count={salary} />
      <Button onClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}
