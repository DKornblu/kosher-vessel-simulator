import { useState, useEffect } from 'react';
import './App.css';
import { ChakraProvider, Spinner } from '@chakra-ui/react';

function App() {
  const [height, setHeight] = useState(0);
  const [diameter, setDiameter] = useState(0);
  const [thickness, setThickness] = useState(0);
  const [result, setResult] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // let h = height, t = thickness, r = outer radius, r-t = inner radius
    // volume of cylinder: V = (pi)(r^2)(h)
    // outer volume = (pi)(r^2)(h), inner volume = (pi)([r-t]^2)(h)
    // Wall volume = outer vol - inner vol
    // base volume = (pi)(r^2)(t) --> (cylinder volume whose height is the pot thickness)
    // Total volume of metal: wall volume + base volume

    let pi = Math.PI;
    let t = parseFloat(thickness);
    let d = parseFloat(diameter);
    let h = parseFloat(height);
    let r = d / 2 + t; // outer radius

    let outVolume = pi * r ** 2 * (h - t);
    let inVolume = pi * (r - t) ** 2 * (h - t);
    let wallVolume = outVolume - inVolume;
    let baseVolume = pi * r ** 2 * t;
    let totalMetalVolume = wallVolume + baseVolume;
    let innerToMetalRatio = inVolume / totalMetalVolume;
    let percentRatio = innerToMetalRatio * 100;

    console.group();
    console.log(
      'height =',
      h,
      ', outer radius =',
      r,
      ', inner radius =',
      r - t
    );
    console.log('inner vol =', inVolume, ', outer vol =', outVolume);
    console.log(
      'wall vol = (outer - inner) =',
      wallVolume,
      ', base vol =',
      baseVolume
    );
    console.log('Total vol = wall + base =', totalMetalVolume);
    console.log(
      'inner volume to metal volume ratio: ',
      innerToMetalRatio
    );
    console.groupEnd();

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // setResult();
  };

  // useEffect(()=>{
  //   console.log('updated: ', {height, diameter, thickness})
  // }, [height, diameter, thickness])

  return (
    // <ChakraProvider>
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

        <div>
          {isLoading ? <>Loading</> : null}
          {/* {isLoading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          ) : null} */}
        </div>

        <div className="result-container">
          <label>Result: </label>
          <>{result}</>
        </div>
      </div>
    // </ChakraProvider>
  );
}

export default App;
