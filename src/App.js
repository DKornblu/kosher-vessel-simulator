import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState(0);
  const [diameter, setDiameter] = useState(0);
  const [thickness, setThickness] = useState(0);
  const [result, setResult] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // calculations

    // setResult();
  };

  // useEffect(()=>{
  //   console.log('updated: ', {height, diameter, thickness})
  // }, [height, diameter, thickness])

  return (
    <div className="App">
      <div className="input-container">
        <form className="dimensions" onSubmit={handleSubmit}>
          <h1>Vessel Dimensions</h1>
          <div className="value">
            <label htmlFor="height">Height: </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="value">
            <label htmlFor="diameter">Inner diameter: </label>
            <input
              type="number"
              id="diameter"
              value={diameter}
              onChange={(e) => setDiameter(e.target.value)}
            />
          </div>
          <div className="value">
          <label htmlFor="thickness">Wall thickness: </label>
          <input
            type="number"
            id="height"
            value={thickness}
            onChange={(e) => setThickness(e.target.value)}
          />
          </div>
        </form>
      </div>

      <div className="result-container">
        <label>Result: </label>
        <>{result}</>
      </div>
    </div>
  );
}

export default App;
