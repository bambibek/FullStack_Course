
import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Statistics = (props) => {
  if (!props.good && !props.neutral && !props.bad) {
    return (<p>No feedback given.</p>)
  }

  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={props.good} />
          <Statistic text="neutral" value={props.neutral} />
          <Statistic text="bad" value={props.bad} />
          <Statistic text="All" value={addition(props.good, props.neutral, props.bad)} />
          <tr><td> Average</td><td>{average(props.good, props.neutral, props.bad)}</td></tr>
          <tr><td> Positive</td><td>{positive(props.good, props.neutral, props.bad)}</td></tr></tbody>
      </table>
    </div>
  )
}
const Statistic = (props) => {
  return (

    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>

  )
}


const addition = (good, neutral, bad) => {
  const add = good + neutral + bad
  return add
}
const average = (good, neutral, bad) => {
  return (addition(good, neutral, bad) / 3)
}
const positive = (good, neutral, bad) => {
  const positive = (good / addition(good, neutral, bad)) * 100
  return positive
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const click = good + 1
    setGood(click)

  }
  const handleNeutralClick = () => {
    const click = neutral + 1
    setNeutral(click)
  }
  const handleBadClick = () => {
    const click = bad + 1
    setBad(click)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)


/*
import React, {useState} from 'react'

import ReactDOM from 'react-dom'
//import { useState } from 'react'


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {

  return (
    < div >
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />

    </div >
  )

}

const Part = (props) => {

  return (

    <p>
      {props.part.name} {props.part.exercises}
    </p>

  )
}
const Total = (props) => {

  return (
    <p>Number of exercises : {props.exercises[0].exercises + props.exercises[1].exercises + props.exercises[2].exercises}</p>
  )

}
//1.5
const App = () => {

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

  return (
    <div>
      < Header course={course.name} />
      <Content parts={course.parts} />
      < Total exercises={course.parts} />
    </div>
  )
}

//1.4
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={parts} />
    </div>
  )
}

// part1.3
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>

      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises={(part1.exercises + part2.exercises + part3.exercises)} />

    </div>
  )


}




// 1.1- 1.2
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      < Header course={course} />
      < Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      < Total exercises={exercises1 + exercises2 + exercises3} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
*/
