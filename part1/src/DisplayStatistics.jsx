import { useState } from "react"
import Button from "./Button"
import SatisticLine from "./StatisticLine"

const DisplayStatistics = ({total,good,bad, neutral}) => {

    const percentagePositive = () => {
        if (total > 0) {
            let percentage = (good * 100) / total
            return percentage
        }
        return 0
    }

    const calculateAverage = () => {
        if (total > 0) {
            return ((good - bad) / total)
        }
        return 0
    }
    if(total > 0) {
        return (
            <div>
                <h2>Statistics</h2>
                <table>
                    <thead>
                    <tr>
                        <th><SatisticLine text={'Good:'} value={good}/></th>
                    </tr>
                    <tr>
                        <th><SatisticLine text={'Neutral:'} value={neutral}/></th>
                    </tr>
                    <tr>
                        <th><SatisticLine text={'Bad:'} value={bad}/></th>
                    </tr>
                    </thead>
                </table>
                <p>All: {total}</p>
                <p>Average: {calculateAverage()}</p>
                <p>Positive: {percentagePositive()}%</p>
            </div>
        )
    }
    return (
        <div>
            <h2>Statistics</h2>
            <p>No feedback given</p>
        </div>
    )
}

export default DisplayStatistics