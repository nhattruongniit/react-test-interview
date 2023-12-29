import React from "react";

export default function SkipFirstRender() {
  
  // code something here ...
  
  React.useEffect(() => {
    console.log('run effect')
  },  [])
  
  return (
    <div className="App">
      <h2>Skip first render</h2>

      <button type="button">Submit</button>
    </div>
  );
}
