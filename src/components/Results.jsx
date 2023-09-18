const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Results = ({ results, INITIAL_INVESTMENT }) => {
  return (
    <table className='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => {
          return (
            <tr key={index}>
              <td>{result.year}</td>
              <td>{formatter.format(result.savingsEndOfYear)}</td>
              <td>{formatter.format(result.yearlySavings)}</td>
              <td>
                {formatter.format(
                  result.savingsEndOfYear -
                    INITIAL_INVESTMENT -
                    result.yearlySavings * result.year
                )}
              </td>
              <td>
                {formatter.format(
                  INITIAL_INVESTMENT + result.yearlySavings * result.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
