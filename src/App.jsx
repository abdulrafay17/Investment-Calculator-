import Header from "./components/Header"
import UserInput from "./components/user-input"
import Result from "./components/result";

import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 1 
  });

  const check = userInput.duration >= 1

  function handleChange(inputIdentifier, newValue) {
      setUserInput((prev)=> { 
          return {
              ...prev,
              [inputIdentifier]: newValue,
          }
      });
  }
  
  return (
    <>
    <Header />
    <UserInput onChange={handleChange} userInput={userInput} />
    {!check && <p className="center">Please input more than 0</p>}
    {check && <Result input={userInput} />}
    </>
  )
}

export default App
