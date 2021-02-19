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
      <Part part={props.part1.name} exercise={props.part1.exercises} />
      <Part part={props.part2.name} exercise={props.part2.exercises} />
      <Part part={props.part3.name} exercise={props.part3.exercises} />

    </div >
  )

}

const Part = (props) => {
  return (

    <p>
      {props.part} {props.exercise}
    </p>

  )
}
const Total = (props) => {
  return (
    <p>Number of exercises : {props.exercises}</p>
  )

}

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




/*
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