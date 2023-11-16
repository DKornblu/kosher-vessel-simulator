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
    // volume of cylinder: V = (pi)(r^2)(h)
    // let h = height, t = thickness, r = outer radius, r-t = inner radius
    // outer volume = (pi)(r^2)(h)
    // inner volume = (pi)([r-t]^2)(h)
    // wall volume = outer-inner = (pi)(h)([r^2]-[(r-t)^2])
    // base = (pi)(r^2)(t) --> (cylinder whose height is the pot thickness)
    // volume of metal of a pot: wall volume + base volume
    // TotalVolume = (pi)(h)([r^2]-[(r-t)^2])+(pi)(r^2)(t)

    let pi = Math.PI;
    let t = parseFloat(thickness);
    let d = parseFloat(diameter);
    let h = parseFloat(height);
    let r = ((d/2) + t);

    let outVolume = pi*(r**2)*h;
    let inVolume = pi*((r-t)**2)*h;
    let wallVolume = outVolume - inVolume;
    let baseVolume = pi*(r**2)*(t);
    let totalVolume = wallVolume + baseVolume;

    console.group();
    console.log("pi", pi)
    console.log("height", h)
    console.log("outer radius", r)
    console.log("inner radius", (r-t)**2)
    console.log("inner vol", inVolume)
    console.log("outer vol", outVolume)
    console.log("wall vol", wallVolume)
    console.log("base vol", baseVolume)
    console.log("Total vol", totalVolume)
    console.groupEnd();


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

        <button onClick={handleSubmit}>Calculate</button>
      </div>

      <div className="result-container">
        <label>Result: </label>
        <>{result}</>
      </div>
    </div>
  );
}

export default App;
