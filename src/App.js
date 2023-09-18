import { useState } from "react";
import { Header, Form, Results } from "./components";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculatedData = [];
  if (userInput) {
    let currentSavings = +userInput.currentSavings;
    const yearlySavings = +userInput.yearlySavings;
    const expectedInterest = +userInput.expectedInterest / 100;
    const investmentDuration = +userInput.investmentDuration;

    for (let i = 0; i < investmentDuration; i++) {
      const yearlyInterest = currentSavings * expectedInterest;
      currentSavings += yearlyInterest + yearlySavings;
      calculatedData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlySavings: yearlySavings,
      });
    }
  };

  return (
    <div>
      <Header />

      <Form setUserInput={ setUserInput } />

      { !userInput && <p className="info-text">No data to display</p> }

      { userInput && <Results results={ calculatedData } INITIAL_INVESTMENT={ userInput.currentSavings } /> }
    </div>
  );
}

export default App;
