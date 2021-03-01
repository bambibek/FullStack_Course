import React from 'react'
import Part from './Part'

const Course = (props) => {
    const course = props.course
    const exercises = course.parts.map((part) => part.exercises)
    return (
        <div>
            <h1>{course.name}</h1>
            <ul>
                {course.parts.map((part) =>
                    <Part key={part.id} part={part} />
                )}
            </ul>
            <p> Total of  {exercises.reduce((sum, exercise) => { return sum + exercise })} Exercises.</p>

        </div>
    )
}


export default Course