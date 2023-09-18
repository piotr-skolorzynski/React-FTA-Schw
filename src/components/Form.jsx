import { useState } from 'react';

const Form = ({ setUserInput }) => {
  const [formData, setFormData] = useState({
    currentSavings: '',
    yearlySavings: '',
    expectedInterest: '',
    investmentDuration: '',
  });

  const handleInputChange = (event) => {
    switch (event.target.id) {
      case 'current-savings':
        setFormData((prevValue) => {
          return { ...prevValue, currentSavings: event.target.value };
        });
        break;
      case 'yearly-contribution':
        setFormData((prevValue) => {
          return { ...prevValue, yearlySavings: event.target.value };
        });
        break;
      case 'expected-return':
        setFormData((prevValue) => {
          return { ...prevValue, expectedInterest: event.target.value };
        });
        break;
      case 'duration':
        setFormData((prevValue) => {
          return { ...prevValue, investmentDuration: event.target.value };
        });
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    setFormData({
      currentSavings: '',
      yearlySavings: '',
      expectedInterest: '',
      investmentDuration: '',
    });
  };

  const hanndleSubmit = (event) => {
    event.preventDefault();
    setUserInput(formData);
    handleReset();
  };

  return (
    <form className='form' onSubmit={hanndleSubmit}>
      <div className='input-group'>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            value={formData.currentSavings}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            value={formData.yearlySavings}
            onChange={handleInputChange}
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input
            type='number'
            id='expected-return'
            value={formData.expectedInterest}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            value={formData.investmentDuration}
            onChange={handleInputChange}
          />
        </p>
      </div>
      <p className='actions'>
        <button type='reset' className='buttonAlt'>
          Reset
        </button>
        <button type='submit' className='button'>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
