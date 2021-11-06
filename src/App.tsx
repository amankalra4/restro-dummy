import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let value1: string = "aman";
  let value2: number = 2;
  let value3: boolean = false;
  let value4: number[] = [1,2,3,4,5]; // 1st way of declaring value in array
  let value5: Array<string> = ["a", "1", "b", "2"]; // 2nd way of declaring value in array
  let sampleArray: Array<string | number> = ["a", 1, "b", 22, 33, 44, "c"];
  // let tuple: [string, number] = ["1", "2", 3, 4]; // its invalid
  let tuple: [string, number] = ["1", 2]; // its valid
  const warning = () : void => { // return type of function
    console.log("WARNING");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.<br />
          The value of value1 is: {value1}<br />
          The value of value2 is: {value2}<br />
          The value of value3 is: {value3}<br />
          The value of value4 is: {value4}<br />
          The value of value5 is: {value5}<br />
          The value of tuple is: {tuple}<br />
          The value of sampleArray is: {sampleArray}<br />
        </p>
        <img src={`https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*`} alt="xyzz" />
        <img src={`https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png`} alt="xyzz" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
