import {calculateInvestmentResults, formatter} from '../util/investment.js'







export default function Result({input}) {
    const resultData = calculateInvestmentResults(input);

    const initialInvestment = input.initialInvestment;
    const year = input.duration;
    const annualInvestment = input.annualInvestment;
     
    console.log(resultData)
    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map((yearData)=> {
                    const totalInterest = yearData.valueEndOfYear - yearData.interest * yearData.year;
                    const investedCapital = initialInvestment + annualInvestment * yearData.year;

                      return (
                        <tr key={yearData.year}>
                            <td>
                                {yearData.year}
                            </td>

                            <td>
                                {formatter.format(yearData.valueEndOfYear)}
                            </td>

                            <td>
                                {formatter.format(yearData.interest)}
                            </td>
                            
                            <td>
                                {formatter.format(totalInterest)}
                            </td>
                            
                            <td>
                                {investedCapital}
                            </td>
                        </tr>
                      )      
                })}
            </tbody>
        </table>
    )
 }