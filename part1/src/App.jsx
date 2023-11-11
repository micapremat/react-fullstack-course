import { useState } from "react"
import Display from "./Display"
import Button from "./Button"
import History from "./History"
import Statistics from "./Statistics"

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>
        {props.parts[0].name} {props.parts[0].exercises}
      </p>
      <p>
        {props.parts[1].name} {props.parts[1].exercises}
      </p>
      <p>
        {props.parts[2].name} {props.parts[2].exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  //useState function must not be called from inside of a loop, a conditional expression or any place that is not a function defining a component.
  const [ counter, setCouter ] = useState(0)
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)
  const [ allClicks, setAll ] = useState([])
  const [ total, setTotal ] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(updatedRight + left)
  }

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  // setTimeout(
  //   () => setCouter(counter + 1), 1000
  // )
  const increaseByOne = () => {
    setCouter(counter + 1)
  }
  const setToZero = () => {
    setCouter(0)
  }

  return (
    <div>
      <Statistics />
      {/* {left}
      <Button onClick={handleLeftClick} text={'Left'}/>
      <Button onClick={handleRightClick} text={'Right'}/>
      {right}
      <History allClicks={allClicks}/>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text={'Increase'}/>
      <Button onClick={setToZero} text={'Zero'}/>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/> */}
    </div>
  )
}

export default App