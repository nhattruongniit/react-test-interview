import React from "react";

export default function Test02() {
  
  // code something here ...
  
  React.useEffect(() => {
    console.log('run effect')
  },  [])
  
  return (
    <div className="App">
      <h2>Test02: Skip first render</h2>

      <button type="button">Submit</button>
    </div>
  );
}
