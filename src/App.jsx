import { useState, useEffect } from 'react';
import './App.css';
import { ChakraProvider, Spinner } from '@chakra-ui/react';
import Input from './components/Input';

function App() {
  // const [height, setHeight] = useState(0);
  // const [diameter, setDiameter] = useState(0);
  // const [thickness, setThickness] = useState(0);
  // const [result, setResult] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(()=>{
  //   console.log('updated: ', {height, diameter, thickness})
  // }, [height, diameter, thickness])

  return (
    <Input />
    // results display component
  );
}

export default App;
