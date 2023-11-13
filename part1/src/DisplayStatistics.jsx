import { useState } from "react"
import Button from "./Button"

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
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
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