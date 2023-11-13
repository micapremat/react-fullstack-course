import { useState } from "react"
import Button from "./Button"
import DisplayStatistics from "./DisplayStatistics"

const Statistics = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)

    const increaseGood = () => {
        const updateGood = good + 1
        setGood(updateGood)
        setTotal(total + 1)
    }

    const increaseNeutral = () => {
        const updateNeutral = neutral + 1
        setNeutral(updateNeutral)
        setTotal(total + 1)
    }

    const increaseBad = () => {
        const updateBad  = bad + 1
        setBad(updateBad)
        setTotal(total + 1)
    }

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
    return (
        <div>
            <h2>Give feedback</h2>
            <Button onClick={increaseGood} text={'Good'}/>
            <Button onClick={increaseNeutral} text={'Neutral'}/>
            <Button onClick={increaseBad} text={'Bad'}/>
            <DisplayStatistics good={good} bad={bad} total={total} neutral={neutral}/>
        </div>
    )
}

export default Statistics