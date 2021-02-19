import React from 'react'
import ReactDOM from 'react-dom'


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


/*1.4
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
}*/

/* part1.3
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
*/



/* 1.1- 1.2
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
}*/

ReactDOM.render(<App />, document.getElementById('root'))